import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3030');

function subscribeToPixel(cb, width, height) {
    socket.on('pixel', pixel => cb(null, pixel));
    socket.emit('subscribeToPixel', {maxX: width/4, maxY: height/4});
}

export {subscribeToPixel};