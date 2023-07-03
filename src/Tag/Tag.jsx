import React, { forwardRef, useContext } from 'react';
import Typography from '../Typography';
import { injectStyle } from '../utils/injectStyle';
import { ThemeContext } from '../theme';
import './tag.css';

injectStyle('Tag', {});

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
                    '--tag-color':
                        variant === 'outlined'
                            ? color
                                ? color
                                : theme.tagColor
                            : theme.white,
                    '--tag-background':
                        variant === 'outlined'
                            ? color
                                ? `${color}4D`
                                : `${theme.tagColor}14`
                            : color || `${theme.tagColor}14`,
                    '--tag-border':
                        variant === 'outlined'
                            ? color
                                ? color
                                : `${theme.tagColor}14`
                            : color || `${theme.tagColor}14`,
                    '--tag-width': width
                }}>
                {text ? (
                    <Typography
                        variant="caption"
                        margin={false}
                        overflow="ellipsis"
                        color={
                            variant === 'outlined'
                                ? color
                                    ? color
                                    : theme.tagColor
                                : color
                                ? theme.white
                                : theme.tagColor
                        }>
                        {text}
                    </Typography>
                ) : (
                    children
                )}
            </div>
        );
    }
);
