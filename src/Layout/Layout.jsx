import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './layout.css';

injectTheme();
injectStyle('Layout', {});

export const stylesheet = injectStylesheetServerSide('Layout', {});

export default ({
    children,
    className,
    type = 'dashboard',
    areas,
    ...props
}) => {
    let classes = `CoreLabUI CoreLabUI__layout CoreLabUI__layout--${type}`;
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
