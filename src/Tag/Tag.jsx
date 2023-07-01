import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectStyle } from '../utils/injectStyle';
import { createTheme, defaultTheme } from '../theme';
import './tag.css';

injectStyle('Tag', {});
createTheme();

const COLORS = {
    outlined: defaultTheme.accentDisabled,
    contained: defaultTheme.primary
};

const TEXT_COLORS = {
    outlined: defaultTheme.accent,
    contained: 'white'
};

export const Tag = forwardRef(
    (
        {
            children,
            className,
            text = '',
            variant = 'outlined',
            color,
            textColor,
            width = 'fit-content',
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__tag CoreLabUI-classic__tag--${variant}`;
        if (className) classes += ` ${className}`;

        return (
            <div
                {...props}
                className={classes}
                ref={ref}
                style={{
                    '--tag-color': textColor || TEXT_COLORS[variant],
                    '--tag-background': color || COLORS[variant],
                    '--tag-width': width
                }}>
                {text ? (
                    <Typography
                        variant="caption"
                        margin={false}
                        overflow="ellipsis"
                        color={textColor || TEXT_COLORS[variant]}>
                        {text}
                    </Typography>
                ) : (
                    children
                )}
            </div>
        );
    }
);
