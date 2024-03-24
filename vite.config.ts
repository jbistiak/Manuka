import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { siteData, pagesData } from './site.config';
import viteImagemin from 'vite-plugin-imagemin';
import { VitePWA } from 'vite-plugin-pwa';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
    server: {
        open: true,
    },
    root: siteData.root,
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, siteData.root, 'index.html'),
                sample: resolve(__dirname, siteData.root, 'pages/manuka-medy.html'),
            },
        },
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'safari-pinned-tab.svg'],
            manifest: {
                theme_color: siteData.themeColor,
                background_color: siteData.themeColor,
                display: 'browser',
                name: siteData.siteName,
                short_name: siteData.shortName,
                description: siteData.description,
                icons: [
                    {
                        src: '/favicon-16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                    },
                    {
                        src: '/favicon-32x32.png',
                        sizes: '32x32',
                        type: 'image/png',
                    },
                ],
            },
        }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            // mozjpeg: {
            //     quality: 20,
            // },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        }),
        handlebars({
            partialDirectory: resolve(__dirname, siteData.root, '_partials'),
            context(pagePath) {
                return pagesData[pagePath];
            },
        }),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]',
            /**
             * custom insert position
             * @default: body-last
             */
            /**
             * custom dom id
             * @default: __svg__icons__dom__
             */
            customDomId: '__svg__icons__dom__',
        }),
    ],
});
