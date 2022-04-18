const http = require('http');
const WebSocket = require('ws');
const express = require('express');

const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {{
    ws.on('message', (data) => {
        wss.clients.forEach( (client) => {
            if(client !== ws && client.readyState == WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
}})

server.listen(6969, () => {
    console.log('Server is running on port 6969')
})