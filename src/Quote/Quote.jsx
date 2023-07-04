import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectStyle } from '../utils';
import './quote.css';

injectStyle('Quote', {});

const Quote = forwardRef(
    ({ className, children, cite, separator = 'line', ...props }, ref) => {
        let classes = 'CoreLabUI-classic__quote';
        if (separator === 'line') classes += ' CoreLabUI-classic__quote--line';
        if (className) classes += ` ${className}`;
        classes += ' CoreLabUI-classic';

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
                        <div className="CoreLabUI-classic__quote-divider" />
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

export default Quote;
