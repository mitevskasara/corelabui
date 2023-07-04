import React, { forwardRef } from 'react';
import { injectStyle } from '../utils';
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
        let classes = `CoreLabUI-classic__${variant}`;
        if (!margin) classes += ' CoreLabUI-classic__no-margin';
        if (overflow) classes += ` CoreLabUI-classic__${overflow}`;
        if (lines) classes += ` CoreLabUI-classic__lines`;
        if (align) classes += ` CoreLabUI-classic__typography--${align}`;
        if (className) classes += ` ${className}`;
        classes += ' CoreLabUI-classic';

        const COLORS = {
            heading1: '--title',
            heading2: '--title',
            heading3: '--title',
            heading4: '--title',
            heading5: '--title',
            heading6: '--title',
            subtitle1: '--title',
            subtitle2: '--title',
            body1: '--text',
            body2: '--text',
            caption: '--text'
        };

        let style = color ? { [COLORS[variant]]: color } : {};
        if (lines) style['--line-clamp'] = lines;

        return (
            <Element className={classes} style={style} ref={ref}>
                {children}
            </Element>
        );
    }
);

export default Typography;
