const http = require('http');

http.createServer((req, resp) => {

    resp.writeHead(200, { 'content-type': 'application/json' })

    let salida = {
        nombre: 'Test Node JS'
    }

    resp.write(JSON.stringify(salida));
    resp.end();



}).listen(8080);

console.log('escuchando el puerto 8080');