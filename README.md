# progress-string

Generate a CLI progress bar as a string that you can then output in any
way you like.

[![Build status](https://travis-ci.org/watson/progress-string.svg?branch=master)](https://travis-ci.org/watson/progress-string)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install progress-string --save
```

## Usage

```js
var progress = require('progress-string')
var diff = require('ansi-diff-stream')()

var value = 0
var total = 42
var bar = progress({width: 120, total: total})

setInterval(function () {
  diff.write(
    'The progress of the program is:\n' +
    bar(++value)
  )
  if (value === total) process.exit()
}, 500)

diff.pipe(process.stdout)
```

## API

```js
progress(value, max)
```

This module exposes a function that takes two arguments and returns a
string:

- `value` - (integer) The current value of the progress bar
- `max` - (integer) The max value of the progress bar

## License

MIT
