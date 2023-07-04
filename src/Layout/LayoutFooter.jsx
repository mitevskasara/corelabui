import React from 'react';
import { injectStyle } from '../utils';
import './layoutFooter.css';

injectStyle('LayoutFooter', {});

export default ({
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
