import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3030');

function subscribeToPixel(cb, width, height) {
    console.log(cb);

    socket.on('pixel', pixel => cb(null, pixel));
    socket.emit('subscribeToPixel', {maxX: width, maxY: height});
}

export {subscribeToPixel};