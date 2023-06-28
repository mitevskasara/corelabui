import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';
import styles from './grid.css';

injectStyle('Grid', styles);

export const Grid = forwardRef(
    ({
        children,
        rowGap = 1,
        columnGap = 1,
        className,
        margin,
        padding,
        mt = 0,
        mb = 0,
        ml = 0,
        mr = 0,
        pt = 0,
        pb = 0,
        pl = 0,
        pr = 0,
        ...props }, ref) => {
        let classes = `CoreLabUI-classic__grid CoreLabUI-classic__grid-gap`;
        if (className) classes += ` ${className}`;
        return (
            <div
                {...props}
                ref={ref}
                className={classes}
                style={{
                    '--row-gap': `${rowGap}%`,
                    '--column-gap': `${columnGap > 5 ? 1 : columnGap}%`,
                    '--margin': margin ? margin : `${mt} ${mr} ${ml} ${mb}`,
                    '--padding': padding ? padding : `${pt} ${pr} ${pl} ${pb}`
                }}>
                {children}
            </div>
        );
    }
);
