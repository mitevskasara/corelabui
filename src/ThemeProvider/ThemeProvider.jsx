import { ThemeContext, createTheme } from '../theme';

export const ThemeProvider = ({ theme = {}, children }) => {
    const createdTheme = createTheme(theme);
    return (
        <ThemeContext.Provider value={createdTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
