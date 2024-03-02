import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './tableOfContents.css';

injectTheme();
injectStyle('TableOfContents', {});

export const stylesheet = injectStylesheetServerSide('TableOfContents', {});

const TableOfContents = forwardRef(
    ({ className, title, items, ...props }, ref) => {
        let classes = `CoreLabUI CoreLabUI__table-of-contents`;
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
                            href={!item?.onClick && item?.anchor}
                            onClick={item?.onClick && item?.onClick}
                            className={`CoreLabUI__table-of-contents-item CoreLabUI__table-of-contents-item--${
                                item?.active ? 'active' : 'inactive'
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
