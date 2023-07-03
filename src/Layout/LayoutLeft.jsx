import React from 'react';
import { injectStyle } from '../utils/injectStyle';
import './layoutLeft.css';

injectStyle('LayoutLeft', {});

export const LayoutLeft = ({
    children,
    className,
    type = 'dashboard',
    colStart,
    rowStart,
    colSpan,
    rowSpan,
    ...props
}) => {
    let classes = `CoreLabUI-classic CoreLabUI-classic__layout-left--${type}`;
    if (className) classes += ` ${className}`;
    return (
        <section
            {...props}
            className={classes}
            style={
                type === 'custom'
                    ? {
                          '--left-layout-grid-column': `${colStart} / span ${colSpan}`,
                          '--left-layout-grid-row': `${rowStart} / span ${rowSpan}`
                      }
                    : null
            }>
            {children}
        </section>
    );
};
