const path = require('path');
const fs = require('fs');
const esbuild = require('esbuild');

const demoDir = __dirname;
const packageRoot = path.join(demoDir, '..');
const outDir = path.join(demoDir, 'dist');
const serve = process.argv.includes('--serve');
const port = Number(process.env.PORT) || 3000;

const options = {
    entryPoints: [path.join(demoDir, 'main.jsx')],
    bundle: true,
    minify: !serve,
    format: 'iife',
    target: ['es2019'],
    loader: { '.js': 'jsx', '.jsx': 'jsx', '.json': 'json' },
    define: { 'process.env.NODE_ENV': '"production"' },
    alias: { corelabui: packageRoot },
    outfile: path.join(outDir, 'app.js'),
    logLevel: 'info'
};

async function run() {
    if (!fs.existsSync(path.join(packageRoot, 'index.js'))) {
        console.error(
            'Library build not found. Run "npm run build" before building the demo.'
        );
        process.exit(1);
    }

    fs.mkdirSync(outDir, { recursive: true });
    fs.copyFileSync(
        path.join(demoDir, 'index.html'),
        path.join(outDir, 'index.html')
    );

    if (serve) {
        const context = await esbuild.context(options);
        await context.watch();
        const { port: actualPort } = await context.serve({
            servedir: outDir,
            port
        });
        console.log(`Demo running at http://localhost:${actualPort}`);
    } else {
        await esbuild.build(options);
        console.log('Demo built to demo/dist');
    }
}

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
