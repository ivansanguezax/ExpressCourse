// // Importa el módulo 'express' y lo asigna a la variable 'express'
// const express = require('express');

// // Crea una instancia de la aplicación de Express y la asigna a la variable 'app'
// const app = express();

// // Define una ruta GET para el endpoint raíz '/'
// app.get('/', (req, res) =>{
//     // Envía el archivo 'index.html' cuando se accede a la ruta raíz
//     // res.sendFile('./static/index.html', {
//     //     root: __dirname
//     // });

//     res.send('Hello World');
// })

// //Routing

// app.get('/about', (req, res) =>{
//     res.send('About');
// })

// //Routing
// app.get('/weather', (req, res) =>{

//     res.send('the current weather is 50 degrees');
// })

// app.use((req, res) =>{
//     res.status(404).send('No encontramos la página');
// })

// // Escucha las solicitudes en el puerto 3000
// app.listen('2300');

// // Imprime un mensaje en la consola indicando que el servidor está escuchando en el puerto 3000
// console.log(`Server at port ${2300}`);

// ------------------------------------------

const express = require("express");
const { type } = require("os");
const app = express();

// app.get('/products', (req, res) =>{
//     //query database
//     //validate data
//     //process data

//     res.send('Lista de productos');
// })

// app.post('/products', (req, res) =>{
//     res.send('Creando productos');
// })

// app.put('/products', (req, res) =>{
//     res.send('Actualizando productos');
// })

// app.delete('/products', (req, res) =>{
//     res.send('Eliminando productos');
// })

// app.patch('/products', (req, res) =>{
//     res.send('Actualizando una parte productos');
// })

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./javascript.png", {
//     root: __dirname,
//   });
// });

// app.get("/user", (req, res) => {
//   res.json({
//     name: "Ivan",
//     lastName: "Sangueza",
//     age: 25,
//     points: [1, 2, 3, 4, 5],
//     address: {
//       street: "Av. Siempre viva",
//       city: "Springfield",
//     },
//   });
// });

// app.get("/isAlive", (req, res) => {
//     res.sendStatus(204);
//   });

// // Configura Express para manejar solicitudes con cuerpo de texto
// app.use(express.text());

// // Configura Express para analizar solicitudes con formato JSON
// app.use(express.json());

// // Configura Express para analizar solicitudes con formato de datos codificados en URL
// app.use(express.urlencoded({extended: false}));

// // Define una ruta POST en '/user'
// app.post('/user',(req, res) =>{

//     // Imprime el cuerpo de la solicitud en la consola
//     console.log(req.body);

//     // Envía una respuesta al cliente indicando que se ha creado un nuevo usuario
//     res.send('nuevo usuario creado');
// });



// Ruta que responde a cualquier tipo de solicitud (GET, POST, etc.) en '/info'
app.all('/info', (req, res) =>{
    // Envía un mensaje de respuesta que dice 'Información'
    res.send('Información');
})


// Ruta que responde a solicitudes GET en '/search'
app.get('/search', (req, res) =>{ 
    // Imprime el objeto 'query' que contiene los parámetros de la URL
    console.log(req.query);

    // Comprueba si el parámetro 'q' en el objeto 'query' es igual a 'javascript book'
    if(req.query.q === 'javascript book'){
        // Si es igual, envía un mensaje indicando una lista de libros
        res.send('lista de libros');
    } else {
        // Si no es igual, envía un mensaje indicando que no se encontraron resultados
        res.send('No se encontraron resultados');
    }
});



// Ruta que responde a solicitudes GET en '/hello/:username'
app.get('/hello/:username', (req, res) =>{
    

    // Envía una respuesta al cliente con un saludo personalizado
    res.send(`Hello ${req.params.username.toUpperCase()}`);
});

// Ruta que responde a solicitudes GET en '/add/:x/:y'
app.get('/add/:x/:y', (req, res) =>{
    // Extrae los valores de 'x' e 'y' de los parámetros de la URL
    const {x, y} = req.params

    // Calcula la suma y envía una respuesta al cliente
    res.send(`La suma es ${parseInt(x) + parseInt(y)}`);
});

// Ruta que responde a solicitudes GET en '/users/:username/photo'
app.get('/users/:username/photo', (req, res) =>{
    // Imprime el nombre de usuario en la consola
    console.log(req.params.username)

    // Si el nombre de usuario es 'ivan', envía el archivo 'javascript.png'
    if (req.params.username === 'ivan'){
        return res.sendFile('./javascript.png', {root: __dirname});
    }

    // Si el nombre de usuario no es 'ivan', envía un mensaje indicando que el usuario no existe
    res.send('No existe el usuario');
});

// Ruta que responde a solicitudes GET en '/nombre/:nombre/age/:age'
app.get('/nombre/:nombre/age/:age', (req, res) =>{
    // Extrae el nombre y la edad de los parámetros de la URL
    const {nombre, age} = req.params;

    // Envía una respuesta al cliente con un mensaje personalizado
    res.send(`Hola ${nombre}, tienes ${age} años`);
});


app.listen("3000");
console.log(`Server at port ${3000}`);
