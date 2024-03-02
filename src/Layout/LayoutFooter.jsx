import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './layoutFooter.css';

injectTheme();
injectStyle('LayoutFooter', {});

export const stylesheet = injectStylesheetServerSide('LayoutFooter', {});

export default ({
    children,
    className,
    type = 'dashboard',
    padding,
    margin,
    ...props
}) => {
    let classes = `CoreLabUI CoreLabUI__layout-footer--${type}`;
    if (className) classes += ` ${className}`;
    return (
        <section
            {...props}
            className={classes}
            style={{
                '--padding': padding,
                '--margin': margin
            }}>
            {children}
        </section>
    );
};
