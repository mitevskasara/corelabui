import React, { forwardRef } from 'react';
import Scrollable from '../Scrollable';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';

import './popup.css';

injectTheme();
injectStyle('Popup', {});

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
        let classes = `CoreLabUI-classic CoreLabUI-classic__popup`;
        if (className) classes += ` ${className}`;

        return isOpen ? (
            <>
                <div
                    className="CoreLabUI-classic__popup-backdrop"
                    onClick={close}
                />
                <dialog
                    {...props}
                    open={isOpen}
                    className={classes}
                    ref={ref}
                    style={{
                        '--popup-width': width,
                        '--popup-height': height
                    }}>
                    {!disableClose && (
                        <span
                            className="CoreLabUI-classic__popup-close-icon"
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
