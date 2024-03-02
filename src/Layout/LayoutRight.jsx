import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './layoutRight.css';

injectTheme();
injectStyle('LayoutRight', {});

export const stylesheet = injectStylesheetServerSide('LayoutRight', {});

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
    let classes = `CoreLabUI CoreLabUI__layout-right--${type}`;
    if (className) classes += ` ${className}`;
    return (
        <section
            {...props}
            className={classes}
            style={
                type === 'custom'
                    ? {
                          '--right-layout-grid-column': `${colStart} / span ${colSpan}`,
                          '--right-layout-grid-row': `${rowStart} / span ${rowSpan}`,
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
