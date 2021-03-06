import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/rollup.bundle.js',
    format: 'cjs'
  },
  plugins: [
    babel(),
    terser()
  ]
}