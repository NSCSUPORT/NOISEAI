// kernel.js

const WebSocket = require('ws');
const { getRespostaPersonalizada } = require('./processMessages');

// Cria um servidor WebSocket na porta 9090 (pode ser alterada conforme necessário)
const kernelWS = new WebSocket.Server({ port: 9090 });

console.log("Kernel iniciado. Aguardando conexões...");

kernelWS.on('connection', (socket) => {
    console.log("Novo cliente conectado ao kernel.");

    // Quando uma mensagem é recebida do cliente:
    socket.on('message', (message) => {
        console.log("Mensagem recebida:", message);
        
        // Usa a função getRespostaPersonalizada para processar a mensagem
        const resposta = getRespostaPersonalizada(message);

        // Envia a resposta de volta para o cliente
        socket.send(JSON.stringify({ response: resposta }));
    });

    // Envia uma mensagem de boas-vindas para o cliente conectado
    socket.send(JSON.stringify({ response: "Conectado ao Kernel: pronto para processar mensagens." }));
});
