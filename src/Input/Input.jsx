import React, { forwardRef } from 'react';
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

        return (
            <div className={classes}>
                {label && (
                    <label
                        className="CoreLabUI__field__label"
                        htmlFor={props.name}>
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
                    <span className="CoreLabUI__field__helper-text">
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

export default Input;
