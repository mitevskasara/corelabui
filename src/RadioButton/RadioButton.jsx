import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';

import './radioButton.css';

injectStyle('RadioButton', {});

export const RadioButton = forwardRef(
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
        let classes = `CoreLabUI-classic CoreLabUI-classic__radio-label CoreLabUI-classic__radio-label--${size}`;
        if (className) classes += ` ${className}`;

        let checkmarkClasses = `CoreLabUI-classic__radio-checkmark CoreLabUI-classic__radio-checkmark--${size} CoreLabUI-classic__radio-checkmark--${variant}`;

        if (checked)
            checkmarkClasses += ' CoreLabUI-classic__radio-checkmark--checked';
        if (disabled)
            checkmarkClasses += ' CoreLabUI-classic__radio-checkmark--disabled';

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
