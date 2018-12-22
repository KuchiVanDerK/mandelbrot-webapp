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


    client.on('subscribeToClient', async () => {

        console.log('subscribeToClient');

        const c64 = {name: 'C 64', cores: 4, timestamp: new Date().toISOString()};
        await Promise.all([client.emit('client', c64), timeout(8000)]);

        const casio = {name: 'Casio FX-3650PII', cores: 1, timestamp: new Date().toISOString()};
        await Promise.all([client.emit('client', casio), timeout(6000)]);

        const summit = {name: 'IBM Summit', cores: 2397824, timestamp: new Date().toISOString()};
        await Promise.all([client.emit('client', summit), timeout(3000)]);

    });


    client.on('subscribeToPixel', async (pixel) => {
        console.log('client is subscribing to pixel with ', pixel);

        const {maxX, maxY} = pixel;

        for (let x = 0; x < maxX; x++) {
            for (let y = 0; y < maxY; y++) {
                const coloredPixel = toPixel(x, y);
                await Promise.all([client.emit('pixel', coloredPixel), timeout(10)]);
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
