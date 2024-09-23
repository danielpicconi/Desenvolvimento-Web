const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota GET para a página principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota GET para a página sobre (about.html)
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Simulação de upload de arquivo com rota POST
app.post('/upload', (req, res) => {
    let fileData = '';
    req.on('data', chunk => {
        fileData += chunk.toString();
    });
    req.on('end', () => {
        res.status(200).send('Upload simulado com sucesso!');
    });
});

// Middleware para tratamento de 404 para qualquer rota inválida (GET e POST)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'error404.html'));
});

// Criar o servidor HTTP e integrar com o Express
const server = http.createServer((req, res) => {
    app(req, res); // Passa as requisições para o middleware do Express
});

// Iniciar o servidor na porta 3000
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
