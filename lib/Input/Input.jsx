import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';
import './input.css';

injectStyle('Input', {});

export const Input = forwardRef(
    (
        {
            size = 'medium',
            disabled = false,
            label,
            error,
            helperText,
            className,
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__field-root`;
        if (disabled) classes += ' CoreLabUI-classic__field-root--disabled';
        if (error) classes += ' CoreLabUI-classic__field-root--error';
        if (className) classes += ` ${className}`;

        let inputClasses = `CoreLabUI-classic__field CoreLabUI-classic__field--${size}`;
        if (error) inputClasses += ' CoreLabUI-classic__field--error';

        return (
            <div className={classes}>
                {label && (
                    <label className="CoreLabUI-classic__field__label">
                        {label}
                    </label>
                )}
                <input
                    {...props}
                    className={inputClasses}
                    readOnly={disabled}
                    ref={ref}
                />
                {helperText && (
                    <span className="CoreLabUI-classic__field__helper-text">
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);
