import React, { forwardRef, useState } from 'react';
import { injectStyle } from '../utils';

import Button from '../Button';
import useClickAway from '../helpers/useClickAway';
import './dropdown.css';

injectStyle('Dropdown', {});

const Dropdown = forwardRef(
    (
        {
            children,
            disabled,
            className,
            buttonProps,
            minWidth = '200px',
            trigger = 'hover',
            ...props
        },
        ref
    ) => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);

        let classes = `CoreLabUI-classic CoreLabUI-classic__dropdown`;
        if (className) classes += ` ${className}`;

        let contentClasses = `CoreLabUI-classic__dropdown-content`;
        if (trigger === 'click')
            contentClasses += ` CoreLabUI-classic__dropdown-content--${open ? 'open' : 'closed'
                }`;

        const handleClick = (event) => {
            setAnchorEl(open ? null : event.currentTarget);
        };

        const handleClose = () => setAnchorEl(null);

        useClickAway(anchorEl, handleClose);

        return (
            <div {...props} className={classes} ref={ref}>
                <Button
                    {...buttonProps}
                    className="CoreLabUI-classic__dropdown-trigger"
                    disabled={disabled}
                    onClick={handleClick}
                />
                <div
                    className={contentClasses}
                    style={{
                        '--min-width': minWidth
                    }}>
                    <div className="CoreLabUI-classic__dropdown-arrow" />
                    {children}
                </div>
            </div>
        );
    }
);

export default Dropdown;
