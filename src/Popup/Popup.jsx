import React, { forwardRef, useEffect, useId, useRef } from 'react';
import Scrollable from '../Scrollable';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';

import './popup.css';

injectTheme();
injectStyle('Popup', {});

export const stylesheet = injectStylesheetServerSide('Popup', {});

const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
].join(', ');

const Popup = forwardRef(
    (
        {
            className,
            children,
            isOpen,
            open,
            close,
            disableClose = false,
            width = '50%',
            height = 'unset',
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__popup`;
        if (className) classes += ` ${className}`;

        const dialogRef = useRef(null);
        const uid = useId();
        const optionsRef = useRef({ close, disableClose });
        optionsRef.current = { close, disableClose };

        useEffect(() => {
            if (!isOpen) return;

            const previouslyFocused = document.activeElement;
            const dialog = dialogRef.current;
            if (dialog && typeof dialog.focus === 'function') {
                dialog.focus();
            }

            const handleKeyDown = (event) => {
                const { close: closePopup, disableClose: isDisabled } =
                    optionsRef.current;
                if (event.key === 'Escape') {
                    if (!isDisabled && typeof closePopup === 'function') {
                        event.stopPropagation();
                        closePopup();
                    }
                    return;
                }
                if (event.key !== 'Tab' || !dialog) return;

                const focusable = Array.from(
                    dialog.querySelectorAll(FOCUSABLE_SELECTOR)
                );
                if (!focusable.length) {
                    event.preventDefault();
                    return;
                }
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                const active = document.activeElement;
                if (event.shiftKey && (active === first || active === dialog)) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && active === last) {
                    event.preventDefault();
                    first.focus();
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                if (
                    previouslyFocused &&
                    typeof previouslyFocused.focus === 'function'
                ) {
                    previouslyFocused.focus();
                }
            };
        }, [isOpen]);

        return isOpen ? (
            <>
                <div
                    className="CoreLabUI__popup-backdrop"
                    aria-hidden="true"
                    onClick={close}
                />
                <dialog
                    {...props}
                    open={isOpen}
                    className={classes}
                    aria-modal="true"
                    tabIndex={-1}
                    ref={(element) => {
                        dialogRef.current = element;
                        if (typeof ref === 'function') ref(element);
                        else if (ref) ref.current = element;
                    }}
                    style={{
                        '--popup-width': width,
                        '--popup-height': height
                    }}>
                    {!disableClose && typeof close === 'function' && (
                        <button
                            type="button"
                            className="CoreLabUI__popup-close-icon"
                            aria-label="Close"
                            title="Close"
                            onClick={close}
                        />
                    )}
                    <Scrollable>{children}</Scrollable>
                </dialog>
            </>
        ) : null;
    }
);

export default Popup;
