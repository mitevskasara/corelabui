import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';
import './checkbox.css';

injectStyle('Checkbox', {});

export const Checkbox = forwardRef(
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
        let classes = 'CoreLabUI-classic CoreLabUI-classic__checkbox-label';
        if (className) classes += ` ${className}`;

        let checkmarkClasses = `CoreLabUI-classic__checkbox-checkmark CoreLabUI-classic__checkbox-checkmark--${size} CoreLabUI-classic__checkbox-checkmark--${variant}`;
        if (checked)
            checkmarkClasses +=
                ' CoreLabUI-classic__checkbox-checkmark--checked';
        if (disabled)
            checkmarkClasses +=
                ' CoreLabUI-classic__checkbox-checkmark--disabled';

        return (
            <label className={classes}>
                {label}
                <input
                    {...props}
                    type="checkbox"
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
