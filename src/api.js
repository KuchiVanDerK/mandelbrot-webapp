import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000', {path: '/results'});


function subscribeToClient(cb) {
    socket.on('client', client => cb(null, client));
    socket.emit('subscribeToClient');
}

function subscribeToPixel(cb, width, height) {
    socket.on('pixel', pixel => cb(null, pixel));
    socket.emit('subscribeToPixel', {maxX: width, maxY: height});
}

export {subscribeToClient, subscribeToPixel};