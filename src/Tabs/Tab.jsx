import React from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './tab.css';

injectTheme();
injectStyle('Tab', {});

const Tab = ({ className, active, index, title, onChange }) => {
    let classes = 'CoreLabUI-classic__tab';
    if (active === index) classes += ' CoreLabUI-classic__tab--active';
    if (className) classes += ` ${className}`;
    classes += ' CoreLabUI-classic';

    return (
        <div className="CoreLabUI-classic__tab-root">
            <button
                className={classes}
                role="tab"
                id={`corelab-ui-tab-${index}`}
                aria-controls={`corelab-ui-tabpanel-${index}`}
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
                className={`CoreLabUI-classic__tab-line--${
                    active === index ? 'active' : 'inactive'
                }`}
            />
        </div>
    );
};

export default Tab;
