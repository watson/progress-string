var progress = require('../')
var diff = require('ansi-diff-stream')()

var value = 0
var total = 1024
var bar = progress({width: 50, total: total})
var arrow = progress({
  width: 50,
  total: total,
  style: function (complete, incomplete) {
    return complete.slice(0, complete.length - 1) + '>' + incomplete
  }
})

var custom = progress({
  width: 48,
  total: total,
  style: function (complete, incomplete) {
    return '#'.repeat(complete.length) + '' + ' '.repeat(incomplete.length)
  }
})

var int = setInterval(function () {
  value += 32
  diff.write(
    'default progress bar: ' +
    bar(value) + '\n' +
    'but you can style it: ' +
    arrow(value) + '\n' +
    'in any way you want:  ' +
    '[' + custom(value) + ']' + ' (' + value + '/' + total + ')'
  )
  if (value === total) {
    clearInterval(int)
    setTimeout(() => {
      process.exit()
    }, 1000)
  }
}, 250)

diff.pipe(process.stdout)
