const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Corrigi o caminho para o arquivo index.html
});

// Rota para incorporar a página 'pagina.html' usando um iframe
app.get('/embed', (req, res) => {
    res.sendFile(__dirname + '/public/pagina.html'); // Especifique o caminho correto para a página 'pagina.html'
});

app.listen(port, () =>{
    console.log('Servidor ok');
});
