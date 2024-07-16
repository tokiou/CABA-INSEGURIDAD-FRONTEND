const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = 3000;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// WebSocket
wss.on('connection', function(ws) {
    console.log('Conexión WebSocket establecida');

    ws.on('message', function(data) {
        // Aquí puedes procesar los datos recibidos del cliente
        console.log('Datos recibidos:', data);

        // Por ejemplo, puedes enviar datos de vuelta al cliente
        ws.send('Datos recibidos por el servidor');
    });

    ws.on('close', function() {
        console.log('Conexión WebSocket cerrada');
    });
});

server.listen(PORT, function() {
    console.log(`Servidor HTTP y WebSocket escuchando en el puerto ${PORT}`);
});