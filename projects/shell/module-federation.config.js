const { shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = {
  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  })
};