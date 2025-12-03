const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  name: 'dashboardMfe',
  filename: 'remoteEntry.js',
  exposes: {
    './DashboardRoutes': './projects/dashboard-mfe/src/app/app.routes.ts'
  },
};
