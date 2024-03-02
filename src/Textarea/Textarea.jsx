import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './textarea.css';

injectTheme();
injectStyle('Textarea', {});

export const stylesheet = injectStylesheetServerSide('Textarea', {});

const Textarea = forwardRef(
    (
        { disabled = false, label, error, helperText, className, ...props },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__field-multiline-root`;
        if (disabled) classes += ' CoreLabUI__field-multiline-root--disabled';
        if (error) classes += ' CoreLabUI__field-multiline-root--error';
        if (className) classes += ` ${className}`;

        let textareaClasses = 'CoreLabUI__field-multiline';
        if (error) textareaClasses += ' CoreLabUI__field-multiline--error';

        return (
            <div className={classes}>
                {label && (
                    <label className="CoreLabUI__field-multiline__label">
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
                    <span className="CoreLabUI__field-multiline__helper-text">
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

export default Textarea;
