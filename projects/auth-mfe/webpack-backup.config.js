// const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

// module.exports = {
//   ...withModuleFederationPlugin({
//     name: 'authMfe',
//     exposes: {
//       './AuthRoutes': './src/app/auth/auth.routes.ts',
//     },
//     shared: {
//       "@angular/core": { singleton: true, eager: true },
//       "@angular/common": { singleton: true, eager: true },
//       "@angular/router": { singleton: true, eager: true },
//     },
//   }),
//   output: {
//     publicPath: 'auto',
//     scriptType: 'module',
//   },
//   devServer: {
//     port: 4300,
//     historyApiFallback: {
//       disableDotRule: true,
//     },
//   },
// };
const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = {
  output: {
    publicPath: 'auto', // Ensure publicPath is set to 'auto'
    uniqueName: 'authMfe',
    scriptType: 'module',  // Resolves issues related to 'import' statements in the browser
    filename: '[name].js',  // Name the output file(s)
    chunkFilename: '[id].js',  // Ensure chunks are named correctly
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'], // Ensure TypeScript and JavaScript files are resolved
  },
  optimization: {
    minimize: false, // Disable minimization for easier debugging
    splitChunks: false, // Disable chunk splitting
  },
  devServer: {
    port: 4300,
    historyApiFallback: {
      disableDotRule: true, // Crucial for serving static files like remoteEntry.js
    },
  },
  plugins: [
    withModuleFederationPlugin({
      name: 'authMfe',
      filename: 'remoteEntry.js',  // Ensure this is the correct file name
      exposes: {
        './AuthRoutes': './src/app/auth/auth.routes.ts', // Update path to actual file
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true },
      },
    }),
  ],
};
