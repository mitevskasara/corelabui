import { defaultTheme } from '.';

function generateStyle(style, theme) {
    const mergedThemes = { ...defaultTheme, ...style };
    console.log('generateStyle', mergedThemes);
    let injectedStyle = `body {background: ${mergedThemes.background}} .CoreLabUI-${theme} {`;
    Object.keys(mergedThemes).map(
        (key) =>
            (injectedStyle += `--${key
                .split(/(?=[A-Z])/)
                .join('-')
                .toLowerCase()}:${mergedThemes[key]};`)
    );
    injectedStyle +=
        '--layout-website-template-areas: "header" "main" "footer";';
    injectedStyle +=
        '--layout-dashboard-template-areas:  "header header header" "left main right" "left footer footer";';
    injectedStyle += '--content: "";';
    injectedStyle += '}';
    return injectedStyle;
}

function createTheme(style, theme = 'classic') {
    if (typeof document === 'object') {
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

export default createTheme;
