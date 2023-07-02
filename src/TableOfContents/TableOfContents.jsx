import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectStyle } from '../utils/injectStyle';
import { createTheme } from '../theme';
import './tableOfContents.css';

injectStyle('TableOfContents', {});
createTheme();

export const TableOfContents = forwardRef(
    ({ className, title, items, ...props }, ref) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__table-of-contents`;
        if (className) classes += ` ${className}`;

        return (
            <div {...props} ref={ref}>
                <Typography
                    variant="heading6"
                    overflow="ellipsis"
                    color="inherit">
                    {title}
                </Typography>
                <div className={classes}>
                    {items?.map((item, key) => (
                        <a
                            key={key}
                            href={item?.anchor}
                            className={`CoreLabUI-classic__table-of-contents-item CoreLabUI-classic__table-of-contents-item--${
                                item?.active ? 'active' : 'inactive'
                            }`}>
                            <Typography
                                variant="caption"
                                margin={false}
                                overflow="ellipsis"
                                color="inherit">
                                {item?.title}
                            </Typography>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
);
