const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathname = parseUrl.pathname;
    const query = parseUrl.query;
    
    if (req.method === 'POST' && req.url === '/json') {
        let body = '';
        // Recibir datos de la solicitud
        req.on('data', chunks => {
            body += chunks;
        });

        // Procesar esos datos 
        req.on('end', () => {
            try {
                const jsonData = JSON.parse(body);
                console.log(jsonData);
                res.write('El archivo fue procesado\n');
                res.end(JSON.stringify(jsonData));
            } catch (error) {
                console.log(error);
                res.end(`${JSON.stringify(error)}`);
            }
        });
    } else if (pathname === '/saludo') {
        const nombre = query.nombre;
        const edad = query.edad;
        res.write(` Hola ${nombre} tu edad es: ${edad}\n`);
        res.end(' mensaje desde saludo');
    }
});

server.listen(3000, () => console.log('EJECUTANDO SERVIDOR'));