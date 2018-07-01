import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';


export default [{
  entry: 'src/index.js',
  format: 'iife',
  name: 'Lite',
  sourceMap: 'inline',
  dest: './dist/dist.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}]