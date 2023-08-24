import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import clear from 'rollup-plugin-clear';
import json from '@rollup/plugin-json'; // 支持在源码中直接引入json文件，不影响下面的
import { name, version, author } from '../package.json' assert { type: 'json' };

const pkgName = 'chqxTool';
// 打包处理的文件，添加的备注信息
const banner =
  '/*\n' +
  ` * ${name} v${version}\n` +
  ` * (c) 2022-${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */';

export default {
  input: 'src/index.ts',
  // 同时打包多种规范的产物
  output: [
    {
      file: `dist/${pkgName}.umd.js`,
      format: 'umd',
      name: pkgName,
      banner,
    },
    {
      file: `dist/${pkgName}.umd.min.js`,
      format: 'umd',
      name: pkgName,
      banner,
      plugins: [terser()],
    },
    {
      file: `dist/${pkgName}.cjs.js`,
      format: 'cjs',
      name: pkgName,
      banner,
      plugins: [terser()],
    },
    {
      file: `dist/${pkgName}.esm.js`,
      format: 'esm',
      name: pkgName,
      banner,
      plugins: [terser()],
    },
    {
      file: `dist/${pkgName}.js`,
      format: 'iife',
      name: pkgName,
      banner,
      plugins: [terser()],
    },
  ],
  // 注意 plugin 的使用顺序
  plugins: [
    json(),
    clear({
      targets: ['dist'],
    }),
    typescript(),
  ],
};
