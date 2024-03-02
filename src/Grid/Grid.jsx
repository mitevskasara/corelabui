import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './grid.css';

injectTheme();
injectStyle('Grid', {});

export const stylesheet = injectStylesheetServerSide('Grid', {});

const Grid = forwardRef(
    (
        {
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
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI__grid CoreLabUI__grid-gap`;
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

export default Grid;
