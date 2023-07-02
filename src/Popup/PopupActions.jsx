import React, { forwardRef } from 'react';
import Button from '../Button';
import Flex from '../Flex';
import { injectStyle } from '../utils/injectStyle';
import { createTheme } from '../theme';
import './popupActions.css';

injectStyle('PopupActions', {});
createTheme();

export const PopupActions = forwardRef(({ className, actions }, ref) => {
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
