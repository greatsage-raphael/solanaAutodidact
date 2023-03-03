const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    dest: 'public',
    runtimeCaching,
  // other configuration options
});
