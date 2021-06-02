'use strict'

const path = require('path')
const express = require('express');
const app = express();
const  socketIO = require('socket.io');

app.set( 'port', process.env.PORT || 3000);

app.use( express.static( path.join( __dirname, 'public' ) ) );

const server = app.listen( app.get('port'), () =>{
    console.log( `Server on port ${app.get( 'port' )}` )
});

const io = socketIO(server);

io.on( 'connection', ( socket ) => {
    socket.on( 'chat:message', (data) =>{
        io.sockets.emit( 'chat:message', data);
    });

    socket.on( 'chat:typing', (data) => {
        socket.broadcast.emit( 'chat:typing', data);
    })
});


