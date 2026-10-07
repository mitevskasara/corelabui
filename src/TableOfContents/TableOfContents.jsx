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
            <nav
                {...props}
                ref={ref}
                aria-label={
                    typeof title === 'string' ? title : undefined
                }>
                <Typography variant="heading6" overflow="ellipsis">
                    {title}
                </Typography>
                <div className={classes}>
                    {items?.map((item, key) => {
                        const itemClasses = `CoreLabUI__table-of-contents-item CoreLabUI__table-of-contents-item--${
                            item?.active ? 'active' : 'inactive'
                        }`;
                        const current = item?.active ? 'page' : undefined;
                        const content = (
                            <Typography
                                variant="caption"
                                margin={false}
                                overflow="ellipsis">
                                {item?.title}
                            </Typography>
                        );
                        if (item?.anchor) {
                            return (
                                <a
                                    key={key}
                                    href={item.anchor}
                                    onClick={item.onClick}
                                    aria-current={current}
                                    className={itemClasses}>
                                    {content}
                                </a>
                            );
                        }
                        if (item?.onClick) {
                            return (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={item.onClick}
                                    aria-current={current}
                                    className={itemClasses}>
                                    {content}
                                </button>
                            );
                        }
                        return (
                            <span
                                key={key}
                                aria-current={current}
                                className={itemClasses}>
                                {content}
                            </span>
                        );
                    })}
                </div>
            </nav>
        );
    }
);

export default TableOfContents;
