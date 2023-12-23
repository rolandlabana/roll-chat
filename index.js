
// index.js
// 
// (c) 2023 Roland Labana
//
// This file should be run from the Mac terminal window:
//      node index.js
// It hosts the messaging server
// The messaging server allows clients to connect
// It waits for messages to arrive and then broadcasts them to all
// the connected clients (omitting the sending socket)
//
// This file works in conjection with index.html which should be in a subdirectory
// called public/
//
// Also ensure the necessary librarys reside on the server running this code.
// See the readme file for details.
// 
// Here is a view of the directory where this file resides:
// index.js		package-lock.json	public
// node_modules		package.json
//
// public/index.html
// 
// once this server is running, open two browser windows and 
// browse to localhost:3000 on each.
// this brings up the chat interface allows communication between the two
// windows. Nothing is printed yet to the GUI. Instead open the console window
// to see the msgs sent and received. 
// more than 2 browser windows can participate
// to make this work with clients on another computer, they have to browser
// to the public IP of this server computer
// see the readme for how to get the ip to use.



// set up parameters
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files (like index.html) from the public directory
app.use(express.static('public'));  // Assuming static files are in a 'public' folder

// Default route to serve index.html
// note: index.html must be in the dir "public" in the dir of index.js
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// set up a socket, wait for connections, wait for messages, send msgs on, wait for discs
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  socket.on('chat message', (msg) => {
    console.log('Message:', socket.id, msg);
    //io.emit('chat message', msg); // Broadcast to all clients including sender - we don't want to do this so do below instead
   
    //only send message to the other party. If there is many, then use a loop 
    socket.broadcast.emit('chat message', msg);  
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

});

// listen for incoming connections, msgs, etc and handle above
http.listen(3000, () => {
  console.log('Server listening on port 3000');
});




