import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './tag.css';

injectTheme();
injectStyle('Tag', {});

export const stylesheet = injectStylesheetServerSide('Tag', {});

const Tag = forwardRef(
    (
        {
            children,
            className,
            text = '',
            variant = 'outlined',
            color = 'inherit',
            width = 'fit-content',
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI__tag CoreLabUI__tag--${variant}`;
        if (className) classes += ` ${className}`;
        classes += ' CoreLabUI';
        let style = { '--tag-width': width };
        if (color)
            style = {
                ...style,
                [`--tag-color-${variant}`]: variant === 'outlined' && color,
                [`--tag-background-${variant}`]:
                    variant === 'outlined' ? `${color}4D` : color,
                [`--tag-border-${variant}`]: color
            };
        return (
            <div {...props} className={classes} ref={ref} style={style}>
                {text ? (
                    <Typography
                        variant="caption"
                        margin={false}
                        overflow="ellipsis"
                        color="initial">
                        {text}
                    </Typography>
                ) : (
                    children
                )}
            </div>
        );
    }
);

export default Tag;
