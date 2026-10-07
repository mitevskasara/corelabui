import React, { forwardRef, useId } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './textarea.css';

injectTheme();
injectStyle('Textarea', {});

export const stylesheet = injectStylesheetServerSide('Textarea', {});

const Textarea = forwardRef(
    (
        {
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
        let classes = `CoreLabUI CoreLabUI__field-multiline-root`;
        if (disabled) classes += ' CoreLabUI__field-multiline-root--disabled';
        if (error) classes += ' CoreLabUI__field-multiline-root--error';
        if (className) classes += ` ${className}`;

        let textareaClasses = 'CoreLabUI__field-multiline';
        if (error) textareaClasses += ' CoreLabUI__field-multiline--error';

        const uid = useId();
        const textareaId = id || `${uid}-textarea`;
        const helperId = helperText ? `${uid}-helper` : undefined;

        return (
            <div className={classes}>
                {label && (
                    <label
                        className="CoreLabUI__field-multiline__label"
                        htmlFor={textareaId}>
                        {label}
                    </label>
                )}
                <textarea
                    {...props}
                    id={textareaId}
                    className={textareaClasses}
                    disabled={disabled}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={helperId}
                    rows="5"
                    ref={ref}
                />
                {helperText && (
                    <span
                        id={helperId}
                        className="CoreLabUI__field-multiline__helper-text">
                        {helperText}
                    </span>
                )}
            </div>
        );
    }
);

export default Textarea;
