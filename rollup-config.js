import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import sourcemaps from 'rollup-plugin-sourcemaps';
const filesizeConfig = {
    showGzippedSize: true,
    showBrotliSize: false,
    showMinifiedSize: false,
};

const config = {
    input: 'out-tsc/index.js',
    output: {
        sourcemap: true,
        file: 'wwwroot/js/index.bundle.js',
        format: 'es',
    },
    plugins: [
        sourcemaps(),
        minifyHTML(),
        resolve(),
        filesize(filesizeConfig),

    ],
    preserveEntrySignatures: false,
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser());
}

export default config;