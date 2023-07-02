import { ThemeContext } from '../theme';

export const ThemeProvider = ({ theme, children }) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export default ThemeProvider;
