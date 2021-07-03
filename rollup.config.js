import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json'
import path from 'path'

const paths = {
    input: path.join(__dirname, '/src/index.ts'),
    output: path.join(__dirname, '/dist'),
  }

const rollupConfig = [
  {
    input: paths.input,
    output: {
      name: pkg.name,
      file: path.join(paths.output, pkg.browser)
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      babel({ babelHelpers: 'bundled'})
    ]
  },
  {
    input: paths.input,
    output: [
      {
        name: pkg.name,
        file: path.join(paths.output, pkg.module),
        format: 'es'
      },
      {
        name: pkg.name,
        file: path.join(paths.output, pkg.main),
        format: 'cjs'
      }
    ],
    plugins: [
      typescript(),
      babel({ babelHelpers: 'bundled'})
    ]
  }
]

export default rollupConfig
