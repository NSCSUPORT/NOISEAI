const fs = require('fs');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// Função para ler o arquivo de mensagens
function lerMensagens() {
  return fs.readFileSync('mensagens.txt', 'utf8').split('\n').map(msg => msg.trim());
}

// Função para criar o worker e processar as mensagens
function processarMensagens() {
  const mensagens = lerMensagens();
  
  // Cria um novo worker thread para processar as mensagens
  const worker = new Worker(__filename, {
    workerData: mensagens
  });

  // Lidar com o resultado do worker
  worker.on('message', result => {
    console.log('Resultados processados:');
    console.log(result);
  });

  // Lidar com erros
  worker.on('error', (error) => {
    console.error("Erro no Worker: ", error);
  });

  // Lidar com a finalização do worker
  worker.on('exit', (exitCode) => {
    if (exitCode !== 0) {
      console.error(`Worker finalizou com erro, código de saída: ${exitCode}`);
    }
  });
}

// Processo do Worker
if (!isMainThread) {
  // Processando mensagens no Worker
  const mensagens = workerData;
  const respostas = [];

  mensagens.forEach(msg => {
    msg = msg.toLowerCase();
    if (msg.includes('como posso estudar melhor')) {
      respostas.push("Estudar melhor envolve técnicas de foco e organização. Me fale mais sobre seu método de estudo, e eu te dou algumas dicas!");
    }
    else if (msg.includes('quais são os erros mais comuns que devo evitar')) {
      respostas.push("Evitar erros é essencial! Me fale mais sobre o que você está fazendo, e eu te mostro os erros mais comuns para evitar.");
    }
    else if (msg.includes('como posso aplicar isso de maneira prática')) {
      respostas.push("A melhor forma de aplicar depende do seu objetivo. Me fale mais sobre o que você quer aplicar, e eu te dou um plano prático!");
    }
    // Adicione mais respostas conforme necessário...
    else {
      respostas.push("Desculpe, não entendi a sua pergunta.");
    }
  });

  // Envia a resposta de volta para o processo principal
  parentPort.postMessage(respostas);
}

// Se for o processo principal, inicia o processamento
if (isMainThread) {
  processarMensagens();
}
