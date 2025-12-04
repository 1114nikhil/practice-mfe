const { withModuleFederationPlugin, shareAll } =
  require('@angular-architects/module-federation/webpack');

// 1. Get the base Module Federation config
const mfConfig = withModuleFederationPlugin({
  name: "shell",
  
  remotes: {
    // Ensure the remote URLs are correct
    authMfe: "authMfe@http://localhost:4300/remoteEntry.js",
    dashboardMfe: "dashboardMfe@http://localhost:4400/remoteEntry.js",
  },

  shared: shareAll({
    // These settings ensure Angular dependencies are correctly shared
    singleton: true,
    strictVersion: true
  })
});

// 2. Merge all configurations into a single export
module.exports = {
  ...mfConfig, // Includes the Module Federation settings (plugins, shared scope init)

  // Merge output settings (These will override any output settings defined in mfConfig)
  output: {
    // Merge existing output settings from the MF plugin
    ...mfConfig.output, 
    uniqueName: 'shell',
    publicPath: 'auto',
    
    // CRITICAL FIX: Ensures the output environment is correctly configured for ES Modules (fixing 'import.meta' error).
    environment: {
        ...mfConfig.output.environment,
        module: true,
    }
  }
};