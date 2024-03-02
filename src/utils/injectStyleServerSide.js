function injectStylesheetServerSide(component, style) {
    return {
        id: `CoreLabUI-${component}`,
        style
    };
}

export default injectStylesheetServerSide;
