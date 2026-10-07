import { defaultTheme } from '.';

function generateStyle(style) {
    const mergedThemes = { ...defaultTheme, ...style };
    let injectedStyle = `body {background: ${mergedThemes.background}} :root {`;
    Object.keys(mergedThemes).map(
        (key) =>
            (injectedStyle += `--${key
                .split(/(?=[A-Z])/)
                .join('-')
                .toLowerCase()}:${mergedThemes[key]};`)
    );
    injectedStyle += `--layout-website-template-areas: 'hd' 'main' 'ft';`;
    injectedStyle += `--layout-dashboard-template-areas: 'hd hd hd hd hd hd hd hd hd hd hd hd' 'lt lt main main main main main main main main main rt' 'lt lt main main main main main main main main main rt' 'lt lt ft ft ft ft ft ft ft ft ft ft';`;
    injectedStyle += `--layout-dashboard-template-areas-md:  'hd hd hd hd hd hd hd hd hd hd hd hd' 'lt lt lt lt main main main main main main main main' 'lt lt lt lt ft ft ft ft ft ft ft ft';`;
    injectedStyle += `--layout-dashboard-template-areas-sm:  'hd' 'main' 'ft';`;
    injectedStyle += '--content: "";';
    injectedStyle += '}';
    return injectedStyle;
}

export default generateStyle;
