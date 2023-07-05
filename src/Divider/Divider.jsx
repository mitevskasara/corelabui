import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './divider.css';

injectTheme();
injectStyle('Divider', {});

const Divider = forwardRef(
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
        const style = color ? { '--divider-color': color } : {};
        return (
            <div
                {...props}
                className={classes}
                ref={ref}
                style={{
                    ...style,
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

export default Divider;
