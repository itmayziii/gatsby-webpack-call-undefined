/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ getConfig }) => {
  console.log('****************************************************************************************************************************************')
  const config = getConfig()
  console.log('config', config)
}
