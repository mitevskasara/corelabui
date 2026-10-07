import React, { forwardRef } from 'react';
import Button from '../Button';
import Flex from '../Flex';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import { injectStylesheetServerSide } from '../utils';
import './popupActions.css';

injectTheme();
injectStyle('PopupActions', {});

export const stylesheet = injectStylesheetServerSide('PopupActions', {});

const PopupActions = forwardRef(({ className, actions }, ref) => {
    return (
        <Flex
            justifyContent="space-between"
            ref={ref}
            mt="2em"
            className={className}>
            {actions?.map((action, key) => (
                <Button {...action} key={key} />
            ))}
        </Flex>
    );
});

export default PopupActions;
