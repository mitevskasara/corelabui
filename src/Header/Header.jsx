import React, { forwardRef, useRef, useState } from 'react';
import Link from '../Link/Link';
import Button from '../Button/Button';
import useClickAway from '../helpers/useClickAway';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './header.css';

injectTheme();
injectStyle('Header', {});

export const stylesheet = injectStylesheetServerSide('Header', {});

const Header = forwardRef(
    (
        {
            children,
            classes,
            logo,
            items,
            actions,
            align = 'right',
            spacing = '2.5em',
            maxWidth,
            ...props
        },
        ref
    ) => {
        const headerRef = useRef();
        const [isOpen, open] = useState(false);
        let classesRoot = `CoreLabUI__header-root`;
        if (classes?.root) classesRoot += ` ${classes?.root}`;
        classesRoot += ' CoreLabUI';

        let classesInner = `CoreLabUI__header`;
        if (classes?.inner) classesInner += ` ${classes?.inner}`;

        useClickAway(headerRef?.current, () => open(false));

        return (
            <>
                <div
                    {...props}
                    className={classesRoot}
                    ref={headerRef}
                    style={{
                        '--header-padding': spacing
                    }}>
                    <div
                        className={classesInner}
                        style={{
                            '--header-max-width': maxWidth
                        }}>
                        <img src={logo} className="CoreLabUI__header-logo" />
                        <div
                            className={`CoreLabUI__header-nav CoreLabUI__header-nav--${isOpen ? 'open' : 'closed'
                                }`}
                            style={{
                                '--header-items-margin':
                                    align === 'center' && 'auto',
                                '--header-items-margin-left':
                                    align === 'right' && 'auto',
                                '--header-items-margin-right':
                                    align === 'left' && 'auto'
                            }}>
                            <menu className="CoreLabUI__header-menu">
                                {items?.map((item, key) => (
                                    <Link href={item.link} key={key}>
                                        {item.title}
                                    </Link>
                                ))}
                                {actions?.map((action, key) => (
                                    <Button
                                        {...action}
                                        key={key}
                                        width="100%"
                                    />
                                ))}
                            </menu>
                        </div>
                        <div
                            className="CoreLabUI__header-menu-icon"
                            onClick={() => open(!isOpen)}>
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div
                        className={`CoreLabUI__header-nav--mobile CoreLabUI__header-nav--mobile--${isOpen ? 'open' : 'closed'
                            }`}
                        style={{
                            '--header-padding': spacing
                        }}>
                        <menu className="CoreLabUI__header-menu">
                            {items?.map((item, key) => (
                                <Link href={item.link} key={key}>
                                    {item.title}
                                </Link>
                            ))}
                            {actions?.map((action, key) => (
                                <Button {...action} key={key} />
                            ))}
                        </menu>
                    </div>
                </div>
            </>
        );
    }
);

export default Header;
