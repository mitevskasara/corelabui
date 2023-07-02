import React, { forwardRef, useContext } from 'react';
import Typography from '../Typography';
import { injectStyle } from '../utils/injectStyle';
import { createTheme, ThemeContext } from '../theme';
import './divider.css';

injectStyle('Divider', {});
createTheme();

export const Divider = forwardRef(
    (
        {
            className,
            text,
            textProps = { variant: 'body1' },
            variant = 'outlined',
            color,
            width = '100%',
            textAlign = 'center',
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__divider CoreLabUI-classic__divider--${textAlign}`;
        if (!text) classes += ' CoreLabUI-classic__divider--no-text';
        if (className) classes += ` ${className}`;
        const theme = useContext(ThemeContext);

        return (
            <div
                {...props}
                className={classes}
                ref={ref}
                style={{
                    '--divider-color': color || theme.borderColor,
                    '--divider-width': width
                }}>
                {text && (
                    <Typography
                        {...textProps}
                        margin={false}
                        overflow="ellipsis"
                        className="CoreLabUI-classic__divider-text">
                        {text}
                    </Typography>
                )}
            </div>
        );
    }
);
