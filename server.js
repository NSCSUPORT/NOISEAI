const express = require('express');
const bodyParser = require('body-parser');

// Inicializa o app Express
const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições como JSON
app.use(bodyParser.json());

// Comandos do bot
const comandos = {
    '!HORA': "⏰ A hora atual é: " + new Date().toLocaleTimeString(),
    '!AJUDA': "Comandos disponíveis: !HORA, !LUCAS, !COMO, !FUNCAO, !ID, !AJUDA",
    '!LUCAS': "Lucas Januário do Nascimento é o fundador do HoloFi e da tecnologia HOLLOW ETHER, trabalhando com inovação em ativos digitais e blockchain!",
    '!COMO': "Eu uso inteligência artificial para entender e responder às suas perguntas. Sou alimentado por dados e posso realizar diversas funções!",
    '!ID': "Não tenho idade, pois sou um assistente virtual! Estou sempre pronto para te ajudar.",
    '!FUNCAO': "Minha função é ajudar você com informações, responder dúvidas, realizar comandos e fornecer suporte!",
    
    // Adicionando os comandos de index.js
    'o que você faz': "Eu sou um assistente virtual, posso ajudar com diversas tarefas como responder perguntas, analisar dados e mais!",
    'quem é lucas januário': "Lucas Januário do Nascimento é o fundador do HoloFi e da tecnologia HOLLOW ETHER, trabalhando com inovação em ativos digitais e blockchain!",
    'como você funciona': "Eu uso inteligência artificial para entender e responder às suas perguntas. Sou alimentado por dados e posso realizar diversas funções!",
    'qual é a sua idade': "Não tenho idade, pois sou um assistente virtual! Estou sempre pronto para te ajudar.",
    'qual é a sua função': "Minha função é ajudar você com informações, responder dúvidas, realizar comandos e fornecer suporte!"
};

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
        if (msg.trim().toUpperCase().includes(comando.toUpperCase())) {
            return responderComando(comando);
        }
    }
    return "Comando não encontrado. Digite !AJUDA para ver a lista de comandos disponíveis.";
}

// Função para responder ao comando
function responderComando(comando) {
    return comandos[comando] || "Comando desconhecido.";
}

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
