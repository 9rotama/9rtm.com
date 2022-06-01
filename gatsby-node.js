const resolve = require('path').resolve
exports.onCreateWebpackConfig = ({ actions }) => {

  actions.setWebpackConfig({
    devServer: {
      contentBase: `${__dirname}/dist`,
      historyApiFallback: true
    }
  })
}