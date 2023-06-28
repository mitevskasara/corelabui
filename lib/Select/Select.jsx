import React, { useState, useRef, useEffect } from 'react';
import { injectStyle } from '../utils/injectStyle';
import './select.css';

injectStyle('Select', {});

export const Select = ({
    size = 'medium',
    disabled = false,
    label,
    error,
    helperText,
    options,
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
                        value={option.value}
                        className="CoreLabUI-classic__select-menu__option"
                        key={index}>
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};
