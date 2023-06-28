import { injectStyle } from '../utils/injectStyle';
import styles from './dropdown.css';
import Button from '../Button';
import React, { forwardRef, useState } from 'react';
import useClickAway from '../helpers/useClickAway';

injectStyle('Dropdown', styles);

export const Dropdown = forwardRef(
    (
        {
            children,
            disabled,
            className,
            buttonProps,
            minWidth = '200px',
            ...props
        },
        ref
    ) => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);

        let classes = `CoreLabUI-classic CoreLabUI-classic__dropdown`;
        if (className) classes += ` ${className}`;

        let contentClasses = `CoreLabUI-classic__dropdown-content`;
        contentClasses += ` CoreLabUI-classic__dropdown-content--${
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
