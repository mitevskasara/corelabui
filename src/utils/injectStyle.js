export function injectStyle(component, style) {
    if (document && !document.getElementById(`CoreLabUI-${component}`)) {
        document.head.insertAdjacentHTML(
            'beforeend',
            `<style id='CoreLabUI-${component}'>${style}</style>`
        );
    }
}
