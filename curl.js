const request = require('request');

module.exports = process.stdin.on('data', data => {
  const cmd = data.toString().split(' ');
  const URL = cmd[1].trim();

  if (cmd[0] === 'curl') {
    console.log(request.get(URL));
  }
});
