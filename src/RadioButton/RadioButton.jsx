import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './radioButton.css';

injectTheme();
injectStyle('RadioButton', {});

export const stylesheet = injectStylesheetServerSide('RadioButton', {});

const RadioButton = forwardRef(
    (
        {
            size = 'medium',
            disabled = false,
            label = '',
            checked = false,
            className,
            onChange,
            variant = 'standard',
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__radio-label CoreLabUI__radio-label--${size}`;
        if (className) classes += ` ${className}`;

        let checkmarkClasses = `CoreLabUI__radio-checkmark CoreLabUI__radio-checkmark--${size} CoreLabUI__radio-checkmark--${variant}`;

        if (checked) checkmarkClasses += ' CoreLabUI__radio-checkmark--checked';
        if (disabled)
            checkmarkClasses += ' CoreLabUI__radio-checkmark--disabled';

        return (
            <label className={classes}>
                {label}
                <input
                    {...props}
                    type="radio"
                    checked={checked}
                    ref={ref}
                    onChange={onChange}
                    disabled={disabled}
                />
                <span className={checkmarkClasses}></span>
            </label>
        );
    }
);

export default RadioButton;
