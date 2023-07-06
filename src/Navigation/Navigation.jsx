import React, { forwardRef } from 'react';
import { NavigationItem } from '../Navigation';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';

import './navigation.css';

injectTheme();
injectStyle('Navigation', {});

const Navigation = forwardRef(
    (
        {
            items,
            className,
            width = 'auto',
            maxWidth = 'unset',
            minWidth = 'unset',
            border = 'none',
            overflow,
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__navigation`;
        if (className) classes += ` ${className}`;

        return (
            <div
                {...props}
                className={classes}
                ref={ref}
                style={{
                    '--width': width,
                    '--max-width': maxWidth,
                    '--min-width': minWidth,
                    '--overflow': overflow && 'auto',
                    '--border-left':
                        border === 'left' && '1px solid var(--border-color)',
                    '--border-right':
                        border === 'right' && '1px solid var(--border-color)'
                }}>
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className="CoreLabUI-classic__navigation-items">
                        {item.items?.length ? (
                            <div className="CoreLabUI-classic__navigation-subitems">
                                <NavigationItem {...item} key={index} divider />
                                {item.items.map((subitem, index) => (
                                    <NavigationItem {...subitem} key={index} />
                                ))}
                            </div>
                        ) : (
                            <NavigationItem {...item} key={index} />
                        )}
                    </div>
                ))}
            </div>
        );
    }
);

export default Navigation;
