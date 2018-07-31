const pwdFunc = require('./pwd.js')
const lsFunc = require('./ls.js')
const catFunc = require('./cat.js')
const curlFunc = require('./curl');

// output a prompt
process.stdout.write('prompt > ')

//
process.stdin.on('data', data => {
  const cmd = data.toString().trim()

  process.stdout.write(`You typed: ${cmd}`)
  process.stdout.write('\nprompt > ')
})
