import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './layoutMain.css';

injectTheme();
injectStyle('LayoutMain', {});

export default ({
    children,
    className,
    type = 'dashboard',
    colStart,
    rowStart,
    colSpan,
    rowSpan,
    padding,
    margin,
    ...props
}) => {
    let classes = `CoreLabUI-classic CoreLabUI-classic__layout-main--${type}`;
    if (className) classes += ` ${className}`;
    return (
        <section
            {...props}
            className={classes}
            style={
                type === 'custom'
                    ? {
                          '--main-layout-grid-column': `${colStart} / span ${colSpan}`,
                          '--main-layout-grid-row': `${rowStart} / span ${rowSpan}`,
                          '--padding': padding,
                          '--margin': margin
                      }
                    : {
                          '--padding': padding,
                          '--margin': margin
                      }
            }>
            {children}
        </section>
    );
};
