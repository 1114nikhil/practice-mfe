const { withModuleFederationPlugin, shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'authMfe',
  filename: 'remoteEntry.js',
  exposes: {
    './AuthRoutes': './projects/auth-mfe/src/app/app.routes.ts'
  },
  shared: shareAll({
    singleton: true,
    strictVersion: true
  })
});