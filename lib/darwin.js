var spawn = require('child_process').spawn;

function osa(script, cb) {
    var proc = spawn('osascript', ['-e', script]);
    if (cb) {
        proc.on('close', function(code) {
            cb(code === 0
                ? null
                : new Error("osascript exited with status " + code));
        }); 
    }
}

//
// Power

exports.restart = function(cb) {
    osa("tell application \"System Events\" to restart", cb);
}

exports.shutdown = function(cb) {
    osa("tell application \"System Events\" to shut down", cb);
}

exports.sleep = function(cb) {
    osa("tell application \"System Events\" to sleep", cb);
}

//
// Volume

exports.mute = function(cb) {
    osa("set volume with output muted", cb);
}

exports.unmute = function(cb) {
    osa("set volume without output muted", cb);
}

exports.setVolume = function(val, cb) {
    val = Math.floor(val * 100);
    osa("set volume output volume " + val, cb);
}

//
// Screensaver

exports.startScreensaver = function(cb) {
    osa("tell application \"ScreenSaverEngine\" to activate", cb)
}

exports.stopScreensaver = function(cb) {
    osa("tell application \"ScreenSaverEngine\" to quit", cb);
}