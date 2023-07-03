import React from 'react';
import { injectStyle } from '../utils/injectStyle';
import './layoutMain.css';

injectStyle('LayoutMain', {});

export const LayoutMain = ({
    children,
    className,
    type = 'dashboard',
    colStart,
    rowStart,
    colSpan,
    rowSpan,
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
                          '--main-layout-grid-row': `${rowStart} / span ${rowSpan}`
                      }
                    : null
            }>
            {children}
        </section>
    );
};
