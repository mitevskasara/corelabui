function injectStyle(component, cssFile) {
  if (document && !document.getElementById(`CoreLabUI-${component}`)) {
    console.log('CoreLabUI', component, cssFile);
    document.head.insertAdjacentHTML(
      'beforeend',
      `<link id="CoreLabUI-${component}" rel="stylesheet" href="${cssFile}"/>`
    );
  }
}

module.exports = { injectStyle };
