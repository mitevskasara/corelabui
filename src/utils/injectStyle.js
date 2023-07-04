export function injectStyle(component, style) {
    if (
        typeof document === 'object' &&
        !document.getElementById(`CoreLabUI-${component}`)
    ) {
        document.head.insertAdjacentHTML(
            'beforeend',
            `<style id='CoreLabUI-${component}'>${style}</style>`
        );
    }
}
