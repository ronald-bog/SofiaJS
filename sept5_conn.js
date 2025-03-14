const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'data_flask'
});

connection.connect(err => {
    if (err) {
        console.log('Error en conexion a la base de datos', err.stack);
        return;
    }
    console.log('Conexion exitosa a la base de datos');
});

module.exports = connection;