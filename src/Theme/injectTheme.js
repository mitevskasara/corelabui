import { defaultTheme } from '.';
import { generateStyle } from '.';

export function injectTheme(style) {
    if (typeof document === 'object') {
        if (!document.getElementById(`CoreLabUI`)) {
            document.head.insertAdjacentHTML(
                'beforeend',
                `<style id='CoreLabUI'>${generateStyle(style)}</style>`
            );
        }
        if (!document.getElementById(`CoreLabUI-scrollbar`)) {
            const mergedThemes = { ...defaultTheme, ...style };
            const scrollBarStyle =
                `::-webkit-scrollbar { width: ${mergedThemes.scrollBarWidth}; }\n` +
                `::-webkit-scrollbar-track { background: ${mergedThemes.scrollBarTrackColor}; }\n` +
                `::-webkit-scrollbar-thumb { background: ${mergedThemes.scrollBarThumbColor}; border-radius: var(--border-radius) }`;

            document.head.insertAdjacentHTML(
                'beforeend',
                `<style id='CoreLabUI-scrollbar'>${scrollBarStyle}</style>`
            );
        }
    }
}

export default injectTheme;
