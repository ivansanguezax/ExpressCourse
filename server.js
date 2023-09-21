// const express = require('express');
// const app = express();
// const morgan = require('morgan');

// app.use(morgan('dev'));
// app.use(express.json());


// let products = [
//     {
//         id: 1,
//         name: 'laptop',
//         price: 2000
//     }
// ];


// app.get('/products', (req, res) => {
//     res.json(products);
// });

// app.post('/products', (req, res) => {
//     const newProduct ={...req.body, id: products.length + 1}
//     products.push(newProduct);
//     res.send(newProduct);
// });

// app.put('/products/:id', (req, res) => {

//     const newData = req.body;

//     const productFound = products.find((product) => {
//         return product.id === parseInt(req.params.id);
//     });

//     if(!productFound) return res.status(404).json({error: 'Un producto no encontrado'});

//     products = products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p);

//     res.json({
//         message: 'Producto actualizado'
//     });
//     });


// app.delete('/products/:id', (req, res) => {
//     const productFound = products.find((product) => {
//         return product.id === parseInt(req.params.id);
//     });

//     if(!productFound) return res.status(404).json({error: 'Un producto no encontrado'});

//     products = products.filter(p => p.id !== parseInt(req.params.id));

//     res.sendStatus(204);
// });

// app.get('/products/:id', (req, res) => {
//     const productFound = products.find((product) => {
//         return product.id === parseInt(req.params.id);
//     });

//     if(!productFound) res.status(404).json({error: 'Producto no encontrado'});
//     res.json(productFound);
// });



// app.listen('3000');
// console.log(`Server at port ${3000}`);