const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));


app.get('/products', (req, res) => {
    res.send('Obteniendo Productos');
});

app.post('/products', (req, res) => {
    res.send('Creando productos');

});
app.put('/products', (req, res) => {
    res.send('Actualizando productos');

});
app.delete('/products', (req, res) => {
    res.send('Eliminando Productos');

});

app.get('/products/:id', (req, res) => {
    res.send('Obteniendo un producto');
});



app.listen('3000');
console.log(`Server at port ${3000}`);