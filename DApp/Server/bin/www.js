const url = require('url');
const http = require('http');
const server = http.createServer();
const WebSocket = require('ws');

const { app } = require('../app');

const port = 3080;

// Mount sockets
const wsChat = new WebSocket.Server({ noServer: true });
const ws1 = new WebSocket.Server({ noServer: true });

// Mount http server
server.on('request', app);

ws1.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send("Message received");
    });
    ws.send('something');
});

wsChat.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        wsChat.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN
                && client !== ws
            ) {
                client.send(message)
            }
        });
    });
    ws.send('Chat');
});

server.on('upgrade', (request, socket, head) => {
    const route = url.parse(request.url).pathname;
    // console.log('ROUTE', route);

    if(route === '/chat') {
        wsChat.handleUpgrade(request, socket, head, function done(ws) {
            wsChat.emit('connection', ws, request);
        });
    } else if(route === '/boon') {
        ws1.handleUpgrade(request, socket, head, (ws) => {
            ws1.emit('connection', ws, request);
        });
    } else {
        socket.destroy();
    }
});

app.set('port', port);
server.listen(port, 'localhost');
