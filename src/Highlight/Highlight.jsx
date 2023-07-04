import React, { forwardRef } from 'react';
import { injectStyle } from '../utils';

import './highlight.css';

injectStyle('Highlight', {});

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
        let classes = 'CoreLabUI-classic CoreLabUI-classic__highlight';
        if (gradient)
            classes =
                'CoreLabUI-classic CoreLabUI-classic__highlight--gradient';
        if (textGradient)
            classes =
                'CoreLabUI-classic CoreLabUI-classic__highlight--gradient CoreLabUI-classic CoreLabUI-classic__highlight--gradient-text';
        if (className) classes += ` ${className}`;
        let gradientStyle = gradient
            ? {
                '--highlight-webkit-linear-gradient': `-webkit-linear-gradient(to ${gradient?.direction || 'right'
                    }, ${gradient?.colors})`,
                '--highlight-linear-gradient': `linear-gradient(to ${gradient?.direction || 'right'
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
