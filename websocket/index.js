const io = require('socket.io')();

function toPixel(x, y) {

    const g = Math.floor(Math.random() * 255);

    return {
        x: x,
        y: y,
        color: {r: 255, g, b: 0, a: 1,}
    };
}

io.on('connection', (client) => {

    client.on('subscribeToPixel', async (pixel) => {
        console.log('client is subscribing to pixel with ', pixel);

        const {maxX, maxY} = pixel;

        for (let x = 0; x < maxX; x++) {
            for (let y = 0; y < maxY; y++) {
                const coloredPixel = toPixel(x, y);
                await Promise.all([client.emit('pixel', coloredPixel), timeout(2)]);
            }
        }

    });

});

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const port = 3030;
io.listen(port);
console.log('listening on port ', port);
