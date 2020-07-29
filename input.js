/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
//let connection;

const setupInput = function() {
  //connection = conn;   
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput)
 
  return stdin;
}

const handleUserInput = function(key){
  if (key === '\u0003') {
    process.exit();
  }
}


module.exports = {
  setupInput,
}