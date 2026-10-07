import React, { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import Button from '../Button';
import './dropdown.css';

injectTheme();
injectStyle('Dropdown', {});

export const stylesheet = injectStylesheetServerSide('Dropdown', {});

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
        const [open, setOpen] = useState(false);
        const rootRef = useRef(null);
        const uid = useId();
        const contentId = `${uid}-dropdown`;
        const triggerId = buttonProps?.id || `${uid}-trigger`;

        let classes = `CoreLabUI CoreLabUI__dropdown`;
        if (className) classes += ` ${className}`;

        const contentClasses = `CoreLabUI__dropdown-content CoreLabUI__dropdown-content--${
            open ? 'open' : 'closed'
        }`;

        const handleToggle = () => {
            if (disabled) return;
            setOpen((current) => !current);
        };

        const handleMouseEnter = () => {
            if (trigger === 'hover' && !disabled) setOpen(true);
        };

        const handleMouseLeave = () => {
            if (trigger === 'hover') setOpen(false);
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && open) {
                event.stopPropagation();
                setOpen(false);
                document.getElementById(triggerId)?.focus?.();
            }
        };

        const handleBlur = (event) => {
            if (!rootRef.current?.contains(event.relatedTarget)) {
                setOpen(false);
            }
        };

        useEffect(() => {
            if (!open) return;
            const handleClickAway = (event) => {
                if (rootRef.current && !rootRef.current.contains(event.target)) {
                    setOpen(false);
                }
            };
            document.addEventListener('click', handleClickAway);
            return () => document.removeEventListener('click', handleClickAway);
        }, [open]);

        return (
            <div
                {...props}
                className={classes}
                ref={(element) => {
                    rootRef.current = element;
                    if (typeof ref === 'function') ref(element);
                    else if (ref) ref.current = element;
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}>
                <Button
                    {...buttonProps}
                    id={triggerId}
                    className="CoreLabUI__dropdown-trigger"
                    disabled={disabled}
                    aria-expanded={open}
                    aria-controls={contentId}
                    onClick={handleToggle}
                />
                <div
                    id={contentId}
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
