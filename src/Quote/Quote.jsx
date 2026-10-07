import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './quote.css';

injectTheme();
injectStyle('Quote', {});

export const stylesheet = injectStylesheetServerSide('Quote', {});

const Quote = forwardRef(
    ({ className, children, cite, separator = 'line', ...props }, ref) => {
        let classes = 'CoreLabUI__quote';
        if (separator === 'line') classes += ' CoreLabUI__quote--line';
        if (className) classes += ` ${className}`;
        classes += ' CoreLabUI';

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
                    <footer className="CoreLabUI__quote-cite">
                        <div className="CoreLabUI__quote-divider" />
                        {typeof cite === 'string' ? (
                            <Typography variant="caption">{cite}</Typography>
                        ) : (
                            cite
                        )}
                    </footer>
                )}
            </blockquote>
        );
    }
);

export default Quote;
