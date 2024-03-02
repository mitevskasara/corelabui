import React, { useState, useRef, useEffect } from 'react';
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
    ...props
}) => {
    const [open, toggle] = useState(false);
    const ref = useRef();
    const inputRef = useRef();

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

    return (
        <div className="CoreLabUI CoreLabUI__wrapper">
            <div
                className={`CoreLabUI__root CoreLabUI__root--${
                    disabled ? 'disabled' : ''
                } CoreLabUI__root--${error ? 'error' : ''}`}
                ref={ref}
                onClick={() => toggle(!open)}>
                {label && (
                    <label
                        className="CoreLabUI__select-label"
                        htmlFor={props.name}>
                        {label}
                    </label>
                )}
                <input
                    {...props}
                    name={props.name}
                    value={options?.find((o) => o.value === value)?.label}
                    className={`CoreLabUI__select CoreLabUI__select--${size} CoreLabUI__select--${
                        error ? 'error' : ''
                    }`}
                    readOnly
                    ref={inputRef}
                />
                {helperText && (
                    <span className="CoreLabUI__select-helper-text">
                        {helperText}
                    </span>
                )}
            </div>
            <div
                className={`CoreLabUI__select-menu CoreLabUI__select-menu--${
                    open ? 'open' : 'closed'
                }`}>
                {options?.map((option, index) => (
                    <div
                        key={index}
                        value={option.value}
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
                        }`}
                        onClick={
                            option?.disabled ? null : () => onChange(option)
                        }>
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};
