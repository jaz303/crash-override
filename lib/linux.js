var spawn = require('child_process').spawn;

function sudo(args, cb) {
    cmd("sudo", args, cb);
}

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

exports.restart = function(cb) {
    sudo("reboot", [], cb);
}

exports.shutdown = function(cb) {
    sudo("shutdown", ["-h", "now"], cb);
}

exports.sleep = function(cb) {
    // ...
}

exports.mute = function(cb) {
    cmd("amixer", ["set", "Master", "mute"], cb);
}

exports.unmute = function(cb) {
    cmd("amixer", ["set", "Master", "unmute"], cb);
}

exports.setVolume = function(val, cb) {
    val = Math.floor(val * 100);
    cmd("amixer", ["set", "Master", val + '%'], cb);
}

exports.startScreensaver = function(cb) {
    cmd("xscreensaver-command", ["-activate"], cb);
}

exports.stopScreensaver = function(cb) {
    cmd("xscreensaver-command", ["-deactivate"], cb);
}