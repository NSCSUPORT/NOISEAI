const express = require('express');
const bodyParser = require('body-parser');
const comandos = require('./index.js');  // Importa os comandos de index.js

// Inicializa o app Express
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para processar o comando
app.post('/processar-comando', (req, res) => {
    const { message } = req.body; // Mensagem enviada pelo front-end

    if (!message) {
        return res.status(400).json({ response: "Mensagem não fornecida." });
    }

    console.log("Mensagem recebida: ", message);  // Log para verificar a mensagem

    const resposta = processarMensagem(message); // Processa a mensagem

    console.log("Resposta: ", resposta);  // Log para verificar a resposta

    res.json({ response: resposta }); // Retorna a resposta para o front-end
});

// Função para processar a mensagem
function processarMensagem(msg) {
    // Verifica se algum comando está contido na mensagem
    for (const [comando, descricao] of Object.entries(comandos)) {
        if (msg.trim().toLowerCase().includes(comando.toLowerCase())) {
            return descricao;  // Retorna a descrição do comando
        }
    }
    return "Comando não encontrado. Digite !AJUDA para ver a lista de comandos disponíveis.";
}

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
