const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware para permitir solicitações CORS (se necessário)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Altere '*' para permitir somente origens específicas
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Rota para carregar a página de forma segura usando HTTPS
app.get('/load-page', async (req, res) => {
  try {
    // Use Axios para buscar o conteúdo da página com HTTPS
    const response = await axios.get('https://admin.tabletcloud.com.br/login.aspx?ReturnUrl=/newcloud/uwg');

    // Envie o conteúdo da página como resposta
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao carregar a página');
  }
});

// Rota para servir a página 'pagina.html' usando um iframe
app.get('/embed', (req, res) => {
  res.sendFile(__dirname + '/public/pagina.html'); // Especifique o caminho correto para a página 'pagina.html'
});

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Corrigi o caminho para o arquivo index.html
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
