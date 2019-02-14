const express = require('express');
const uuidv4 = require('uuid/v4');
const WebSocket = require('ws');
const SocketServer = WebSocket.Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected');
  console.log(wss.clients.size);
  let newUserMsg = {
    userCount: wss.clients.size,
    type: "incomingUsers"
  }
  wss.broadcast(JSON.stringify(newUserMsg));
  ws.on('message', function incoming (message) {
    const msg = JSON.parse(message);
    switch(msg.type) {
      case "postMessage":
        msg.type = "incomingMessage";
        msg.id = uuidv4();
        let newMessage = JSON.stringify(msg);
        wss.broadcast(newMessage);
        break;
      case "postNotification":
        msg.type = "incomingNotification";
        msg.id = uuidv4();
        let newNotification = JSON.stringify(msg);
        wss.broadcast(newNotification);
        break;
    }
  })
  
  ws.on('close', () =>{
    let newUserMsg = {
      userCount: wss.clients.size,
      type: "incomingUsers"
    }
    wss.broadcast(JSON.stringify(newUserMsg));
    console.log('Client disconnected')
  });
});
