const fs = require('fs');

// Função para carregar e interpretar o arquivo de respostas
function carregarRespostas(caminhoArquivo) {
    const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
    const linhas = conteudo.split('\n');
    const respostas = [];

    linhas.forEach(linha => {

        const match = linha.match(/if \(msg\.includes\('(.+?)'\)\) return "(.+?)";/);
        if (match) {
            respostas.push({ chave: match[1], resposta: match[2] });
        }
    });

    return respostas;
}

// Função para processar uma mensagem e encontrar a resposta
function processarMensagem(mensagem, respostas) {
    for (let item of respostas) {
        if (mensagem.includes(item.chave)) {
            return item.resposta;
        }
    }
    return "Desculpe, não entendi. Pode reformular?";
}

// Exemplo de uso
const caminhoArquivo = 'respostas.txt'; // Substitua pelo caminho do seu arquivo
const respostas = carregarRespostas(caminhoArquivo);

// Testando com um exemplo de entrada
const mensagemUsuario = "Oi, tudo bem?".toLowerCase();
const resposta = processarMensagem(mensagemUsuario, respostas);
console.log("Usuário: " + mensagemUsuario);
console.log("Chatbot: " + resposta);
