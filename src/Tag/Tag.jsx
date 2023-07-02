import React, { forwardRef, useContext } from 'react';
import Typography from '../Typography';
import { injectStyle } from '../utils/injectStyle';
import { createTheme, ThemeContext } from '../theme';
import './tag.css';

injectStyle('Tag', {});
createTheme();

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
        const theme = useContext(ThemeContext);

        return (
            <div
                {...props}
                className={classes}
                ref={ref}
                style={{
                    '--tag-color': textColor || theme.tagColor,
                    '--tag-background': color || theme.tagBackground,
                    '--tag-border': textColor || theme.tagColor,
                    '--tag-width': width
                }}>
                {text ? (
                    <Typography
                        variant="caption"
                        margin={false}
                        overflow="ellipsis"
                        color={textColor || theme.tagColor}>
                        {text}
                    </Typography>
                ) : (
                    children
                )}
            </div>
        );
    }
);
