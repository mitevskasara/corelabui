import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './layoutHeader.css';

injectTheme();
injectStyle('LayoutHeader', {});

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
    let classes = `CoreLabUI-classic CoreLabUI-classic__layout-header--${type}`;
    if (className) classes += ` ${className}`;

    return (
        <section
            {...props}
            className={classes}
            style={
                type === 'custom'
                    ? {
                          '--header-layout-grid-column': `${colStart} / span ${colSpan}`,
                          '--header-layout-grid-row': `${rowStart} / span ${rowSpan}`
                      }
                    : null
            }>
            {children}
        </section>
    );
};
