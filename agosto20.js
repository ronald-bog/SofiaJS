const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 3000;
const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathname = parseUrl.pathname;
    const param = pathname.split('/');

    if (req.url === '/prueba') {
        console.log(req.url);
        res.write(req.url);
        res.end('\nPROCESADO');
    }
    else if (req.url === '/prueba2') {
        const url1 = 'https://user:pass@dominio.com:8080/acceso?nombre=valor&nombre2=valor2#seccion';
        const url2 = '/prueba2/101';
        const dividido = url2.split('/');
        const parseUrl = url.parse(url2, true);
        console.log(dividido);
        res.end('\nPROCESADO');
    }
    else if (pathname === '/prueba3') {
        console.log(parseUrl);
        res.end('\nPROCESADO');
    }
    else if (`/${param[1]}` === '/prueba4') {
        const objDatos = JSON.parse(fs.readFileSync("./bodyCliente.json", "utf8"));
        let idEntero = parseInt(param[2]);
        const unCliente = objDatos.find(elemento => { 5678 === 5678; });
        console.log(unCliente);
    }
    // '/prueba2/101',

    else (
        res.end(req.url)
    );
});

server.listen(port, () => console.log(`SERVIDOR EJECUTADO EN PUERTO ${port}`));