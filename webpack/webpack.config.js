const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common.js")

module.exports = (environment) => {
  const { env } = environment
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
