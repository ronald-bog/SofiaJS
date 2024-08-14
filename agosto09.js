//* http

const http = require('http');

// Crear Servidor

/* const server = http.createServer((request, response) => {
    //
    //response.writeHead(201, )
    console.log(request.url);
    console.log('Te estoy respondiendo desde Node JS');
    response.write('Te estoy respondiendo desde Node JS peticion 2');
    response.end();
});

server.listen(3000, () => {
    console.log('Servidor esta listo');
}); */

//* Manejo de rutas

const server = http.createServer((request, response) => {

    if (request.url === '/pepito') {
        response.write('Estas en la sección de pepito');
    } else if (request.url === '/users') {
        response.write('Quieres listar Usuarios');
    } else if (request.url === '/parametros') {
        response.write('Estas accediendo a los parametros');
    } else if (request.url === '/') {
        response.write('Estas en la raiz');
    } else {
        response.write('No hay enpoint conocido');
    }

    response.end();
});

server.listen(3000, () => {
    console.log('Servidor esta listo');
});
