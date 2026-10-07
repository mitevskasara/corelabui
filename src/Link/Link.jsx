import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './link.css';

injectTheme();
injectStyle('Link', {});

export const stylesheet = injectStylesheetServerSide('Link', {});

const Link = forwardRef(
    (
        { children, disabled, size = 'medium', color, className, ...props },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__link CoreLabUI__link--${size}`;
        if (disabled) classes += ' CoreLabUI__link--disabled';
        if (className) classes += ` ${className}`;

        return (
            <a
                {...props}
                className={classes}
                ref={ref}
                style={color ? { '--text': color } : null}>
                {children}
                <span className="CoreLabUI__link-decoration" />
            </a>
        );
    }
);

export default Link;
