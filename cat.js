const fs = require('fs')

module.exports = process.stdin.on('data', data => {
  const cmd = data.toString().split(' ')
  const file = cmd[1].trim()

  if (cmd[0] === 'cat') {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err
      console.log(data)
    })
  }
})
