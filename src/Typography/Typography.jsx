import React, { forwardRef, useContext } from 'react';
import { injectStyle } from '../utils';
import ThemeContext from '../ThemeProvider';
import './typography.css';

injectStyle('Typography', {});

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

const Typography = forwardRef(
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

        const theme = useContext(ThemeContext);

        const COLORS = {
            heading1: theme.title,
            heading2: theme.title,
            heading3: theme.title,
            heading4: theme.title,
            heading5: theme.title,
            heading6: theme.title,
            subtitle1: theme.title,
            subtitle2: theme.title,
            body1: theme.text,
            body2: theme.text,
            caption: theme.text
        };

        let style = { '--typography-color': color ? color : COLORS[variant] };
        if (lines) style['--line-clamp'] = lines;

        return (
            <Element className={classes} style={style} ref={ref}>
                {children}
            </Element>
        );
    }
);

export default Typography;
