const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const name = 'AC';

  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542 // PORT number here,
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');    
    conn.write(`Name: ${name}`);
  })
  
  conn.setEncoding('utf8'); // interpret incoming data as text

  return conn;
};


module.exports = connect;