const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })
  
  conn.on('connect', () => {
    conn.write('Name: MHR');

  })


  //conn.on('connect', () => {
  //  for (let i = 0; i < 5; i++) {
  //    setTimeout(() => {
  //    conn.write('Move: right');
  //    }, 100 * i);
  //  }
  //  for (let i = 0; i < 5; i++) {
  //    setTimeout(() => {
  //    conn.write('Move: up');
  //    }, 100 * i + 500);
  //  }
  //})
  
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  });

  return conn;
}

module.exports = {
  connect
}