import React, { forwardRef } from 'react';
import Typography from '../Typography';
import Tag from '../Tag';
import { injectStyle } from '../utils/injectStyle';
import { createTheme } from '../theme';
import './card.css';

injectStyle('Card', {});
createTheme();

export const Card = forwardRef(
    (
        {
            className,
            title = '',
            description = '',
            image,
            width = 'fit-content',
            height = 'max-content',
            responsive = true,
            clickable = false,
            onClick,
            tags,
            icon,
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__card`;
        if (responsive) classes += ` CoreLabUI-classic__card--responsive`;
        if (clickable) classes += ` CoreLabUI-classic__card--clickable`;
        if (className) classes += ` ${className}`;

        return (
            <div
                {...props}
                className={classes}
                ref={ref}
                style={{ '--card-width': width, '--card-height': height }}
                onClick={clickable ? onClick : null}>
                <div className="CoreLabUI-classic__card-header">
                    {typeof title === 'string' ? (
                        <Typography
                            variant="heading5"
                            margin={false}
                            overflow="ellipsis">
                            {title}
                        </Typography>
                    ) : (
                        title
                    )}
                    {icon && (
                        <div className="CoreLabUI-classic__card-header-action">
                            {icon}
                        </div>
                    )}
                </div>
                {image && (
                    <img
                        src={image}
                        className="CoreLabUI-classic__card-image"
                    />
                )}
                {description && (
                    <Typography
                        variant="body2"
                        margin={false}
                        overflow="ellipsis"
                        lines={3}>
                        {description}
                    </Typography>
                )}
                {tags && (
                    <div className="CoreLabUI-classic__card-tags">
                        {tags?.map((tag, index) => (
                            <Tag
                                text={tag?.text}
                                color={tag?.color}
                                textColor={tag?.textColor}
                                key={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
);
