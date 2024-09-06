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
    else if (pathname === '/testDB') {
        connection.query('SELECT 1', (err, result => {

        }));
        res.end('Bases de datos probada');
    }
    else if (pathname === '/usuarios' && req.method === 'GET') {
        connection.query('SELECT * FROM usuarios', (err, result) => {
            if (err) {
                res.end('Hubo un error em la consulta');
                return;
            }
            result.push({ id: 10 });
            console.log(result);
            res.end(result);
        });
    }
    else if (pathname === '/usuario' && req.method === 'POST') {
        const body = '';
        req.on('data', chunk => {
            //body = body + chunk
            body += chunk;
        });
        req.on('end', () => { });

    }

});

server.listen(3000, () => {
    console.log('Servidor esta escuchando en puerto 3000');
});
//