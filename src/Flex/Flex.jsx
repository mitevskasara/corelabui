import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './flex.css';

injectTheme();
injectStyle('Flex', {});

export const stylesheet = injectStylesheetServerSide('Flex', {});

const Flex = forwardRef(
    (
        {
            children,
            direction = 'row',
            xs,
            sm,
            md,
            lg,
            wrap = 'nowrap',
            alignItems = 'unset',
            alignContent = 'unset',
            justifyContent = 'start',
            gap = 1,
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
        let classes = `CoreLabUI__flex CoreLabUI__flex-gap CoreLabUI__flex-direction CoreLabUI__flex-align-items--${alignItems} CoreLabUI__flex-align-content--${alignContent} CoreLabUI__flex-justify-content--${justifyContent} CoreLabUI__flex-${wrap}`;
        if (className) classes += ` ${className}`;
        return (
            <div
                {...props}
                ref={ref}
                className={classes}
                style={{
                    '--gap': `${gap}em`,
                    '--direction': direction,
                    '--xs-direction': xs || direction,
                    '--sm-direction': sm || direction,
                    '--md-direction': md || direction,
                    '--lg-direction': lg || direction,
                    '--margin': margin ? margin : `${mt} ${mr} ${ml} ${mb}`,
                    '--padding': padding ? padding : `${pt} ${pr} ${pl} ${pb}`
                }}>
                {children}
            </div>
        );
    }
);

export default Flex;
