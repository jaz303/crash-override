var spawn = require('child_process').spawn;

function cmd(bin, args, cb) {
    var proc = spawn(bin, args);
    if (cb) {
        proc.on('close', function(code) {
            cb(code === 0
                ? null
                : new Error("command exited with status: " + code));
        });
    }
}

function notImplemented() {
    throw new Error("not implemented");
}

exports.restart = function(cb) {
    cmd("shutdown", ["-r"], cb);
}

exports.shutdown = function(cb) {
    cmd("shutdown", ["-s"], cb);
}

exports.sleep = notImplemented;
exports.mute = notImplemented;
exports.unmute = notImplemented;
exports.setVolume = notImplemented;
exports.startScreensaver = notImplemented;
exports.stopScreensaver = notImplemented;