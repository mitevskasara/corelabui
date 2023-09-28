import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './button.css';

injectTheme();
injectStyle('Button', {});

const Button = forwardRef(
    (
        {
            children,
            variant = 'primary',
            loading = false,
            size = 'medium',
            disabled,
            className,
            title,
            width = 'fit-content',
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__btn-root CoreLabUI__btn-root--${variant}`;
        if (disabled || loading) classes += ' CoreLabUI__btn-root--disabled';
        if (className) classes += ` ${className}`;
        return (
            <div
                className={classes}
                ref={ref}
                style={{ '--button-width': width }}>
                <button
                    {...props}
                    className={`CoreLabUI__btn CoreLabUI__btn--${variant} CoreLabUI__btn--${size}`}
                    disabled={disabled || loading}>
                    {loading ? (
                        <div
                            className={`CoreLabUI__btn__loader CoreLabUI__btn__loader--${variant}`}>
                            <span />
                            <span />
                            <span />
                        </div>
                    ) : (
                        <span>
                            {title}
                            {children}
                        </span>
                    )}
                </button>
            </div>
        );
    }
);

export default Button;
