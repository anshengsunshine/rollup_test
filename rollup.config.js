import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
export default {
  input: "./src/index.js",
  output: [
    {
      file: './dist/ansheng-lib-umd.js',
      format: 'umd',
      name: 'anshengLib'
    },
    {
      file: './dist/ansheng-lib-es.js',
      format: 'es'
    },
    {
      file: './dist/ansheng-lib-cjs.js',
      format: 'cjs'
    }
  ],
  plugins:[
    babel({
        exclude: 'node_modules/**'
    }),
    vue({
      style: {
        postcssPlugins: [
          autoprefixer()
        ]
      }
    }),
    commonjs()
  ],
  external:[  //外部库， 使用'umd'文件时需要先引入这个外部库
    'vue'
  ]
}
