const express = require('express');
const bodyParser = require('body-parser');

// Inicializa o app Express
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para processar o comando
app.post('/processar-comando', (req, res) => {
    const { message } = req.body; // Mensagem enviada pelo front-end

    const bot = new Bot(comandos); // Instancia o Bot com os comandos
    const resposta = bot.processarMensagem(message); // Processa a mensagem

    res.json({ response: resposta }); // Retorna a resposta para o front-end
});

// Comandos do bot
const comandos = {
    '!HORA': "⏰ A hora atual é: " + new Date().toLocaleTimeString(),
    '!AJUDA': "Comandos disponíveis: !HORA, !LUCAS, !COMO, !FUNCAO, !ID, !AJUDA",
    '!LUCAS': "Lucas Januário do Nascimento é o fundador do HoloFi e da tecnologia HOLLOW ETHER, trabalhando com inovação em ativos digitais e blockchain!",
    '!COMO': "Eu uso inteligência artificial para entender e responder às suas perguntas. Sou alimentado por dados e posso realizar diversas funções!",
    '!ID': "Não tenho idade, pois sou um assistente virtual! Estou sempre pronto para te ajudar.",
    '!FUNCAO': "Minha função é ajudar você com informações, responder dúvidas, realizar comandos e fornecer suporte!"
};

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

    responderComando(comando) {
        return this.comandos[comando] || "Comando desconhecido.";
    }
}

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
