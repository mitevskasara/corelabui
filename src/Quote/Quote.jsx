import React, { forwardRef } from 'react';
import Typography from '../Typography';
import Divider from '../Divider';
import { injectStyle } from '../utils/injectStyle';
import { createTheme, defaultTheme } from '../theme';
import './quote.css';

injectStyle('Quote', {});
createTheme();

export const Quote = forwardRef(
    ({ className, children, cite, separator = 'line', ...props }, ref) => {
        let classes = 'CoreLabUI-classic CoreLabUI-classic__quote';
        if (separator === 'line') classes += ' CoreLabUI-classic__quote--line';
        if (className) classes += ` ${className}`;
        return (
            <blockquote {...props} className={classes} ref={ref}>
                {separator !== 'line' && (
                    <>
                        {separator}
                        <br />
                    </>
                )}
                {typeof children === 'string' ? (
                    <Typography variant="body1">{children}</Typography>
                ) : (
                    children
                )}
                {cite && (
                    <figcaption className="CoreLabUI-classic__quote-cite">
                        <Divider color={defaultTheme.primary} width="30%" />
                        {typeof cite === 'string' ? (
                            <Typography variant="caption">{cite}</Typography>
                        ) : (
                            cite
                        )}
                    </figcaption>
                )}
            </blockquote>
        );
    }
);
