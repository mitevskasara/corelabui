const esbuild = require('esbuild');
const { customPlugin } = require('./plugins/injectCss.js');
const { devDependencies, peerDependencies } = require('./package.json');

esbuild
    .build({
        entryPoints: [
            'src/Button/index.js',
            'src/Dropdown/index.js',
            'src/Input/index.js',
            'src/Link/index.js',
            'src/Menu/index.js',
            'src/Select/index.js',
            'src/Textarea/index.js',
            'src/Typography/index.js',
            'src/Flex/index.js',
            'src/Grid/index.js',
            'src/utils/theme.js'
        ],
        outdir: 'dist',
        bundle: true,
        minify: true,
        treeShaking: true,
        platform: 'node',
        format: 'cjs',
        target: 'node14',
        minify: true,
        loader: { '.css': 'text' },
        plugins: [customPlugin],
        external: Object.keys(devDependencies).concat(
            Object.keys(peerDependencies)
        )
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
