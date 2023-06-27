import React, { forwardRef } from 'react';

const VARIANTS = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
    heading5: 'h5',
    heading6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span'
};

export const Typography = forwardRef(
    (
        {
            children,
            htmlElement,
            variant,
            margin = true,
            lines,
            overflow,
            className
        },
        ref
    ) => {
        const Element = htmlElement || VARIANTS[variant];
        let classes = `CoreLabUI-classic CoreLabUI-classic__${variant}`;
        if (!margin) classes += ' CoreLabUI-classic__no-margin';
        if (overflow) classes += ` CoreLabUI-classic__${overflow}`;
        if (lines) classes += ` CoreLabUI-classic__lines`;
        if (className) classes += ` ${className}`;

        return (
            <Element
                className={classes}
                style={lines && { '--line-clamp': lines }}
                ref={ref}>
                {children}
            </Element>
        );
    }
);
