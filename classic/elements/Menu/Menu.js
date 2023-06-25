import { forwardRef } from 'react';
import useClickAway from '../../../helpers/use-click-away';
import './menu.css';

export const Menu = forwardRef(
    ({ children, disabled, size = 'medium', className, anchorEl, onClose, ...props }, ref) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__menu`;
        if (className) classes += ` ${className}`;
        const element = anchorEl?.getBoundingClientRect();

        console.log(anchorEl?.getBoundingClientRect());
        useClickAway(anchorEl, onClose);
        return Boolean(anchorEl) && (
            <div {...props} className={classes} ref={ref} role="menu" style={{ '--left': element?.left, '--min-width': element?.width }}>
                <div className="CoreLabUI-classic__menu-arrow" />
                {children}aaa
            </div>
        );
    }
);
