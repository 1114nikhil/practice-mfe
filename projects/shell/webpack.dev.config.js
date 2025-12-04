module.exports = {
  devServer: {
    // Explicitly define the port and host for the shell application (assuming 4200 is default)
    port: 4200, 
    host: 'localhost',

    // This setting looks correct for Angular Micro Frontends
    historyApiFallback: {
      disableDotRule: true, // This is crucial for paths like 'remoteEntry.js'
    }
  },
};