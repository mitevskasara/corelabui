import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';

import './tableOfContents.css';

injectTheme();
injectStyle('TableOfContents', {});

const TableOfContents = forwardRef(
    ({ className, title, items, ...props }, ref) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__table-of-contents`;
        if (className) classes += ` ${className}`;

        return (
            <div {...props} ref={ref}>
                <Typography variant="heading6" overflow="ellipsis">
                    {title}
                </Typography>
                <div className={classes}>
                    {items?.map((item, key) => (
                        <a
                            key={key}
                            href={item?.anchor}
                            className={`CoreLabUI-classic__table-of-contents-item CoreLabUI-classic__table-of-contents-item--${item?.active ? 'active' : 'inactive'
                                }`}>
                            <Typography
                                variant="caption"
                                margin={false}
                                overflow="ellipsis">
                                {item?.title}
                            </Typography>
                        </a>
                    ))}
                </div>
            </div>
        );
    }
);

export default TableOfContents;
