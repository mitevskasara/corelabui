import React, { forwardRef, useEffect } from 'react';
import './button.css';

export const Button = forwardRef(
    (
        {
            children,
            variant = 'primary',
            loading = false,
            size = 'medium',
            disabled,
            className,
            title,
            ...props
        },
        ref
    ) => {
        useEffect(() => {
            import('../utils/injectStyle').then((script) => {
                script.injectStyle('Button', {});
            });
        }, []);

        let classes = `CoreLabUI-classic CoreLabUI-classic__btn-root CoreLabUI-classic__btn-root--${variant}`;
        if (disabled || loading)
            classes += ' CoreLabUI-classic__btn-root--disabled';
        if (className) classes += ` ${className}`;
        return (
            <div className={classes} ref={ref}>
                <button
                    {...props}
                    className={`CoreLabUI-classic__btn CoreLabUI-classic__btn--${variant} CoreLabUI-classic__btn--${size}`}
                    disabled={disabled || loading}>
                    {loading ? (
                        <div
                            className={`CoreLabUI-classic__btn__loader CoreLabUI-classic__btn__loader--${variant}`}>
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
