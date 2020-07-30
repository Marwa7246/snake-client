/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection;
const { mapMessages, movements } = require('./constants');
 
const setupInput = function(conn) {
  connection = conn;
  
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
 
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (movements[key]) {
    connection.write(`Move: ${movements[key]}`);
  }

  if (mapMessages[key]) {
    connection.write('Say: ' + mapMessages[key]);
  }

};

module.exports = {
  setupInput,
};