// setep2.js

const WebSocket = require('ws');
const { getRespostaPersonalizada } = require('./processMessages');

// Função para processar a mensagem recebida (pode ser adaptada para capturar mensagens do index.html)
function processMessage(msg) {
    console.log("Processando mensagem no setep2:", msg);
    // Aqui você pode incluir qualquer lógica adicional de pré-processamento
    // Em seguida, chama a função getRespostaPersonalizada para obter a resposta
    return getRespostaPersonalizada(msg);
}

// Cria um servidor WebSocket para o kernel setep2 na porta 9091
const kernelWS2 = new WebSocket.Server({ port: 9091 });

console.log("Kernel setep2 iniciado. Aguardando conexões...");

kernelWS2.on('connection', (socket) => {
    console.log("Novo cliente conectado ao kernel setep2.");

    // Envia mensagem de boas-vindas para o cliente conectado
    socket.send(JSON.stringify({ response: "Conectado ao Kernel setep2: pronto para processar mensagens." }));

    // Quando uma mensagem é recebida do cliente:
    socket.on('message', (message) => {
        console.log("Mensagem recebida em setep2:", message);
        
        // Processa a mensagem utilizando a função processMessage que integra getRespostaPersonalizada
        const resposta = processMessage(message);
        
        // Envia a resposta de volta para o cliente
        socket.send(JSON.stringify({ response: resposta }));
    });
});
