import esbuild from 'esbuild';
import { customPlugin } from './plugins/injectCss.js';
import deps from './package.json' assert { type: 'json' };

esbuild
    .build({
        entryPoints: [
            'src/Breadcrumb/index.js',
            'src/Button/index.js',
            'src/Card/index.js',
            'src/Checkbox/index.js',
            'src/Divider/index.js',
            'src/Dropdown/index.js',
            'src/Flex/index.js',
            'src/Grid/index.js',
            'src/Input/index.js',
            'src/Link/index.js',
            'src/Navigation/index.js',
            'src/RadioButton/index.js',
            'src/Select/index.js',
            'src/Table/index.js',
            'src/Tag/index.js',
            'src/Textarea/index.js',
            'src/Typography/index.js',
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
