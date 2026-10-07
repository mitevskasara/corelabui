const esbuild = require('esbuild');
const { styleEnginePlugin } = require('./plugins/injectCss.js');
const deps = require('./package.json');

esbuild
    .build({
        entryPoints: [
            'src/index.js',
            'src/utils/index.js',
            'src/Theme/index.js',
            'src/ThemeProvider/index.js',
            'src/Typography/index.js',
            'src/Flex/index.js',
            'src/Breadcrumb/index.js',
            'src/Button/index.js',
            'src/Card/index.js',
            'src/Checkbox/index.js',
            'src/Divider/index.js',
            'src/Dropdown/index.js',
            'src/Grid/index.js',
            'src/Header/index.js',
            'src/Highlight/index.js',
            'src/Input/index.js',
            'src/Layout/index.js',
            'src/Link/index.js',
            'src/Navigation/index.js',
            'src/Popup/index.js',
            'src/Quote/index.js',
            'src/RadioButton/index.js',
            'src/Scrollable/index.js',
            'src/Select/index.js',
            'src/Table/index.js',
            'src/TableOfContents/index.js',
            'src/Tag/index.js',
            'src/Tabs/index.js',
            'src/Textarea/index.js'
        ],
        outdir: '.',
        bundle: true,
        minify: true,
        treeShaking: true,
        platform: 'node',
        format: 'cjs',
        target: 'node14',
        loader: { '.css': 'text' },
        plugins: [styleEnginePlugin],
        external: Object.keys(deps.devDependencies).concat(
            Object.keys(deps.peerDependencies)
        )
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
