const connection = require('./sept5_conn');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url);
    const pathname = parseUrl.pathname;

    if (pathname === '/prueba') {
        console.log('Funcionando');
        res.end('Funcionando');
    }
});

server.listen(3000, () => {
    console.log('Servidor esta escuchando en puerto 3000');
});