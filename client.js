
const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
    
  });
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Jay");
    // conn.write("Move: up");
    // setTimeout(() => {
    //     conn.write('Move: up');
    // }, 1000)
    // conn.write("Move: up")
    // conn.write("Move: left")
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = {
  connect
};