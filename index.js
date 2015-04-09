var os = require('os');

var impl = (function() {
    switch (require('os').platform()) {
        case 'darwin':
            return require('./lib/darwin');
        case 'linux':
        	return require('./lib/linux');
        default:
            throw new Error("unsupported platform");
    }
})();

module.exports = impl;