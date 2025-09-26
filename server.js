import { WebSocketServer } from 'ws';

// Create a WebSocket server on port 8080
const wss = new WebSocketServer({ port: 8080 });

// Listen for new connections
wss.on('connection', function connection(ws) {
  console.log('A new client connected!');
  ws.send('Welcome, new client!');

  // Listen for messages from the client
  ws.on('message', function message(data) {
    console.log('received: %s', data);

    // Echo the message back to the client
    ws.send(`Server received: ${data}`);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client has disconnected.');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');