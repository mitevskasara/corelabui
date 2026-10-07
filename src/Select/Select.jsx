import React, { useState, useRef, useEffect, useId } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './select.css';

injectTheme();
injectStyle('Select', {});

export const stylesheet = injectStylesheetServerSide('Select', {});

export default ({
    size = 'medium',
    disabled = false,
    label,
    error,
    helperText,
    options,
    onChange,
    value,
    id,
    ...props
}) => {
    const [open, toggle] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const ref = useRef();
    const inputRef = useRef();
    const uid = useId();
    const inputId = id || `${uid}-select`;
    const labelId = `${uid}-label`;
    const menuId = `${uid}-menu`;
    const helperId = helperText ? `${uid}-helper` : undefined;

    const enabledIndexes = () =>
        (options || [])
            .map((option, index) => (option?.disabled ? -1 : index))
            .filter((index) => index >= 0);

    const openMenu = () => {
        const list = enabledIndexes();
        const selected =
            options?.findIndex((option) => option.value === value) ?? -1;
        setActiveIndex(list.includes(selected) ? selected : list[0] ?? -1);
        toggle(true);
    };

    const selectOption = (option) => {
        if (option?.disabled) return;
        onChange?.(option);
        toggle(false);
    };

    const handleKeyDown = (event) => {
        if (disabled) return;
        const list = enabledIndexes();
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                if (!open) {
                    openMenu();
                    return;
                }
                if (list.length) {
                    const position = list.indexOf(activeIndex);
                    setActiveIndex(
                        position < 0
                            ? list[0]
                            : list[(position + 1) % list.length]
                    );
                }
                return;
            case 'ArrowUp':
                event.preventDefault();
                if (!open) {
                    openMenu();
                    return;
                }
                if (list.length) {
                    const position = list.indexOf(activeIndex);
                    setActiveIndex(
                        position <= 0
                            ? list[list.length - 1]
                            : list[position - 1]
                    );
                }
                return;
            case 'Home':
                if (open && list.length) {
                    event.preventDefault();
                    setActiveIndex(list[0]);
                }
                return;
            case 'End':
                if (open && list.length) {
                    event.preventDefault();
                    setActiveIndex(list[list.length - 1]);
                }
                return;
            case 'Enter':
                if (open && activeIndex >= 0) {
                    event.preventDefault();
                    selectOption(options?.[activeIndex]);
                }
                return;
            case 'Escape':
                if (open) {
                    event.preventDefault();
                    event.stopPropagation();
                    toggle(false);
                }
                return;
            case 'Tab':
                if (open) toggle(false);
                return;
            default:
                return;
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                toggle(false);
            }
        };
        if (document) {
            document?.addEventListener('click', handleClickOutside);
        }
        return () => {
            if (document) {
                document?.removeEventListener('click', handleClickOutside);
            }
        };
    }, []);

    useEffect(() => {
        if (!open || activeIndex < 0) return;
        const element = document.getElementById(`${uid}-option-${activeIndex}`);
        if (element && typeof element.scrollIntoView === 'function') {
            element.scrollIntoView({ block: 'nearest' });
        }
    }, [open, activeIndex, uid]);

    return (
        <div className="CoreLabUI CoreLabUI__wrapper">
            <div
                className={`CoreLabUI__root CoreLabUI__root--${
                    disabled ? 'disabled' : ''
                } CoreLabUI__root--${error ? 'error' : ''}`}
                ref={ref}
                onClick={() => {
                    if (disabled) return;
                    open ? toggle(false) : openMenu();
                }}>
                {label && (
                    <label
                        id={labelId}
                        className="CoreLabUI__select-label"
                        htmlFor={inputId}>
                        {label}
                    </label>
                )}
                <input
                    {...props}
                    id={inputId}
                    name={props.name}
                    value={options?.find((o) => o.value === value)?.label ?? ''}
                    className={`CoreLabUI__select CoreLabUI__select--${size} CoreLabUI__select--${
                        error ? 'error' : ''
                    }`}
                    readOnly
                    disabled={disabled}
                    ref={inputRef}
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-controls={menuId}
                    aria-activedescendant={
                        open && activeIndex >= 0
                            ? `${uid}-option-${activeIndex}`
                            : undefined
                    }
                    aria-invalid={error ? true : undefined}
                    aria-describedby={helperId}
                    onKeyDown={handleKeyDown}
                />
                {helperText && (
                    <span
                        id={helperId}
                        className="CoreLabUI__select-helper-text">
                        {helperText}
                    </span>
                )}
            </div>
            <div
                id={menuId}
                role="listbox"
                aria-labelledby={label ? labelId : undefined}
                className={`CoreLabUI__select-menu CoreLabUI__select-menu--${
                    open ? 'open' : 'closed'
                }`}>
                {options?.map((option, index) => (
                    <div
                        key={index}
                        id={`${uid}-option-${index}`}
                        role="option"
                        aria-selected={option.value === value}
                        aria-disabled={option?.disabled || undefined}
                        className={`CoreLabUI__select-menu__option--${size}
                        ${
                            option.value === value
                                ? 'CoreLabUI__select-menu__option--selected'
                                : ''
                        }
                        ${
                            option?.disabled
                                ? 'CoreLabUI__select-menu__option--disabled'
                                : ''
                        }
                        ${
                            index === activeIndex && open
                                ? 'CoreLabUI__select-menu__option--active'
                                : ''
                        }`}
                        onClick={() => selectOption(option)}>
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};
