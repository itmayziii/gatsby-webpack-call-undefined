# gatsby-webpack-call-undefined

This repo attempts to demonstrate error "WebpackError: TypeError: Cannot read property 'call' of undefined" the mentioned
in Webpack issue [#6094](https://github.com/webpack/webpack/issues/6094). This example is using [loadable components](https://github.com/gregberge/loadable-components)
in a [Gatsby](https://www.gatsbyjs.org/) project. I'm using this example because I was unable to reproduce this myself
when writing a Webpack configuration, but it seems Gatsby's Webpack config consistently generates the error during a `npm run build`.

## Notes
* You can find the dynamic import in `src/pages/index.js`. Based on the Webpack issue dynamic imports seem to be contributing
to the problem.
* If you look in `gatsby-node.js` you will see I'm logging Gatsby's webpack config to hopefully help diagnose the issue.
* Run `npm run build` to reproduce the issue.
