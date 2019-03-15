const server = require('./api/server');

server.listen(3333, () => {
    console.log('server running on port 3333');
})