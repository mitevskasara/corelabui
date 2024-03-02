import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './checkbox.css';

injectTheme();
injectStyle('Checkbox', {});

export const stylesheet = injectStylesheetServerSide('Checkbox', {});

const Checkbox = forwardRef(
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
        let classes = 'CoreLabUI CoreLabUI__checkbox-label';
        if (className) classes += ` ${className}`;

        let checkmarkClasses = `CoreLabUI__checkbox-checkmark CoreLabUI__checkbox-checkmark--${size} CoreLabUI__checkbox-checkmark--${variant}`;
        if (checked)
            checkmarkClasses += ' CoreLabUI__checkbox-checkmark--checked';
        if (disabled)
            checkmarkClasses += ' CoreLabUI__checkbox-checkmark--disabled';

        return (
            <div>
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
            </div>
        );
    }
);

export default Checkbox;
