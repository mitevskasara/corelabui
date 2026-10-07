import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './navigationItem.css';

injectTheme();
injectStyle('NavigationItem', {});

export const stylesheet = injectStylesheetServerSide('NavigationItem', {});

const NavigationItem = forwardRef(
    (
        {
            title,
            active,
            link,
            onClick,
            className,
            divider = false,
            badge,
            items,
            disabled = false,
            margin,
            padding,
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__navigation-item`;
        if (active) classes += ` CoreLabUI__navigation-item--active`;
        if (!active) classes += ` CoreLabUI__navigation-item--inactive`;
        if (divider) classes += ` CoreLabUI__navigation-item--divided`;
        if (disabled) classes += ` CoreLabUI__navigation-item--disabled`;
        if (className) classes += ` ${className}`;
        const isLink = Boolean(link);
        const isInteractive = Boolean(onClick) && !disabled;
        const handleClick = (event) => {
            if (disabled) {
                event.preventDefault();
                return;
            }
            if (typeof onClick === 'function') onClick(event);
        };
        const handleKeyDown = (event) => {
            if (!isInteractive || isLink) return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onClick(event);
            }
        };
        const currentProps = {
            'aria-current': active ? 'page' : undefined
        };
        const elementProps = isLink
            ? {
                  ...props,
                  ...currentProps,
                  href: link,
                  'aria-disabled': disabled || undefined,
                  onClick: handleClick
              }
            : {
                  ...props,
                  ...currentProps,
                  onClick: isInteractive ? handleClick : undefined,
                  tabIndex: isInteractive ? 0 : undefined,
                  role: isInteractive ? 'button' : undefined,
                  onKeyDown: isInteractive ? handleKeyDown : undefined
              };

        const Element = isLink ? 'a' : 'div';

        return (
            <Element
                {...elementProps}
                ref={ref}
                className={classes}
                style={{
                    '--nav-item-margin': margin,
                    '--nav-item-padding': padding
                }}>
                <div className="CoreLabUI__navigation-item-title">
                    <Typography
                        variant={divider ? 'caption' : 'body1'}
                        margin={false}
                        overflow="ellipsis">
                        {title}
                    </Typography>
                    {badge ? badge : null}
                </div>
                {divider && (
                    <div className="CoreLabUI__navigation-item-divider" />
                )}
            </Element>
        );
    }
);

export default NavigationItem;
