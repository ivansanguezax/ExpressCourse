// Importa el módulo 'express' y lo asigna a la variable 'express'
const express = require('express');

// Crea una instancia de la aplicación de Express y la asigna a la variable 'app'
const app = express();

// Define una ruta GET para el endpoint raíz '/'
app.get('/', (req, res) =>{
    // Envía el archivo 'index.html' cuando se accede a la ruta raíz
    res.sendFile('./static/index.html', {
        root: __dirname
    });
})

// Escucha las solicitudes en el puerto 3000
app.listen('3000');

// Imprime un mensaje en la consola indicando que el servidor está escuchando en el puerto 3000
console.log(`Server at port ${3000}`);
