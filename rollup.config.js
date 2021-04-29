import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import svg from 'rollup-plugin-svg';
import { string } from 'rollup-plugin-string';
import image from 'rollup-plugin-img';
import cleanup from 'rollup-plugin-cleanup';

export default {
  input: './src/odh-weather-video.js',
  output: {
    file:
      process.env.NODE_ENV === 'production'
        ? './dist/odh-weather-video.min.js'
        : './work/scripts/odh-weather-video.js',
    format: 'iife'
  },
  plugins: [
    string({ include: '**/*.css' }),
    image({
      limit: 10000
    }),
    commonJS(),
    resolve(),
    svg(),
    process.env.NODE_ENV === 'production' &&
      terser({
        mangle: {
          module: true
        }
      }),
    process.env.NODE_ENV === 'production' && cleanup({ comments: 'none' })
  ]
};
