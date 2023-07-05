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

export default generateStyle;
