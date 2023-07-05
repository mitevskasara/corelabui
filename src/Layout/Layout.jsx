import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './layout.css';

injectTheme();
injectStyle('Layout', {});

export default ({
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
