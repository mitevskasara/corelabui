import React, { forwardRef } from 'react';
import useClickAway from '../helpers/useClickAway';

export const Dropdown = forwardRef(
    ({ children, disabled, size = 'medium', className, anchorEl, onClose, ...props }, ref) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__dropdown`;
        if (className) classes += ` ${className}`;
        const element = anchorEl?.getBoundingClientRect();
        useClickAway(anchorEl, onClose);

        return Boolean(anchorEl) && (
            <div
                {...props}
                className={classes}
                ref={ref}
                role="dropdown"
                style={{
                    '--left': element?.left,
                    '--arrow-left': (element?.width / 2) - 8,
                    '--min-width': element?.width
                }}>
                <div className="CoreLabUI-classic__dropdown-arrow" />
                {children}aaaaaaaa
            </div>
        );
    }
);
