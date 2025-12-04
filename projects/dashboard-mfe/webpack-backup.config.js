// webpack.config.js (for your remote MFE: dashboard-mfe)
const {
  withModuleFederationPlugin,
  shareAll,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  // Remote MFE config
  name: 'dashboardMfe',  // Must match your exposes and host remotes
  filename: 'remoteEntry.js',
  exposes: {
    './DashboardRoutes': './src/app/app.routes.ts',  // Your exposed route/module
  },
  shared: {
    // Explicitly share core Angular libs
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    // Share all other local libs automatically (opt-in for efficiency)
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  // Optional: Specify local libs to share explicitly (e.g., if you have custom libs)
  // sharedMappings: ['your-local-lib'],
});