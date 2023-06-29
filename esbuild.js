import esbuild from 'esbuild';
import { customPlugin } from './plugins/injectCss.js';
import deps from './package.json' assert { type: 'json' };

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
            'src/theme.js'
        ],
        outdir: '.',
        bundle: true,
        minify: true,
        treeShaking: true,
        platform: 'node',
        format: 'cjs',
        target: 'node14',
        minify: true,
        loader: { '.css': 'text' },
        plugins: [customPlugin],
        external: Object.keys(deps.devDependencies).concat(
            Object.keys(deps.peerDependencies)
        )
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
