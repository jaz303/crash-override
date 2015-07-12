var os = require('os');

var impl = (function() {
    var platform = os.platform();
    if (platform === 'darwin') {
        return require('./lib/darwin');
    } else if (platform === 'linux') {
        return require('./lib/linux');
    } else if (platform.match(/^win/)) {
        return require('./lib/windows');
    } else {
        throw new Error("unsupported platform");
    }
})();

module.exports = impl;