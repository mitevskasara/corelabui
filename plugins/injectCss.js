import fs from 'fs';
import esbuild from 'esbuild';

export const customPlugin = {
    name: 'minify-inject-css',
    async setup(build) {
        build.onLoad({ filter: /\.jsx$/ }, async (args) => {
            let content = await fs.promises.readFile(args.path, 'utf8');
            let dir = args.path.split('/');
            dir.pop();
            dir = dir.join('/');
            const key = args.path
                .split('/')
            [args.path.split('/').length - 1].split('.')[0];

            let cssFileName = content.match(
                new RegExp(/(?<=import)(.*)(?=.css)/)
            );

            let fileContent = '';

            if (cssFileName) {
                cssFileName = cssFileName[0]
                    .replaceAll('./', '')
                    .replaceAll(`'`, '')
                    .trim();

                let cssStyle = await fs.promises.readFile(
                    `${dir}/${cssFileName}.css`,
                    'utf8'
                );

                let minifiedCss = (
                    await esbuild.transform(cssStyle, {
                        loader: 'css',
                        minify: true
                    })
                ).code;

                const regex = /(\r\n|\n|\r)/gi;
                minifiedCss = minifiedCss.replaceAll(regex, '');
                minifiedCss =
                    `const css = "` + minifiedCss.replaceAll(regex, '') + `";`;

                fileContent = content.replace(
                    "injectStyle('" + key + "', {});",
                    minifiedCss + "\ninjectStyle('" + key + "', css);"
                );
            }

            return {
                contents: fileContent,
                loader: 'jsx'
            };
        });
    }
};
