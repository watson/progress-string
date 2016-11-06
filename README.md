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

### `var bar = progress(options)`

This module exposes a function that takes a single `options` argument
and retuns a bar function.

These are the options:

- `total` - (integer) The max value of the progress bar
- `width` - (integer, default: 42) The width of the progress bar in chars
- `incomplete` - (string, default: `-`) The char used to indicate the
  incomplete part of the progress bar
- `complete` - (string, default: `=`) The char used to indicate the
  completed part of the progress bar

### `var str = bar(value)`

Call the `bar` function with the `value` you want to the generated
progress bar to have.

The `bar` function will return a string representation of the progress
bar.

## License

MIT
