import { createTheme } from '../Theme';
import { ThemeContext } from '../';

export default ({ theme = {}, children }) => {
    const createdTheme = createTheme(theme);
    return (
        <ThemeContext.Provider value={createdTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

