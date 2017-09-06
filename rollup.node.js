var pkg = require('./package.json')

export default {
  entry: 'src/y-map.js',
  moduleName: 'yMap',
  format: 'umd',
  dest: 'y-map.node.js',
  sourceMap: true,
  banner: `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @license ${pkg.license}
 */
`
}
