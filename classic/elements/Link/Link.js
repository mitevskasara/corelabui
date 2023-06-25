import { forwardRef } from 'react';
import './link.css';

export const Link = forwardRef(
    ({ children, disabled, size = 'medium', className, ...props }, ref) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__link CoreLabUI-classic__link--${size}`;
        if (disabled) classes += ' CoreLabUI-classic__link--disabled';
        if (className) classes += ` ${className}`;

        return (
            <a {...props} className={classes} ref={ref}>
                {children}
            </a>
        );
    }
);
