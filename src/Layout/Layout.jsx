import React from 'react';
import { injectStyle } from '../utils/injectStyle';
import './layout.css';

injectStyle('Layout', {});

export const Layout = ({
    children,
    className,
    type = 'dashboard',
    areas,
    ...props
}) => {
    let classes = `CoreLabUI-classic CoreLabUI-classic__layout CoreLabUI-classic__layout--${type}`;
    if (className) classes += ` ${className}`;
    let templateAreas = '';
    if (areas) areas?.split(',').map((area) => (templateAreas += ` "${area}"`));
    return (
        <div
            {...props}
            className={classes}
            style={
                type === 'custom' && templateAreas
                    ? {
                          '--layout-template-areas': templateAreas
                      }
                    : null
            }>
            {children}
        </div>
    );
};
