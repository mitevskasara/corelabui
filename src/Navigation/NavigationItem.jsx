import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectStyle } from '../utils/injectStyle';
import { createTheme } from '../theme';
import './navigationItem.css';

injectStyle('NavigationItem', {});
createTheme();

export const NavigationItem = forwardRef(
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
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__navigation-item`;
        if (active) classes += ` CoreLabUI-classic__navigation-item--active`;
        if (!active) classes += ` CoreLabUI-classic__navigation-item--inactive`;
        if (divider) classes += ` CoreLabUI-classic__navigation-item--divided`;
        if (disabled)
            classes += ` CoreLabUI-classic__navigation-item--disabled`;
        if (className) classes += ` ${className}`;
        const Element = link ? 'a' : 'div';
        const elementProps = link
            ? { ...props, href: link, target: '__blank' }
            : { ...props, onClick };

        return (
            <Element {...elementProps} ref={ref} className={classes}>
                <div className="CoreLabUI-classic__navigation-item-title">
                    <Typography
                        variant={divider ? 'caption' : 'body1'}
                        margin={false}
                        overflow="ellipsis">
                        {title}
                    </Typography>
                    {badge ? badge : null}
                </div>
                {divider && (
                    <div className="CoreLabUI-classic__navigation-item-divider" />
                )}
            </Element>
        );
    }
);
