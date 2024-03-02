import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';

import './gridItem.css';

injectTheme();
injectStyle('GridItem', {});

export const stylesheet = injectStylesheetServerSide('GridItem', {});

const GridItem = forwardRef(
    (
        {
            children,
            col = 12,
            xs,
            sm,
            md,
            lg,
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
        let classes = `CoreLabUI__grid-item`;
        if (className) classes += ` ${className}`;
        return (
            <div
                {...props}
                ref={ref}
                className={classes}
                style={{
                    '--col': `span ${col} / span ${col}`,
                    '--col-xs': `span ${xs ? xs : col}/span ${xs ? xs : col}`,
                    '--col-sm': `span ${sm ? sm : col}/span ${sm ? sm : col}`,
                    '--col-md': `span ${md ? md : col}/span ${md ? md : col}`,
                    '--col-lg': `span ${lg ? lg : col}/span ${lg ? lg : col}`,
                    '--margin': margin ? margin : `${mt} ${mr} ${ml} ${mb}`,
                    '--padding': padding ? padding : `${pt} ${pr} ${pl} ${pb}`
                }}>
                {children}
            </div>
        );
    }
);

export default GridItem;
