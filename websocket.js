
//Create Socket.io object with http server
var http = require('http');
http.createServer(function(req, res) {});
var io = require('socket.io')(http);

//Attach a 'connection' event handler to the server
io.on('connection', function (socket) {

    'use strict';

    console.log('a user connected');

    //Emits an event along with a message
    socket.emit('connected', 'Welcome');

    //Start watching Sensors connected to Galileo board
    startSensorWatch(socket);

    //Attach a 'disconnect' event handler to the socket
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
