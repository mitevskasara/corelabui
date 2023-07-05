import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';

import './link.css';

injectTheme();
injectStyle('Link', {});

const Link = forwardRef(
    (
        { children, disabled, size = 'medium', color, className, ...props },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__link CoreLabUI-classic__link--${size}`;
        if (disabled) classes += ' CoreLabUI-classic__link--disabled';
        if (className) classes += ` ${className}`;

        return (
            <a
                {...props}
                className={classes}
                ref={ref}
                style={color ? { '--text': color } : null}>
                {children}
                <span className="CoreLabUI-classic__link-decoration" />
            </a>
        );
    }
);

export default Link;
