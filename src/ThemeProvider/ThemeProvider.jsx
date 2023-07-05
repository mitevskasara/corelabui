import React from 'react';
import { createTheme } from '../Theme';

const ThemeProvider = ({ theme, children }) => {
    createTheme(theme);
    return <React.Fragment>{children}</React.Fragment>;
};

export default ThemeProvider;
