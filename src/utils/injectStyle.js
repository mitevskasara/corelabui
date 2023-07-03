export function injectStyle(component, style) {
    if (
        window !== 'undefined' &&
        document !== 'undefined' &&
        !document?.getElementById(`CoreLabUI-${component}`)
    ) {
        document?.head?.insertAdjacentHTML(
            'beforeend',
            `<style id='CoreLabUI-${component}'>${style}</style>`
        );
    }
}
