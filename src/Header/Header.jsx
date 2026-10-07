import React, { forwardRef, useRef, useState, useId } from 'react';
import Link from '../Link/Link';
import Button from '../Button/Button';
import useClickAway from '../helpers/useClickAway';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
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
            alt = '',
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
        const uid = useId();
        const mobileNavId = `${uid}-mobile-nav`;
        const menuIconId = `${uid}-menu-icon`;
        let classesRoot = `CoreLabUI__header-root`;
        if (classes?.root) classesRoot += ` ${classes?.root}`;
        classesRoot += ' CoreLabUI';

        let classesInner = `CoreLabUI__header`;
        if (classes?.inner) classesInner += ` ${classes?.inner}`;

        useClickAway(headerRef?.current, () => open(false));

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isOpen) {
                event.stopPropagation();
                open(false);
                document.getElementById(menuIconId)?.focus?.();
            }
        };

        return (
            <>
                <div
                    {...props}
                    className={classesRoot}
                    ref={headerRef}
                    onKeyDown={handleKeyDown}
                    style={{
                        '--header-padding': spacing
                    }}>
                    <div
                        className={classesInner}
                        style={{
                            '--header-max-width': maxWidth
                        }}>
                        <img
                            src={logo}
                            alt={alt}
                            className="CoreLabUI__header-logo"
                        />
                        <nav
                            className={`CoreLabUI__header-nav CoreLabUI__header-nav--${
                                isOpen ? 'open' : 'closed'
                            }`}
                            aria-label="Main"
                            style={{
                                '--header-items-margin':
                                    align === 'center' && 'auto',
                                '--header-items-margin-left':
                                    align === 'right' && 'auto',
                                '--header-items-margin-right':
                                    align === 'left' && 'auto'
                            }}>
                            <ul className="CoreLabUI__header-menu">
                                {items?.map((item, key) => (
                                    <li key={key}>
                                        <Link href={item.link}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                                {actions?.map((action, key) => (
                                    <li key={`action-${key}`}>
                                        <Button {...action} width="100%" />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <button
                            type="button"
                            id={menuIconId}
                            className="CoreLabUI__header-menu-icon"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                            aria-controls={mobileNavId}
                            onClick={() => open(!isOpen)}>
                            <span />
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                    <nav
                        id={mobileNavId}
                        className={`CoreLabUI__header-nav--mobile CoreLabUI__header-nav--mobile--${
                            isOpen ? 'open' : 'closed'
                        }`}
                        aria-label="Main"
                        style={{
                            '--header-padding': spacing
                        }}>
                        <ul className="CoreLabUI__header-menu">
                            {items?.map((item, key) => (
                                <li key={key}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>
                            ))}
                            {actions?.map((action, key) => (
                                <li key={`action-${key}`}>
                                    <Button {...action} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </>
        );
    }
);

export default Header;
