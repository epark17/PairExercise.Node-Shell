// output a prompt
process.stdout.write('prompt > ');

//
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const pwd = process.cwd();

  process.stdout.write(`You typed: ${cmd}`);
  process.stdout.write('\nprompt > ');

  if (cmd === 'pwd') {
    console.log(pwd);
    process.stdout.write('\nprompt > ');
  }

});
