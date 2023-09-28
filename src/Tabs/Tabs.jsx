import React, { useEffect } from 'react';
import { Tab } from './index';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import useKeyPress from '../helpers/useKeyPress';
import './tabs.css';

injectTheme();
injectStyle('Tabs', {});

const Tabs = ({ children, className, items, active, onChange, ...props }) => {
    let classes = 'CoreLabUI__tabs';
    if (className) classes += ` ${className}`;
    classes += ' CoreLabUI';
    const leftPressed = useKeyPress('ArrowLeft');
    const rightPressed = useKeyPress('ArrowRight');

    useEffect(() => {
        if (leftPressed === true) {
            const index = active === 0 ? items?.length - 1 : active - 1;
            if (typeof document === 'object') {
                document.getElementById(`corelab-ui-tab-${index}`)?.focus();
            }
            onChange(null, index);
        }
        if (rightPressed === true) {
            const index = active === items?.length - 1 ? 0 : active + 1;
            onChange(null, index);
            if (typeof document === 'object') {
                document.getElementById(`corelab-ui-tab-${index}`)?.focus();
            }
        }
    }, [leftPressed, rightPressed]);

    return (
        <div
            {...props}
            className={classes}
            role="tablist"
            aria-labelledby="corelab-ui-tabs">
            {items?.map((item, key) => {
                return (
                    <Tab
                        key={key}
                        title={item?.title}
                        active={active}
                        index={key}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
};

export default Tabs;
