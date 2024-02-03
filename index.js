const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Holam nueva ruta');
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000,
  });
})

app.listen(port, () => {
  console.log('Está corriendo en el puerto', port);
})
