import React, { forwardRef } from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './highlight.css';

injectTheme();
injectStyle('Highlight', {});

export const stylesheet = injectStylesheetServerSide('Highlight', {});

const Highlight = forwardRef(
    (
        {
            className,
            children,
            color = 'inherit',
            background = 'inherit',
            gradient,
            textGradient,
            ...props
        },
        ref
    ) => {
        let classes = 'CoreLabUI CoreLabUI__highlight';
        if (gradient) classes = 'CoreLabUI CoreLabUI__highlight--gradient';
        if (textGradient)
            classes =
                'CoreLabUI CoreLabUI__highlight--gradient CoreLabUI CoreLabUI__highlight--gradient-text';
        if (className) classes += ` ${className}`;
        let gradientStyle = gradient
            ? {
                  '--highlight-webkit-linear-gradient': `-webkit-linear-gradient(to ${
                      gradient?.direction || 'right'
                  }, ${gradient?.colors})`,
                  '--highlight-linear-gradient': `linear-gradient(to ${
                      gradient?.direction || 'right'
                  }, ${gradient?.colors})`
              }
            : {};
        if (textGradient)
            gradientStyle = {
                '--highlight-webkit-linear-gradient': `-webkit-linear-gradient(${textGradient?.colors})`,
                '--highlight-linear-gradient': `linear-gradient(${textGradient?.colors})`
            };

        return (
            <span
                {...props}
                className={classes}
                ref={ref}
                style={{
                    '--highlight-color': color,
                    '--highlight-background': background,
                    ...gradientStyle
                }}>
                {children}
            </span>
        );
    }
);

export default Highlight;
