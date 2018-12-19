import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3030');

function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

function subscribeToPixel(cb) {
    socket.on('pixel', pixel => cb(null, pixel));
    socket.emit('subscribeToPixel', {maxX: 50, maxY: 50});
}

export {subscribeToTimer, subscribeToPixel};