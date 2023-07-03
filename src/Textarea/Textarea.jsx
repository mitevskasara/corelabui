import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';

import './textarea.css';

injectStyle('Textarea', {});

export const Textarea = forwardRef(
    (
        { disabled = false, label, error, helperText, className, ...props },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__field-multiline-root`;
        if (disabled)
            classes += ' CoreLabUI-classic__field-multiline-root--disabled';
        if (error) classes += ' CoreLabUI-classic__field-multiline-root--error';
        if (className) classes += ` ${className}`;

        let textareaClasses = 'CoreLabUI-classic__field-multiline';
        if (error)
            textareaClasses += ' CoreLabUI-classic__field-multiline--error';

        return (
            <div className={classes}>
                {label && (
                    <label className="CoreLabUI-classic__field-multiline__label">
                        {label}
                    </label>
                )}
                <textarea
                    {...props}
                    className={textareaClasses}
                    readOnly={disabled}
                    rows="5"
                    ref={ref}
                />
                {helperText && (
                    <span className="CoreLabUI-classic__field-multiline__helper-text">
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);
