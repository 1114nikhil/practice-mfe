// // const { shareAll } = require('@angular-architects/module-federation/webpack');

// // module.exports = {
// //   name: 'dashboardMfe',
// //   filename: 'remoteEntry.js',
// //   exposes: {
// //     './DashboardRoutes': './projects/dashboard-mfe/src/app/app.routes.ts'
// //   },
// // };
// const { withModuleFederationPlugin, shareAll } = require('@angular-architects/module-federation/webpack');

// // 1. Get the base configuration from the module federation plugin
// const mfConfig = withModuleFederationPlugin({
//   name: "dashboardMfe", // The name of this micro frontend
//   filename: "remoteEntry.js", // The remote entry file

//   exposes: {
//     // Exposing the routes or modules to be consumed by the shell
//     "./dashboardRoutes": "./projects/dashboard-mfe/src/app/app.routes.ts",
//   },

//   shared: shareAll({
//     singleton: true, // Ensures only one instance of a shared module (like Angular) is loaded
//     strictVersion: true, // Makes sure versions match
//     eager:true
//   }),
// });

// module.exports = {
//   ...mfConfig, // Include the module federation plugin configurations

//   // Webpack output settings
//   output: {
//     ...mfConfig.output, // Keep any output configuration from Module Federation
//     uniqueName: 'dashboardMfe', 
//     publicPath: "http://localhost:4400/", // Ensure the correct base URL is used for remote entry
//   },

//   // Dev server configuration to support SPA routing for MFE
//   devServer: {
//     historyApiFallback: {
//       disableDotRule: true, // Important for handling routes like '/remoteEntry.js'
//     },
//   },

//   // Optional: Other configurations (like additional plugins) can go here if needed
// };
