
  
  module.exports = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const pwd = process.cwd();
  
    if (cmd === 'pwd') {
      console.log(pwd);
      process.stdout.write('\nprompt > ');
    }
  
  });