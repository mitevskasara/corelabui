import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectStyle } from '../utils/injectStyle';
import { createTheme } from '../theme';
import './breadcrumb.css';

injectStyle('Breadcrumb', {});
createTheme();

export const Breadcrumb = forwardRef(
    ({ items, className, separator, ...props }, ref) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__breadcrumb`;
        if (className) classes += ` ${className}`;

        return (
            <div {...props} className={classes} ref={ref}>
                {items?.map((item, index) => (
                    <>
                        <a
                            href={item?.link}
                            key={index}
                            className={`CoreLabUI-classic__breadcrumb-item 
                                CoreLabUI-classic__breadcrumb-item--${
                                    item?.active ? 'active' : 'inactive'
                                }`}>
                            {item?.icon ? item?.icon : null}
                            <Typography
                                variant="body2"
                                margin={false}
                                overflow="ellipsis"
                                color="inherit">
                                {item?.title}
                            </Typography>
                        </a>
                        <span className="CoreLabUI-classic__breadcrumb-separator">
                            {index < items?.length - 1
                                ? separator
                                    ? separator
                                    : '/'
                                : null}
                        </span>
                    </>
                ))}
            </div>
        );
    }
);
