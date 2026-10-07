import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './layoutCustom.css';

injectTheme();
injectStyle('LayoutCustom', {});

export const stylesheet = injectStylesheetServerSide('LayoutCustom', {});

export default ({
    children,
    className,
    label,
    area,
    colStart,
    rowStart,
    colSpan,
    rowSpan,
    padding,
    margin,
    ...props
}) => {
    return (
        <section
            {...props}
            {...(label ? { 'aria-label': label } : {})}
            className={className}
            style={{
                gridColumn: `${colStart} / span ${colSpan}`,
                gridRow: `${rowStart} / span ${rowSpan}`,
                gridArea: area,
                '--padding': padding,
                '--margin': margin
            }}>
            {children}
        </section>
    );
};
