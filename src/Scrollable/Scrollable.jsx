import React, { forwardRef } from 'react';
import { injectStyle } from '../utils';
import './scrollable.css';

injectStyle('Scrollable', {});

const Scrollable = forwardRef(({ className, children, ...props }, ref) => {
    let classes = 'CoreLabUI-classic CoreLabUI-classic__scrollable';
    if (className) classes += ` ${className}`;

    return (
        <div {...props} className={classes} ref={ref}>
            {children}
        </div>
    );
});

export default Scrollable;
