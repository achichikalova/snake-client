const net = require('net');
const { IP, PORT, name } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.write(`Name: ${name}`);
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  return conn;
};

module.exports = connect;