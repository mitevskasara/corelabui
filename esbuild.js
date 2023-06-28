const esbuild = require('esbuild');
const { customPlugin } = require('./plugins/injectCss.js');
const { devDependencies, peerDependencies } = require('./package.json');

esbuild
    .build({
        entryPoints: [
            './lib/index.js',
            './lib/Button/index.js',
            './lib/Dropdown/index.js',
            './lib/Input/index.js',
            './lib/Link/index.js',
            './lib/Menu/index.js',
            './lib/Select/index.js',
            './lib/Textarea/index.js',
            './lib/Typography/index.js',
            './lib/Flex/index.js',
            './lib/Grid/index.js',
            './lib/utils/theme.js'
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
