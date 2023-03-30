const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('Hola mundo :D');
});

app.listen(port, async () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});