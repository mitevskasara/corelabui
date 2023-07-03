import React from 'react';
import { injectStyle } from '../utils/injectStyle';
import './layoutFooter.css';

injectStyle('LayoutFooter', {});

export const LayoutFooter = ({
    children,
    className,
    type = 'dashboard',
    ...props
}) => {
    let classes = `CoreLabUI-classic CoreLabUI-classic__layout-footer--${type}`;
    if (className) classes += ` ${className}`;
    return (
        <section {...props} className={classes}>
            {children}
        </section>
    );
};
