import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import clear from 'rollup-plugin-clear';
import json from '@rollup/plugin-json';
import { readFileSync } from 'node:fs';

const pkgName = 'chqxTool';

const { name, version, author } = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
);
const banner =
  '/*\n' +
  ` * ${name} v${version}\n` +
  ` * (c) 2022-${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */';

export default defineConfig([
  {
    input: 'src/index.ts',
    output: { file: 'es/index.esm.js', format: 'esm', banner },
    plugins: [
      json(),
      clear({ targets: ['es'] }),
      typescript({
        compilerOptions: { declaration: true, emitDeclarationOnly: true, outDir: './es' },
      }),
    ],
  },
  {
    input: 'src/index.ts',
    // 同时打包多种规范的产物
    output: [
      { file: 'lib/index.umd.js', format: 'umd', name: pkgName, banner },
      { file: 'lib/index.umd.min.js', format: 'umd', name: pkgName, plugins: [terser()] },
      { file: 'es/index.esm.min.js', format: 'esm', plugins: [terser()] },
      { file: 'dist/index.js', format: 'iife', name: pkgName, banner },
      { file: 'dist/index.min.js', format: 'iife', name: pkgName, plugins: [terser()] },
    ],
    // 注意 plugin 的使用顺序
    plugins: [json(), clear({ targets: ['lib', 'dist'] }), typescript()],
  },
]);
