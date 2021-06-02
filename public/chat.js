'use strict'

const socket = io();

let message = document.querySelector('#message');
let username = document.querySelector('#username');
let btn = document.querySelector('#send');
let output = document.querySelector('#output');
let actions = document.querySelector('#actions');





btn.addEventListener('click', function (){
    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    } );
});

message.addEventListener( 'keypress', () => {
    socket.emit( 'chat:typing', username.value );
});

socket.on( 'chat:message', (data) => {
    actions.innerHTML = '';
    output.innerHTML += `<p>
    <strong>${ data.username }</strong>: ${ data.message } 
    </p>`
    message.value = '';
});

socket.on( 'chat:typing', (data) => {
    actions.innerHTML = `<p><em>${data} is typing</em></p>`
})