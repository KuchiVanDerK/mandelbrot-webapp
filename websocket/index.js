const io = require('socket.io')();

function toPixel(x, y) {
    return {
        x: x,
        y: y,
        color: {r: 255, g: 165, b: 0, a: 1,}
    };
}

io.on('connection', (client) => {

    client.on('subscribeToPixel', (pixel) => {
        console.log('client is subscribing to pixel with ', pixel);

        const {maxX, maxY} = pixel;

        for (let x = 0; x < maxX; x++) {
            for (let y = 0; y < maxY; y++) {
                client.emit('pixel', toPixel(x, y));
            }
        }

    });

});

const port = 3030;
io.listen(port);
console.log('listening on port ', port);
