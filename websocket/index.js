const io = require('socket.io')();

function toPixel(x, y) {
    return {
        x: x,
        y: y,
        color: {r: 255, g: 165, b: 0, a: 1,}
    };
}

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });

    client.on('subscribeToPixel', (pixel) => {
        console.log('client is subscribing to pixel with ', pixel);

        const {maxX, maxY} = pixel;

        for (let x = 0; x < maxX; x++) {
            for (let y = 0; y < maxY; y++) {

                console.log(x + ' ' + y);

                client.emit('pixel', toPixel(x, y));
            }
        }

    });

});

const port = 3030;
io.listen(port);
console.log('listening on port ', port);
