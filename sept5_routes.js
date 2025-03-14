const connection = require('./sept5_conn');
const http = require('http');
const url = require('url');
//const pool = require('./sept5_conn');

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url);
    const pathname = parseUrl.pathname;
    const param = pathname.split('/');

    if (pathname === '/prueba') {
        console.log('Funcionando');
        res.end('Funcionando');
    }

    else if (pathname === '/testDB') {
        connection.query('SELECT 1', () => {
        });
        connection.end();
        res.end('Bases de datos probada');
    }

    else if (pathname === '/usuarios' && req.method === 'GET') {
        const query = 'SELECT * FROM usuarios';
        connection.query(query, (err, result) => {
            if (err) {
                res.end('Hubo un error em la consulta');
                return;
            }
            res.end(JSON.stringify(result));
        });
    }

    else if (pathname === '/usuario' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const { nombre, correo } = JSON.parse(body);
            //const query = '';
            connection.execute('INSERT INTO usuarios (nombre, correo) VALUES ( ?, ?)', [nombre, correo], (err, result) => {
                if (err) {
                    res.end('Se presento un error');
                    return;
                }
                res.end();
            });
        });
    }
    //Actualizacion
    else if (`/${param[1]}` === '/usuario' && req.method === 'PUT') {
        const id = parseInt(param[2]);
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const { nombre, correo } = JSON.parse(body);
            const query = 'UPDATE usuarios SET nombre = ?,  correo = ? WHERE id = ?';
            connection.execute(query, [nombre, correo, id], (err) => {
                if (err) {
                    res.end('Se presento Error');
                    return;
                }
                res.end('La base de datos fue actualizada');
                connection.end();
            });
        });
    }
    else if (`/${param[1]}` === '/usuario' && req.method === 'DELETE') {
        const id = parseInt(param[2]);
        const consulta = 'DELETE FROM usuarios WHERE id = ?';
        connection.execute(consulta, [id], err => {
            if (err) {
                res.end('ERROR');
                return;
            }
            res.end('El usuario fue eliminado');
            connection.end();
        });
    }
});

server.listen(3000, () => {
    console.log('Servidor esta escuchando en puerto 3000');
});
//