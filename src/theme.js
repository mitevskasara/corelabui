import { createContext } from 'react';

export const defaultTheme = {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    background: '#ffffff',
    fieldsBackground: '#ffffff',
    backdrop: '#000000',
    primary: '#393053',
    primaryHover: '#443C68',
    primaryActive: '#8f95b245',
    primaryDisabled: '#3930534D',
    secondary: '#d8dae5',
    secondaryHover: '#8f95b2',
    secondaryActive: '#c9c5db',
    secondaryDisabled: '#d8dae566',
    hover: '#E9ECEF',
    hoverLight: '#fcfcfc',
    borderColor: '#d8dae5',
    light: '#fcfcfc',
    info: '#5390d9',
    white: '#ffffff',
    error: '#da344d',
    warning: '#fdc921',
    success: '#40916c',
    title: '#000000e0',
    subtitle: '#000000e0',
    text: '#000000e0',
    textSecondary: '#00000073',
    textDisabled: '#00000040',
    caption: '#00000073',
    borderRadius: '4px',
    checkboxBorderRadius: '4px',
    fontXsmall: '12px',
    fontSmall: '14px',
    fontMedium: '16px',
    fontLarge: '18px',
    boxShadow:
        'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
    buttonShadow:
        'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px rgba(17, 17, 26, 0.05) 0px 1px 0px,rgba(17, 17, 26, 0.1) 0px 0px 8px',
    scrollBarWidth: '6px',
    scrollBarTrackColor: '#F5F5F5',
    scrollBarThumbColor: '#C8C8C8',
    tagColor: '#555555'
};

export const winterTheme = {
    ...defaultTheme,
    primary: '#023E8A',
    primaryHover: '#0077B6',
    primaryActive: '#0096C745',
    primaryDisabled: '#023E8A4D'
};

export const springTheme = {
    ...defaultTheme,
    primary: '#77BFA3',
    primaryHover: '#98C9A3',
    primaryActive: '#EDEEC94f',
    primaryDisabled: '#77BFA34D'
};

export const summerTheme = {
    ...defaultTheme,
    primary: '#FFD400',
    primaryHover: '#FFDD32',
    primaryActive: '#fffae580',
    primaryDisabled: '#FFD4004D'
};

export const fallTheme = {
    ...defaultTheme,
    primary: '#F1580C',
    primaryHover: '#F5793B',
    primaryActive: '#f79a6b4f',
    primaryDisabled: '#F1580C4D'
};

export const darkTheme = {
    background: '#1B263B',
    fieldsBackground: '#ffffff0f',
    secondary: '#ffffff',
    backdrop: '#ffffff',
    hover: '#5b6d83',
    hoverLight: '#5b6d8366',
    title: '#ffffffe0',
    subtitle: '#ffffffe0',
    text: '#ffffffe0',
    textSecondary: '#ffffff73',
    textDisabled: '#ffffff40',
    caption: '#ffffff73',
    borderColor: '#415A77',
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, #cbcbcb14 0px 8px 32px',
    tagColor: '#ffffff'
};

function generateStyle(style, theme) {
    const mergedThemes = { ...defaultTheme, ...style };
    let injectedStyle = `body {background: ${mergedThemes.background}} .CoreLabUI-${theme} {`;
    Object.keys(mergedThemes).map(
        (key) =>
        (injectedStyle += `--${key
            .split(/(?=[A-Z])/)
            .join('-')
            .toLowerCase()}:${mergedThemes[key]};`)
    );
    injectedStyle += '--content: ""';
    injectedStyle +=
        '--layout-website-template-areas: "header" "main" "footer"';
    injectedStyle +=
        '--layout-dashboard-template-areas:  "header header header" "left main right" "left footer footer"';
    injectedStyle += '}';
    return injectedStyle;
}

export function createTheme(style, theme = 'classic') {
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

        if (!document.getElementById(`CoreLabUI-${theme}-scrollbar`)) {
            const mergedThemes = { ...defaultTheme, ...style };
            const scrollBarStyle =
                `::-webkit-scrollbar { width: ${mergedThemes.scrollBarWidth}; }\n` +
                `::-webkit-scrollbar-track { background: ${mergedThemes.scrollBarTrackColor}; }\n` +
                `::-webkit-scrollbar-thumb { background: ${mergedThemes.scrollBarThumbColor}; border-radius: var(--border-radius) }`;

            document.head.insertAdjacentHTML(
                'beforeend',
                `<style id='CoreLabUI-${theme}-scrollbar'>${scrollBarStyle}</style>`
            );
        }
    }

    return { ...defaultTheme, ...style };
}

export const ThemeContext = createContext(defaultTheme);
