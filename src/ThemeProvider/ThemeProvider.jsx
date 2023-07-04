import { createTheme } from '../Theme';

const ThemeProvider = ({ theme, children }) => {
    createTheme(theme);
    return <>{children}</>;
};

export default ThemeProvider;
