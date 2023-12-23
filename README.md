
# roll-chat

roll-chat is a simple chat program to help students learn about sockets, etc. It used the Node Package Manager (npm)


## Documentation


This is the readme file for roll-chat application

© 2023 Roland Labana

roll-chat is a simple chat program to help students learn about sockets, etc. It used the Node Package Manager (npm)

It consists of two programs:
index.js - a server that accepts connections, messages, disconnections from clients and when a message is received, broadcasts it to all other connected clients (group chat)
index.html - the client code that creates a simple chat interface and allows messages to be entered and sent to the server to be forwarded on to other connected clients.


Before running the code, make sure in addition to the libraries being installed on the server, make sure to have the correct directory structure:

// Here is a view of the directory where this file resides:
// roll-chat/
// 	index.js             	package-lock.json       public
// 	node_modules         	package.json
//
// roll-chat/public/
//	index.html
//

“roll-chat” can be changed to any directory name you like. 

To use the program, make sure to install all the necessary libraries on the server side:

1. 
Node.js and npm: Download and install Node.js from the official website (https://nodejs.org/en/). It includes npm, the Node Package Manager.
Socket.IO Library: Install it using npm:
Bash:
npm install socket.io
2.
Install the Express Module:
Open a terminal in the directory containing index.js.
Run the following command in Bash
npm install express
This will download and install the Express module locally in your project's node_modules folder.

On the client side, if you are using one computer for a demo, simply open two or more browser windows and enter localhost:3000 into the URL bar.

Then you can send messages back and forth. Currently, messages are not output to the GUI, so use the developers console in the browser window to see the messages sent and received. 
To use the client on another computer, the browser window will have to be pointed to the public IP address of the server computer. To do this do the following:

To connect to the chat application from a different computer, users would need to use the correct address or hostname instead of localhost. Here's how it works:
1. Determining the Server's Address:
Local Network:
If the server and clients are on the same local network (e.g., home Wi-Fi), you can typically use the server's local IP address, which often looks like 192.168.x.x. You can find this address in your operating system's network settings.
Public IP Address:
If the server is accessible over the internet, you'll need to use its public IP address. You can find this by visiting websites like "what is my IP" or checking your internet router's settings.
Hostname (Optional):
If you have a domain name or hostname set up for your server, users can use that instead of the IP address (e.g., chat.example.com).
2. Client-Side Connection:
In the client-side JavaScript code (index.html), replace localhost with the appropriate address or hostname. For example:
// Assuming server's IP is 192.168.1.100
const socket = io('http://192.168.1.100:3000'); 


Reference:
The code is designed to enable real-time chat between multiple clients, even if they're on different computers. Here's how it works:
1. Server-Side Connectivity:
The Node.js server, running the index.js code, acts as a central hub for communication.
It listens for incoming socket connections on a specific port (e.g., port 3000 in your case).
Clients from any computer on the same network or the internet can establish connections to the server.
2. Socket.IO for Real-Time Communication:
Socket.IO handles the real-time, bidirectional communication between the server and clients.
It establishes persistent connections, allowing for immediate message exchange without traditional page reloads.
3. Broadcasting Messages:
When a client sends a message, the server receives it and uses socket.broadcast.emit('chat message', msg) to distribute it to all other connected clients.
This mechanism ensures that messages are propagated to all participants in the chat, regardless of their device or location.
4. Client-Side Rendering:
The client-side JavaScript code in index.html listens for incoming "chat message" events broadcasted by the server.
It then renders these messages in the chat window, providing a real-time conversation experience for all users.
Key Requirements for Cross-Device Chat:
Server Accessibility: The server must be accessible from other computers on the network or internet.
Firewall/Port Configuration: Ensure firewalls and port settings allow incoming connections to the server's port.
Same Network or Internet: Clients must be on the same network or have internet access to reach the server.
No Client-Side Restrictions: Verify no browser extensions or settings block WebSocket connections.


Here's how the code files are distributed and executed across computers:
1. Server Computer (One Instance):
index.js: This file contains the Node.js server code that handles socket connections, message broadcasting, and serving static files. It must be running on a single computer that acts as the central hub for the chat application.
package.json (Optional): If you're using npm or yarn to manage dependencies, this file lists the required Node.js modules (like Express and Socket.IO).
node_modules/ (Optional): This folder contains the installed Node.js modules. It's usually not required to distribute this folder directly.
2. Client Computers (Multiple Instances):
index.html: Each client computer needs only this file. It contains the HTML structure, JavaScript code for client-side interactions, and a reference to Socket.IO's client-side library.
socket.io.js: This file is typically included directly from a CDN (Content Delivery Network) within index.html, so it doesn't need to be distributed separately.
Key Points:
Central Server: The index.js server file runs on a single computer, acting as the communication backbone for all clients.
Client-Side Files: The index.html file, along with the CDN-hosted socket.io.js, are the only files needed on each client computer.
No Server-Side Code on Clients: Clients don't execute the index.js server code; they only interact with the server through Socket.IO connections.
Process for Clients:
User opens index.html in their browser.
Browser downloads and executes the client-side JavaScript code.
JavaScript code establishes a Socket.IO connection to the server (using the correct address/hostname).
User interacts with the chat interface, sending and receiving messages through Socket.IO.
Remember: The server must be running for clients to connect and chat.

