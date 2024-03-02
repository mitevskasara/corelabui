import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './layoutHeader.css';

injectTheme();
injectStyle('LayoutHeader', {});

export const stylesheet = injectStylesheetServerSide('LayoutHeader', {});

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
    let classes = `CoreLabUI CoreLabUI__layout-header--${type}`;
    if (className) classes += ` ${className}`;

    return (
        <section
            {...props}
            className={classes}
            style={
                type === 'custom'
                    ? {
                          '--header-layout-grid-column': `${colStart} / span ${colSpan}`,
                          '--header-layout-grid-row': `${rowStart} / span ${rowSpan}`,
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
