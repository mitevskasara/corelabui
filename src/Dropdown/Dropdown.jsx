import React, { forwardRef, useState } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';

import Button from '../Button';
import useClickAway from '../helpers/useClickAway';
import './dropdown.css';

injectTheme();
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
            position = 'left',
            ...props
        },
        ref
    ) => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);

        let classes = `CoreLabUI CoreLabUI__dropdown`;
        if (className) classes += ` ${className}`;

        let contentClasses = `CoreLabUI__dropdown-content`;
        if (trigger === 'click')
            contentClasses += ` CoreLabUI__dropdown-content--${
                open ? 'open' : 'closed'
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
                    className="CoreLabUI__dropdown-trigger"
                    disabled={disabled}
                    onClick={handleClick}
                />
                <div
                    className={contentClasses}
                    style={{
                        '--min-width': minWidth,
                        '--left':
                            position === 'left'
                                ? 0
                                : position === 'center' &&
                                  `calc(50% - ${minWidth}/2)`,
                        '--right': position === 'right' && 0
                    }}>
                    <div className="CoreLabUI__dropdown-arrow" />
                    {children}
                </div>
            </div>
        );
    }
);

export default Dropdown;
