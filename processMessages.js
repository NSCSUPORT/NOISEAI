const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// Estrutura para o contrato de investimentos
class InvestmentContract {
  constructor() {
    this.investors = [];
    this.authorizedInvestors = [];
    this.balances = [];
    this.investedAmount = [];
    this.investorCount = 0;
  }

  // Função para inicializar o contrato com dados de investidores
  initializeContract() {
    const db = new sqlite3.Database('investors.db');

    db.serialize(() => {
      db.run("CREATE TABLE IF NOT EXISTS Investors (Name TEXT, Authorized INT, Balance LONG)");

      // Inserir dados iniciais (se necessário)
      db.run("INSERT INTO Investors (Name, Authorized, Balance) VALUES ('Alice', 1, 1000), ('Bob', 0, 500), ('Charlie', 1, 1500)");

      // Selecionar todos os investidores
      db.all("SELECT Name, Authorized, Balance FROM Investors", (err, rows) => {
        if (err) {
          console.error("Erro ao buscar investidores:", err);
          return;
        }

        // Preencher dados do contrato
        rows.forEach(row => {
          this.investors.push(row.Name);
          this.authorizedInvestors.push(row.Authorized);
          this.balances.push(row.Balance);
          this.investedAmount.push(0);
          this.investorCount++;
        });

        db.close();
      });
    });
  }

  // Função para processar um investimento
  processInvestment(investor, amount) {
    const investorIndex = this.investors.indexOf(investor);

    // Verificar se o investidor está na lista
    if (investorIndex === -1) {
      console.log(`Investidor '${investor}' não encontrado no contrato`);
      return;
    }

    // Verificar se o investidor está autorizado
    if (!this.authorizedInvestors[investorIndex]) {
      console.log(`Investidor '${investor}' não está autorizado a investir`);
      return;
    }

    // Verificar se o saldo é suficiente
    if (amount > this.balances[investorIndex]) {
      console.log(`Saldo insuficiente para o investidor '${investor}'. Saldo atual: ${this.balances[investorIndex]}`);
      return;
    }

    // Atualizar saldos e valores investidos
    this.balances[investorIndex] -= amount;
    this.investedAmount[investorIndex] += amount;
    console.log(`Investimento de ${amount} realizado por '${investor}'`);
  }
}

// Função para ler mensagens e enviar ao worker para processamento
function processMessages() {
  const messages = fs.readFileSync('mensagens.txt', 'utf8').split('\n').map(msg => msg.trim());

  // Criar um novo worker thread para processar as mensagens
  const worker = new Worker(__filename, {
    workerData: messages
  });

  // Lidar com o resultado do worker
  worker.on('message', result => {
    console.log('Resultados processados:');
    console.log(result);
  });

  // Lidar com erros
  worker.on('error', (error) => {
    console.error("Erro no Worker:", error);
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
  const messages = workerData;
  const responses = [];

  messages.forEach(msg => {
    msg = msg.toLowerCase();
    if (msg.includes('como posso estudar melhor')) {
      responses.push("Estudar melhor envolve técnicas de foco e organização. Me fale mais sobre seu método de estudo, e eu te dou algumas dicas!");
    } else if (msg.includes('quais são os erros mais comuns que devo evitar')) {
      responses.push("Evitar erros é essencial! Me fale mais sobre o que você está fazendo, e eu te mostro os erros mais comuns para evitar.");
    } else if (msg.includes('como posso aplicar isso de maneira prática')) {
      responses.push("A melhor forma de aplicar depende do seu objetivo. Me fale mais sobre o que você quer aplicar, e eu te dou um plano prático!");
    } else {
      responses.push("Desculpe, não entendi a sua pergunta.");
    }
  });

  // Envia a resposta de volta para o processo principal
  parentPort.postMessage(responses);
}

// Se for o processo principal, inicia o processamento
if (isMainThread) {
  const contract = new InvestmentContract();
  contract.initializeContract();

  // Processando investimentos
  contract.processInvestment('Alice', 200);  // Investimento válido
  contract.processInvestment('Bob', 100);    // Investidor não autorizado
  contract.processInvestment('Charlie', 2000); // Saldo insuficiente

  // Processar mensagens
  processMessages();
}
