# crash-override

Control system services such as audio volumne, start/sleep/shutdown and screensaver programmatically.

OS X only for now!

## Installation

Get it:

    $ npm install --save crash-override

Require it:

	var crash-override = require('crash-override');

## API

(Callback is optional for all methods)

#### `co.restart([cb])`

Restart the computer.

#### `co.shutdown([cb])`

Shutdown the computer.

#### `co.sleep([cb])`

Enter sleep mode.

#### `co.mute([cb])`

Mute audio.

#### `co.unmute([cb])`

Unmute audio.

#### `co.setVolume(val, [cb])`

Set the system volume to `val` (0..1).

#### `co.startScreensaver([cb])`

Start the system screensaver.

#### `co.stopScreensaver([cb])`

Stop the system screensaver.

## Copyright &amp; License

&copy; 2015 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.
