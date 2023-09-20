// Importa el módulo 'express' y lo asigna a la variable 'express'
const express = require('express');

// Crea una instancia de la aplicación de Express y la asigna a la variable 'app'
const app = express();

// Define una ruta GET para el endpoint raíz '/'
app.get('/', (req, res) =>{
    // Envía el archivo 'index.html' cuando se accede a la ruta raíz
    // res.sendFile('./static/index.html', {
    //     root: __dirname
    // });

    res.send('Hello World');
})

//Routing
app.get('/about', (req, res) =>{
    res.send('About');
})

//Routing
app.get('/weather', (req, res) =>{

    res.send('the current weather is 50 degrees');
})

app.use((req, res) =>{
    res.status(404).send('No encontramos la página');
})

// Escucha las solicitudes en el puerto 3000
app.listen('2300');

// Imprime un mensaje en la consola indicando que el servidor está escuchando en el puerto 3000
console.log(`Server at port ${2300}`);
