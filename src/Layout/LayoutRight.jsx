import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './layoutRight.css';

injectTheme();
injectStyle('LayoutRight', {});

export default ({
    children,
    className,
    type = 'dashboard',
    colStart,
    rowStart,
    colSpan,
    rowSpan,
    ...props
}) => {
    let classes = `CoreLabUI-classic CoreLabUI-classic__layout-right--${type}`;
    if (className) classes += ` ${className}`;
    return (
        <section
            {...props}
            className={classes}
            style={
                type === 'custom'
                    ? {
                          '--right-layout-grid-column': `${colStart} / span ${colSpan}`,
                          '--right-layout-grid-row': `${rowStart} / span ${rowSpan}`
                      }
                    : null
            }>
            {children}
        </section>
    );
};
