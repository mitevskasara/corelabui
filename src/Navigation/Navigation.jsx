import React, { forwardRef } from 'react';
import { NavigationItem } from '../Navigation';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './navigation.css';

injectTheme();
injectStyle('Navigation', {});

export const stylesheet = injectStylesheetServerSide('Navigation', {});

const Navigation = forwardRef(
    (
        {
            items,
            className,
            width = 'auto',
            maxWidth,
            minWidth,
            border = 'none',
            overflow,
            margin = '0 0.5em 0.5',
            padding = '0.2em 2em',
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__navigation`;
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
                    <div key={index} className="CoreLabUI__navigation-items">
                        {item.items?.length ? (
                            <div className="CoreLabUI__navigation-subitems">
                                <NavigationItem
                                    {...item}
                                    key={index}
                                    divider
                                    margin={margin}
                                    padding={padding}
                                />
                                {item.items.map((subitem, index) => (
                                    <NavigationItem
                                        {...subitem}
                                        key={index}
                                        margin={margin}
                                        padding={padding}
                                    />
                                ))}
                            </div>
                        ) : (
                            <NavigationItem
                                {...item}
                                key={index}
                                margin={margin}
                                padding={padding}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }
);

export default Navigation;
