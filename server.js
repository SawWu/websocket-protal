const Koa = require('koa');

const app = new Koa();

const server = require('http').createServer(app.callback());

const ip = '127.0.0.1';

const host = '4444'

const io = require('socket.io')(server);

io.on('connection', () => {

});

server.listen(host, () => {
  console.log(`server is run http://${ip}:${host}`)
});
