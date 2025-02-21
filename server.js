const express = require('express');
const bodyParser = require('body-parser');

// Importa os comandos do arquivo index.js
const comandos = require('./index.js');

// Inicializa o app Express
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições como JSON
app.use(bodyParser.json());

// Classe Bot para processar os comandos
class Bot {
    constructor(comandos) {
        this.comandos = comandos;
    }

    // Verifica a mensagem e responde
    processarMensagem(msg) {
        for (const [comando, descricao] of Object.entries(this.comandos)) {
            if (msg.includes(comando)) {
                return this.responderComando(comando);
            }
        }
        return "Comando não encontrado. Digite !AJUDA para ver a lista de comandos disponíveis.";
    }

    // Retorna a resposta associada ao comando
    responderComando(comando) {
        return this.comandos[comando] || "Comando desconhecido.";
    }
}

// Rota para processar o comando
app.post('/processar-comando', (req, res) => {
    const { message } = req.body; // Mensagem enviada pelo front-end

    if (!message) {
        return res.status(400).json({ response: "Mensagem não fornecida." });
    }

    const bot = new Bot(comandos); // Instancia o Bot com os comandos
    const resposta = bot.processarMensagem(message); // Processa a mensagem

    res.json({ response: resposta }); // Retorna a resposta para o front-end
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
