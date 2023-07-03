import React, { forwardRef } from 'react';
import { injectStyle } from '../utils/injectStyle';

import './scrollable.css';

injectStyle('Scrollable', {});

export const Scrollable = forwardRef(
    ({ className, children, ...props }, ref) => {
        let classes = 'CoreLabUI-classic CoreLabUI-classic__scrollable';
        if (className) classes += ` ${className}`;

        return (
            <div {...props} className={classes} ref={ref}>
                {children}
            </div>
        );
    }
);
