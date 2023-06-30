import React, { useState, useRef, useEffect } from 'react';
import { injectStyle } from '../utils/injectStyle';
import { createTheme } from '../theme';
import './select.css';

injectStyle('Select', {});
createTheme();

export const Select = ({
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
        <div className="CoreLabUI-classic CoreLabUI-classic__wrapper">
            <div
                className={`CoreLabUI-classic__root CoreLabUI-classic__root--${
                    disabled ? 'disabled' : ''
                } CoreLabUI-classic__root--${error ? 'error' : ''}`}
                ref={ref}
                onClick={() => toggle(!open)}>
                {label && (
                    <label className="CoreLabUI-classic__select-label">
                        {label}
                    </label>
                )}
                <input
                    {...props}
                    value={options?.find((o) => o.value === value)?.label}
                    className={`CoreLabUI-classic__select CoreLabUI-classic__select--${size} CoreLabUI-classic__select--${
                        error ? 'error' : ''
                    }`}
                    readOnly
                    ref={inputRef}
                />
                {helperText && (
                    <span className="CoreLabUI-classic__select-helper-text">
                        {helperText}
                    </span>
                )}
            </div>
            <div
                className={`CoreLabUI-classic__select-menu CoreLabUI-classic__select-menu--${
                    open ? 'open' : 'closed'
                }`}>
                {options?.map((option, index) => (
                    <div
                        key={index}
                        value={option.value}
                        className={`CoreLabUI-classic__select-menu__option
                        ${
                            option.value === value
                                ? 'CoreLabUI-classic__select-menu__option--selected'
                                : ''
                        }
                        ${
                            option?.disabled
                                ? 'CoreLabUI-classic__select-menu__option--disabled'
                                : ''
                        }`}
                        onClick={
                            option?.disabled
                                ? null
                                : () => onChange(option.value)
                        }>
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};
