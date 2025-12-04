const { withModuleFederationPlugin, shareAll } =
  require('@angular-architects/module-federation/webpack');

// 1. Get the base configuration from the module federation plugin
const mfConfig = withModuleFederationPlugin({
  name: "authMfe",
  filename: "remoteEntry.js",

  exposes: {
    "./AuthRoutes": "./projects/auth-mfe/src/app/auth/auth.routes.ts"
  },

  shared: shareAll({
    singleton: true,
    strictVersion: true
  })
});

module.exports = {
  ...mfConfig, // Include all the settings from the module federation config
  
  output: {
    // Keep the uniqueName defined by the plugin or explicitly set it
    uniqueName: 'authMfe', 
    
    // *** THE FIX ***
    // Explicitly set the public path to the full URL where this MFE is served.
    // Since your MFE is running on port 4300, use:
    publicPath: "http://localhost:4300/", 
    
    // Ensure this is set for development as well. 
    // You can use 'auto' for production, but explicit URL works best in dev.
  }
};