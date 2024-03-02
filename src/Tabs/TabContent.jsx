import React from 'react';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './tabContent.css';

injectTheme();
injectStyle('TabContent', {});

export const stylesheet = injectStylesheetServerSide('TabContent', {});

const TabContent = ({ children, className, active, index, ...props }) => {
    let classes = 'CoreLabUI__tab-content';
    if (active === index) classes += ' CoreLabUI__tab-content--active';
    if (className) classes += ` ${className}`;
    classes += ' CoreLabUI';

    return (
        <div
            {...props}
            className={classes}
            id={`corelab-ui-tabpanel-${index}`}
            role="tabpanel"
            aria-labelledby={`corelab-ui-tab-${index}`}
            tabIndex="0">
            {children}
        </div>
    );
};

export default TabContent;
