import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';
import { createTheme, defaultTheme } from '../theme';
import './typography.css';

injectStyle('Typography', {});
createTheme();

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

const COLORS = {
    heading1: defaultTheme.title,
    heading2: defaultTheme.title,
    heading3: defaultTheme.title,
    heading4: defaultTheme.title,
    heading5: defaultTheme.title,
    heading6: defaultTheme.title,
    subtitle1: defaultTheme.title,
    subtitle2: defaultTheme.title,
    body1: defaultTheme.text,
    body2: defaultTheme.text,
    caption: defaultTheme.text
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
            className,
            align = 'left',
            color
        },
        ref
    ) => {
        const Element = htmlElement || VARIANTS[variant];
        let classes = `CoreLabUI-classic CoreLabUI-classic__${variant}`;
        if (!margin) classes += ' CoreLabUI-classic__no-margin';
        if (overflow) classes += ` CoreLabUI-classic__${overflow}`;
        if (lines) classes += ` CoreLabUI-classic__lines`;
        if (align) classes += ` CoreLabUI-classic__typography--${align}`;
        if (className) classes += ` ${className}`;

        let style = { '--typography-color': color ? color : COLORS[variant] };
        if (lines) style['--line-clamp'] = lines;

        return (
            <Element className={classes} style={style} ref={ref}>
                {children}
            </Element>
        );
    }
);
