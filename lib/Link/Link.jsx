import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';
import './link.css';

injectStyle('Link', {});

export const Link = forwardRef(
    ({ children, disabled, size = 'medium', className, ...props }, ref) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__link CoreLabUI-classic__link--${size}`;
        if (disabled) classes += ' CoreLabUI-classic__link--disabled';
        if (className) classes += ` ${className}`;

        return (
            <a {...props} className={classes} ref={ref}>
                {children}
                <span className="CoreLabUI-classic__link-decoration" />
            </a>
        );
    }
);
