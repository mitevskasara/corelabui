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
        const Element = link ? 'a' : 'div';
        const elementProps = link
            ? { ...props, href: link }
            : { ...props, onClick };

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
