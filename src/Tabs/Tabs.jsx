import React from 'react';
import { Tab } from './index';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './tabs.css';

injectTheme();
injectStyle('Tabs', {});

export const stylesheet = injectStylesheetServerSide('Tabs', {});

const Tabs = ({
    children,
    className,
    items,
    active,
    onChange,
    idPrefix = 'corelab-ui',
    ...props
}) => {
    let classes = 'CoreLabUI__tabs';
    if (className) classes += ` ${className}`;
    classes += ' CoreLabUI';

    const handleKeyDown = (event) => {
        if (!items?.length) return;
        let index = null;
        if (event.key === 'ArrowRight') {
            index = active === items.length - 1 ? 0 : active + 1;
        } else if (event.key === 'ArrowLeft') {
            index = active === 0 ? items.length - 1 : active - 1;
        } else if (event.key === 'Home') {
            index = 0;
        } else if (event.key === 'End') {
            index = items.length - 1;
        }
        if (index === null) return;
        event.preventDefault();
        onChange?.(null, index);
        document
            .getElementById(`${idPrefix}-tab-${index}`)
            ?.focus?.();
    };

    return (
        <div
            {...props}
            className={classes}
            role="tablist"
            onKeyDown={handleKeyDown}>
            {items?.map((item, key) => {
                return (
                    <Tab
                        key={key}
                        title={item?.title}
                        active={active}
                        index={key}
                        idPrefix={idPrefix}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
};

export default Tabs;
