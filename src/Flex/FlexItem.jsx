import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';

import './flexItem.css';

injectTheme();
injectStyle('FlexItem', {});

const FlexItem = forwardRef(
    (
        {
            children,
            order = 'initial',
            flex = 'unset',
            alignSelf = 'auto',
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
        let classes = `CoreLabUI__flex-item CoreLabUI__flex-item-align-self--${alignSelf} CoreLabUI__flex-item-order`;
        if (className) classes += ` ${className}`;
        return (
            <div
                {...props}
                ref={ref}
                className={classes}
                style={{
                    '--order': order,
                    '--flex': flex,
                    '--margin': margin ? margin : `${mt} ${mr} ${ml} ${mb}`,
                    '--padding': padding ? padding : `${pt} ${pr} ${pl} ${pb}`
                }}>
                {children}
            </div>
        );
    }
);

export default FlexItem;
