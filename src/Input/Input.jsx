import React, { forwardRef, useId } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './input.css';

injectTheme();
injectStyle('Input', {});

export const stylesheet = injectStylesheetServerSide('Input', {});

const Input = forwardRef(
    (
        {
            size = 'medium',
            disabled = false,
            label,
            error,
            helperText,
            className,
            id,
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__field-root`;
        if (disabled) classes += ' CoreLabUI__field-root--disabled';
        if (error) classes += ' CoreLabUI__field-root--error';
        if (className) classes += ` ${className}`;

        let inputClasses = `CoreLabUI__field CoreLabUI__field--${size}`;
        if (error) inputClasses += ' CoreLabUI__field--error';

        const uid = useId();
        const inputId = id || `${uid}-input`;
        const helperId = helperText ? `${uid}-helper` : undefined;

        return (
            <div className={classes}>
                {label && (
                    <label
                        className="CoreLabUI__field__label"
                        htmlFor={inputId}>
                        {label}
                    </label>
                )}
                <input
                    {...props}
                    id={inputId}
                    className={inputClasses}
                    disabled={disabled}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={helperId}
                    ref={ref}
                />
                {helperText && (
                    <span id={helperId} className="CoreLabUI__field__helper-text">
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

export default Input;
