// Rollup plugins
// import uglify from 'rollup-plugin-uglify'
import vue from 'rollup-plugin-vue'

const builds = {
  'development': {
    output: [
      {
        file: './dist/vue-teller.js',
        format: 'umd'
      },
      {
        file: './dist/vue-teller.esm.js',
        format: 'es'
      }
    ]
  },
  'production': {
    output: [
      {
        file: './dist/vue-teller.min.js',
        format: 'umd'
      },
      {
        file: './dist/vue-teller.esm.min.js',
        format: 'es'
      }
    ],
    plugins: [
      // uglify()
    ]
  }
}

function genConfig (opts) {
  const config = {
    input: './src/index.js',
    output: opts.output,
    plugins: [
      vue({
        css: './dist/vue-teller.css',
        compileTemplate: true
      })
    ].concat(opts.plugins || []),
    name: 'vueTeller',
    external: ['vue'],
    globals: {
      vue: 'Vue'
    }
  }
  return config
}

export default genConfig(builds[process.env.NODE_ENV || 'development'])
