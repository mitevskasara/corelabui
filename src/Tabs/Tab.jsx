import React from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './tab.css';

injectTheme();
injectStyle('Tab', {});

export const stylesheet = injectStylesheetServerSide('Tab', {});

const Tab = ({
    className,
    active,
    index,
    title,
    onChange,
    idPrefix = 'corelab-ui'
}) => {
    let classes = 'CoreLabUI__tab';
    if (active === index) classes += ' CoreLabUI__tab--active';
    if (className) classes += ` ${className}`;
    classes += ' CoreLabUI';

    return (
        <div className="CoreLabUI__tab-root">
            <button
                className={classes}
                type="button"
                role="tab"
                id={`${idPrefix}-tab-${index}`}
                aria-controls={`${idPrefix}-tabpanel-${index}`}
                aria-selected={active === index}
                tabIndex={active !== index ? -1 : undefined}
                onClick={(e) => onChange(e, index)}>
                {typeof title === 'string' ? (
                    <Typography variant="body1" color="initial" margin={false}>
                        {title}
                    </Typography>
                ) : (
                    title
                )}
            </button>
            <div
                className={`CoreLabUI__tab-line--${
                    active === index ? 'active' : 'inactive'
                }`}
            />
        </div>
    );
};

export default Tab;
