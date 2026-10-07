import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './scrollable.css';

injectTheme();
injectStyle('Scrollable', {});

export const stylesheet = injectStylesheetServerSide('Scrollable', {});

const Scrollable = forwardRef(({ className, children, ...props }, ref) => {
    let classes = 'CoreLabUI CoreLabUI__scrollable';
    if (className) classes += ` ${className}`;

    return (
        <div tabIndex={0} {...props} className={classes} ref={ref}>
            {children}
        </div>
    );
});

export default Scrollable;
