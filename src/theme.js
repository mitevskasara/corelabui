const defaultTheme = {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    background: '#ffffff',
    popupShadow:
        'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
    primary: '#393053',
    primaryHover: '#443C68',
    primaryActive: '#605786',
    primaryDisabled: '#b8b2cf',
    secondary: '#d8dae5',
    secondaryHover: '#8f95b2',
    secondaryActive: '#c9c5db',
    disabled: '#d8dae5',
    hover: '#EDEFF5',
    active: '#8f95b245',
    heading: '#222831',
    paragraph: '#474d66',
    paragraphLight: '#696f8c',
    checkbox: '#eeeeee',
    link: '#0066ff',
    light: '#fcfcfc',
    error: '#D14D72',
    title: '#0a2540',
    text: '#425466',
    captionSecondary: '#00000073',
    borderRadius: '4px',
    checkboxBorderRadius: '4px',
    fontXsmall: '12px',
    fontSmall: '14px',
    fontMedium: '16px',
    fontLarge: '18px',
    boxShadow:
        'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px'
};

function generateStyle(style, theme) {
    const mergedThemes = { ...defaultTheme, ...style };
    let injectedStyle = `body{background: ${mergedThemes.background}} .CoreLabUI-${theme} {`;
    Object.keys(mergedThemes).map(
        (key) =>
            (injectedStyle += `--${key
                .split(/(?=[A-Z])/)
                .join('-')
                .toLowerCase()}:${mergedThemes[key]};`)
    );
    injectedStyle += '}';
    return injectedStyle;
}

function createTheme(style, theme = 'classic') {
    if (document) {
        if (!document.getElementById(`CoreLabUI-${theme}`)) {
            document.head.insertAdjacentHTML(
                'beforeend',
                `<style id='CoreLabUI-${theme}'>${generateStyle(
                    style,
                    theme
                )}</style>`
            );
        } else if (
            document.getElementById(`CoreLabUI-${theme}`)?.innerHTML !=
            generateStyle(style, theme)
        ) {
            document.getElementById(`CoreLabUI-${theme}`).innerHTML =
                generateStyle(style, theme);
        }
    }
}

module.exports = { createTheme };
