var os = require('os');

var impl = (function() {
    switch (require('os').platform()) {
        case 'darwin':
            return require('./lib/darwin');
        default:
            throw new Error("unsupported platform");
    }
})();

module.exports = impl;