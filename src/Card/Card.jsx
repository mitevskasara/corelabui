import React, { forwardRef } from 'react';
import Typography from '../Typography';
import Tag from '../Tag';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './card.css';

injectTheme();
injectStyle('Card', {});

export const stylesheet = injectStylesheetServerSide('Card', {});

const Card = forwardRef(
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
            alt = '',
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI__card`;
        if (responsive) classes += ` CoreLabUI__card--responsive`;
        if (clickable) classes += ` CoreLabUI__card--clickable`;
        if (className) classes += ` ${className}`;
        classes += ' CoreLabUI';
        const isInteractive = clickable && Boolean(onClick);
        const handleKeyDown = (event) => {
            if (!isInteractive) return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onClick(event);
            }
        };
        return (
            <div
                {...props}
                className={classes}
                ref={ref}
                style={{ '--card-width': width, '--card-height': height }}
                role={isInteractive ? 'button' : undefined}
                tabIndex={isInteractive ? 0 : undefined}
                onKeyDown={isInteractive ? handleKeyDown : undefined}
                onClick={isInteractive ? onClick : null}>
                <div className="CoreLabUI__card-header">
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
                        <div className="CoreLabUI__card-header-action">
                            {icon}
                        </div>
                    )}
                </div>
                {image && (
                    <img
                        src={image}
                        alt={alt}
                        className="CoreLabUI__card-image"
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
                    <div className="CoreLabUI__card-tags">
                        {tags?.map((tag, index) => (
                            <Tag
                                text={tag?.text}
                                color={tag?.color}
                                key={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

export default Card;
