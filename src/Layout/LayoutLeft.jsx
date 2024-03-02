import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './layoutLeft.css';

injectTheme();
injectStyle('LayoutLeft', {});

export const stylesheet = injectStylesheetServerSide('LayoutLeft', {});

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
    let classes = `CoreLabUI CoreLabUI__layout-left--${type}`;
    if (className) classes += ` ${className}`;
    return (
        <section
            {...props}
            className={classes}
            style={
                type === 'custom'
                    ? {
                          '--left-layout-grid-column': `${colStart} / span ${colSpan}`,
                          '--left-layout-grid-row': `${rowStart} / span ${rowSpan}`,
                          '--padding': padding,
                          '--margin': margin
                      }
                    : {
                          '--padding': padding
                      }
            }>
            {children}
        </section>
    );
};
