import { defaultTheme } from '.';
import { generateStyle } from '.';

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
