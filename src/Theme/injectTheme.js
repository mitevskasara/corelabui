import { defaultTheme } from '.';
import { generateStyle } from '.';

export function injectTheme(style, theme = 'classic') {
    if (typeof document === 'object') {
        if (!document.getElementById(`CoreLabUI-${theme}`)) {
            console.log('injectTheme style');
            document.head.insertAdjacentHTML(
                'beforeend',
                `<style id='CoreLabUI-${theme}'>${generateStyle(
                    style,
                    theme
                )}</style>`
            );
        }
        if (!document.getElementById(`CoreLabUI-${theme}-scrollbar`)) {
            console.log('injectTheme scrollbar');
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
}

export default injectTheme;
