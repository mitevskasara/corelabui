import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';
import { createTheme } from '../theme';
import './flex.css';

injectStyle('Flex', {});
createTheme();

export const Flex = forwardRef(
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
        let classes = `CoreLabUI-classic__flex CoreLabUI-classic__flex-gap CoreLabUI-classic__flex-direction CoreLabUI-classic__flex-align-items--${alignItems} CoreLabUI-classic__flex-align-content--${alignContent} CoreLabUI-classic__flex-justify-content--${justifyContent} CoreLabUI-classic__flex-${wrap}`;
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
