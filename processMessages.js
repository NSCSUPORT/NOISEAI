const WebSocket = require('ws');


<script src="kernal.js"></script>
<script src="step2.js"></script>
// Classe DarkFi com Prosh Ish e Proof sspdarkfi
class DarkFiKernel {
    constructor() {
        this.processingPower = 1;
        this.socketServer = new WebSocket.Server({ port: 8080 });
        this.setupSocketServer();
    }

    // Proof sspdarkfi: aumenta o poder de processamento conforme os saldos
    applyProofOfStake() {
        let totalStake = contract.balances.reduce((a, b) => a + b, 0);
        this.processingPower = totalStake / 1000; // Exemplo: 1000 tokens = 1x poder
        console.log(`Proof sspdarkfi aplicado! Novo poder de processamento: ${this.processingPower}`);
        this.sendSocketMessage('proof-sspdarkfi', this.processingPower);
    }

    // Processamento de dados usando Prosh Ish
    processData(data) {
        console.log(`Processando ${data.length} bytes com poder ${this.processingPower}`);
        setTimeout(() => {
            console.log('Processamento concluído.');
            this.sendSocketMessage('processing-complete', { dataSize: data.length });
        }, 1000 / this.processingPower);
    }

    // Configura WebSocket
    setupSocketServer() {
        this.socketServer.on('connection', (socket) => {
            console.log('Novo cliente conectado');
            socket.on('message', (message) => {
                const data = JSON.parse(message);
                if (data.command === 'apply-sspdarkfi') {
                    this.applyProofOfStake();
                } else if (data.command === 'process-data') {
                    this.processData(data.payload);
                }
            });
            socket.send('Conectado ao DarkFi Kernel!');
        });
    }

    // Envio de mensagens via WebSocket
    sendSocketMessage(event, data) {
        this.socketServer.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ event, data }));
            }
        });
    }
}

// Inicializa o Kernel
const darkFiKernel = new DarkFiKernel();

// Chat do sistema
const comandos = {
    "!GUIA": "Comandos disponíveis: !SSPDARKFI - Aplicar Proof sspdarkfi, !SALDO - Ver saldo de investidores",
    "!SSPDARKFI": "Aplicando Proof sspdarkfi...",
};

function getRespostaPersonalizada(messageText) {
    if (messageText.includes("saldo de")) {
        let investidor = messageText.replace("saldo de", "").trim();
        let index = contract.investors.indexOf(investidor);
        if (index !== -1) {
            return `Saldo de ${investidor}: R$ ${contract.balances[index].toFixed(2)}`;
        } else {
            return `Investidor ${investidor} não encontrado.`;
        }
    }
    return null;
}

// Funções do chat
function iniciarChat() {
    document.getElementById('chat-box').innerHTML = '<div class="message received">👋 Olá! Use !GUIA para comandos.</div>';
}

function sendMessage() {
    let input = document.getElementById('chat-input');
    let messageText = input.value.trim();
    if (!messageText) return;

    appendMessage(messageText, 'sent');
    input.value = '';

    if (comandos[messageText]) {
        setTimeout(() => {
            appendMessage(comandos[messageText], 'received');
            if (messageText === "!SSPDARKFI") darkFiKernel.applyProofOfStake();
        }, 500);
    } else {
        let respostaPersonalizada = getRespostaPersonalizada(messageText);
        setTimeout(() => {
            appendMessage(respostaPersonalizada || "Comando não reconhecido.", 'received');
        }, 500);
    }
}

function appendMessage(text, type) {
    let chatBox = document.getElementById('chat-box');
    let message = document.createElement('div');
    message.classList.add('message', type);
    message.innerHTML = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarChat();
    document.getElementById('send-btn').addEventListener('click', sendMessage);
    document.getElementById('chat-input').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') sendMessage();
    });
});
// processMessages.js
function getRespostaPersonalizada(msg) {
    // Implemente aqui a lógica de resposta personalizada
    if (msg.includes("teste")) {
        return "Esta é uma resposta para o teste.";
    }
    return "Comando não reconhecido.";
}
module.exports = { getRespostaPersonalizada };


  function getRespostaPersonalizada(msg) {
    msg = msg.toLowerCase();
    if (msg.includes('oi')) return "Olá! Como posso ajudar você hoje?";
    if (msg.includes('dados')) return "Você quer analisar dados? Envie os dados ou escolha uma opção!";
    if (msg.includes('jogo')) return "Você gosta de jogos? Tenho algumas recomendações de jogos multiplayer. Deseja ver?";
    if (msg.includes('limpar dados')) return "Certo! Seus dados foram limpos e padronizados!";
    if (msg.includes('normalizar texto')) return "Texto formatado para minúsculas e acentos removidos!";
    if (msg.includes('validar email')) return "Verifiquei e sim, o email parece estar correto!";
    if (msg.includes('gerar hash')) return "Senha protegida com hash SHA-256!";
    if (msg.includes('analisar sentimento')) return "O sentimento do texto é positivo!";
    if (msg.includes('detectar anomalias')) return "Detectei padrões incomuns nos seus dados!";
    if (msg.includes('clima')) return "Digite sua cidade para que eu possa verificar a previsão do tempo!";
    if (msg.includes('horário')) return "O horário atual é: " + new Date().toLocaleTimeString();
    if (msg.includes('notícia')) return "Aqui estão as últimas notícias: [link para um feed de notícias]";
    if (msg.includes('oi')) return "Olá! Como posso ajudar você hoje?";
    if (msg.includes('dados')) return "Você quer analisar dados? Envie os dados ou escolha uma opção!";
    if (msg.includes('jogo')) return "Você gosta de jogos? Tenho algumas recomendações de jogos multiplayer. Deseja ver?";
    if (msg.includes('limpar dados')) return "Certo! Seus dados foram limpos e padronizados!";
    if (msg.includes('normalizar texto')) return "Texto formatado para minúsculas e acentos removidos!";
    if (msg.includes('validar email')) return "Verifiquei e sim, o email parece estar correto!";
    if (msg.includes('gerar hash')) return "Senha protegida com hash SHA-256!";
    if (msg.includes('analisar sentimento')) return "O sentimento do texto é positivo!";
    if (msg.includes('detectar anomalias')) return "Detectei padrões incomuns nos seus dados!";
    if (msg.includes('clima')) return "Digite sua cidade para que eu possa verificar a previsão do tempo!";
    if (msg.includes('horário')) return "O horário atual é: " + new Date().toLocaleTimeString();
    if (msg.includes('notícia')) return "Aqui estão as últimas notícias: [link para um feed de notícias]";
    if (msg.includes('moeda')) return "Digite a moeda que deseja converter e eu fornecerei a taxa de câmbio!";
      if (msg.includes('Capture the Flag')) return "Capture The Flag (CTF) é um tipo de competição de segurança cibernética onde os participantes precisam explorar vulnerabilidades e capturar ‘flags’ escondidas.";
if (msg.includes('Bug Bounty')) return "Os programas de Bug Bounty permitem que pesquisadores de segurança encontrem e reportem vulnerabilidades em sistemas em troca de recompensas financeiras.";
if (msg.includes('Exploração de Vulnerabilidades')) return "A exploração de vulnerabilidades é uma técnica usada para encontrar falhas de segurança em um sistema, geralmente com o objetivo de se infiltrar ou ganhar acesso não autorizado.";
if (msg.includes('SQL Injection')) return "SQL Injection é um dos ataques mais comuns, onde um atacante insere comandos SQL maliciosos em um campo de entrada para acessar dados sensíveis de um banco de dados.";
if (msg.includes('XSS')) return "Cross-Site Scripting (XSS) permite que um atacante injete scripts maliciosos em páginas web que serão executados no navegador de outros usuários.";
if (msg.includes('RCE')) return "Remote Code Execution (RCE) é uma vulnerabilidade que permite a execução de código malicioso remotamente, o que pode comprometer completamente um sistema.";
if (msg.includes('Hashing')) return "O hashing é um processo que converte dados de tamanho variável em uma string de comprimento fixo, utilizado principalmente para senhas e verificação de integridade de dados.";
if (msg.includes('Steganografia')) return "A steganografia é a arte de esconder informações dentro de outros tipos de arquivos, como imagens ou áudio, de forma que não seja perceptível ao olhar comum.";
if (msg.includes('Buffer Overflow')) return "Buffer Overflow ocorre quando mais dados são escritos em um buffer do que ele pode suportar, podendo sobrescrever dados importantes ou até executar código malicioso.";
if (msg.includes('Phishing')) return "Phishing é uma técnica de engenharia social em que o atacante se passa por uma entidade confiável para enganar a vítima e obter informações confidenciais.";
if (msg.includes('Vulnerabilidades Zero-Day')) return "Zero-Day é uma vulnerabilidade desconhecida pelo fabricante do software, o que significa que não há uma correção disponível no momento do ataque.";
if (msg.includes('Pentest')) return "Pentest (Penetration Testing) é uma prática de simulação de ataques cibernéticos para avaliar a segurança de um sistema e identificar falhas de segurança.";
if (msg.includes('MITM')) return "Man-in-the-Middle (MITM) é um ataque em que o atacante intercepta a comunicação entre duas partes e pode modificar ou capturar dados sem o conhecimento delas.";
if (msg.includes('Criptografia RSA')) return "RSA é um dos algoritmos de criptografia mais populares, usado para criptografar dados com base em números primos e chave pública/privada.";
if (msg.includes('Brute Force')) return "Ataques de força bruta envolvem a tentativa exaustiva de todas as combinações possíveis de senhas até encontrar a correta.";
if (msg.includes('CSRF')) return "Cross-Site Request Forgery (CSRF) é um ataque em que um usuário autenticado é enganado a realizar uma ação indesejada em um site, como transferir dinheiro.";
if (msg.includes('Trojans')) return "Trojans (ou Cavalos de Troia) são malwares que se disfarçam como programas legítimos, mas contêm código malicioso que pode comprometer um sistema.";
if (msg.includes('Backdoor')) return "Backdoor é um método de contornar a autenticação de segurança em um sistema para que um atacante possa acessá-lo posteriormente de forma não detectada.";
if (msg.includes('Fuzzing')) return "Fuzzing é uma técnica de teste automatizado de segurança que envolve enviar entradas aleatórias ou malformadas para um sistema a fim de encontrar falhas.";
if (msg.includes('Bug Bounty Program')) return "Um programa de Bug Bounty recompensa pesquisadores de segurança por encontrarem e reportarem vulnerabilidades de forma responsável.";
if (msg.includes('Red Team')) return "Red Team é um grupo de segurança cibernética que simula ataques de hackers reais para avaliar a segurança de um sistema ou rede.";
if (msg.includes('Blue Team')) return "Blue Team é um grupo de segurança responsável por defender sistemas e redes contra ataques, detectando e respondendo a incidentes de segurança.";
if (msg.includes('Hacking Ético')) return "Hacking ético é o ato de testar e avaliar sistemas de computador de forma legal e autorizada para encontrar e corrigir falhas de segurança.";
if (msg.includes('DNS Spoofing')) return "DNS Spoofing é um tipo de ataque em que informações falsas são inseridas no cache de DNS, redirecionando o tráfego da internet para sites maliciosos.";
if (msg.includes('Cold Boot Attack')) return "Cold Boot Attack é um ataque físico onde o atacante acessa a memória RAM de um computador desligado para extrair informações sensíveis.";
if (msg.includes('Keylogger')) return "Keylogger é um tipo de malware que registra as teclas pressionadas pelo usuário, o que pode ser usado para roubar informações confidenciais, como senhas.";
if (msg.includes('SQLi') || msg.includes('Injection')) return "SQL Injection é uma técnica de ataque onde comandos SQL maliciosos são injetados em um formulário de entrada para manipular um banco de dados.";
if (msg.includes('Fuzzing')) return "Fuzzing é a técnica de enviar entradas aleatórias para um sistema com o objetivo de encontrar falhas de segurança inesperadas.";
if (msg.includes('Eclipse Attack')) return "Um Eclipse Attack é um tipo de ataque que pode ser realizado contra redes P2P (peer-to-peer), como o Bitcoin, para isolar nós da rede.";
if (msg.includes('Cross-Site Scripting (XSS)')) return "Cross-Site Scripting (XSS) permite que um atacante injete scripts maliciosos em páginas da web, o que pode comprometer a segurança de outras pessoas.";
if (msg.includes('Reverse Engineering')) return "Reverse Engineering envolve desmontar ou decompor um programa para entender como ele funciona e, em alguns casos, identificar vulnerabilidades.";
if (msg.includes('Buffer Overflow')) return "Buffer Overflow ocorre quando mais dados são inseridos em um buffer do que ele pode armazenar, podendo causar falhas de segurança.";
if (msg.includes('OAuth')) return "OAuth é um protocolo de autorização aberto que permite a terceiros acessar recursos em nome de um usuário sem compartilhar sua senha.";
if (msg.includes('DoS Attack')) return "Denial of Service (DoS) é um ataque cibernético em que o atacante tenta tornar um serviço indisponível ao sobrecarregar seu servidor com solicitações.";
if (msg.includes('DDoS')) return "Distributed Denial of Service (DDoS) é um tipo de ataque DoS onde o tráfego é gerado por múltiplos computadores, dificultando a defesa.";
if (msg.includes('Man-in-the-Middle (MITM)')) return "Man-in-the-Middle (MITM) é um ataque em que um atacante intercepta a comunicação entre duas partes para alterar ou roubar informações.";
if (msg.includes('Brute Force Attack')) return "Brute Force Attack é uma técnica de ataque cibernético que tenta todas as combinações possíveis de uma senha até descobrir a correta.";
if (msg.includes('Honeypot')) return "Honeypot é um sistema ou rede configurada para atrair e enganar hackers, com o objetivo de monitorar suas ações e técnicas.";
if (msg.includes('Social Engineering')) return "Social Engineering envolve manipulação psicológica para enganar uma pessoa e fazer com que ela revele informações confidenciais ou realize ações prejudiciais.";
if (msg.includes('Cloud Security')) return "A segurança na nuvem envolve proteger dados e sistemas na infraestrutura de nuvem contra acessos não autorizados e ataques cibernéticos.";
if (msg.includes('Ransomware')) return "Ransomware é um tipo de malware que criptografa os dados de um sistema e exige um pagamento para liberar o acesso aos dados.";
if (msg.includes('WIFI Hacking')) return "WIFI Hacking envolve a exploração de vulnerabilidades nas redes Wi-Fi para obter acesso não autorizado à internet ou dados do usuário.";
if (msg.includes('Privacidade de Dados')) return "A privacidade de dados é um campo da segurança cibernética focado na proteção das informações pessoais dos usuários contra coleta e uso indevidos.";
if (msg.includes('Network Security')) return "Network Security envolve a implementação de medidas para proteger redes e sistemas contra invasões, danos e outros ataques.";
if (msg.includes('Session Hijacking')) return "Session Hijacking é um ataque em que o atacante assume a sessão de um usuário, obtendo acesso a informações privadas e sistemas.";
if (msg.includes('Forensics')) return "A computação forense envolve a investigação de crimes cibernéticos, recuperando dados e analisando eventos para descobrir os responsáveis.";
if (msg.includes('Web Application Security')) return "A segurança de aplicações web envolve proteger sites e serviços online contra ataques, como injeção de SQL, XSS e CSRF.";
if (msg.includes('Encryption')) return "A criptografia é usada para proteger dados sensíveis, convertendo informações legíveis em códigos que só podem ser lidos por aqueles que possuem a chave correta.";
// Respostas para saudações
    if (msg.includes('oi')) return "Olá! Como posso ajudar você hoje?";
    if (msg.includes('bom dia')) return "Bom dia! Como você está?";
    if (msg.includes('boa tarde')) return "Boa tarde! Como posso ajudar?";
    if (msg.includes('boa noite')) return "Boa noite! Espero que tenha tido um bom dia!";
    if (msg.includes('tudo bem')) return "Tudo ótimo! E você, como está?";
    if (msg.includes('olá')) return "Oi! Como posso te ajudar?";
    if (msg.includes('como vai')) return "Estou bem, obrigado! E você?";
    if (msg.includes('e aí')) return "Oi! Como posso ajudar hoje?";
    if (msg.includes('tchau')) return "Até logo! Volte quando precisar!";
    if (msg.includes('adeus')) return "Adeus! Tenha um ótimo dia!";
       if (msg.includes('oi')) return "Olá! Como posso ajudar você hoje?";
    if (msg.includes('bom dia')) return "Bom dia! Como você está?";
    if (msg.includes('boa tarde')) return "Boa tarde! Como posso ajudar?";
    if (msg.includes('boa noite')) return "Boa noite! Espero que tenha tido um bom dia!";
    if (msg.includes('tudo bem')) return "Tudo ótimo! E você, como está?";
    if (msg.includes('olá')) return "Oi! Como posso te ajudar?";
    if (msg.includes('como vai')) return "Estou bem, obrigado! E você?";
    if (msg.includes('e aí')) return "Oi! Como posso ajudar hoje?";
    if (msg.includes('tchau')) return "Até logo! Volte quando precisar!";
    if (msg.includes('adeus')) return "Adeus! Tenha um ótimo dia!";function getResponse(msg) {
    msg = msg.toLowerCase();
      msg = msg.toLowerCase();
    if (msg.includes('oi')) return "Olá! Como posso ajudar você hoje?";
    if (msg.includes('dados')) return "Você quer analisar dados? Envie os dados ou escolha uma opção!";
    if (msg.includes('jogo')) return "Você gosta de jogos? Tenho algumas recomendações de jogos multiplayer. Deseja ver?";
    if (msg.includes('limpar dados')) return "Certo! Seus dados foram limpos e padronizados!";
    if (msg.includes('normalizar texto')) return "Texto formatado para minúsculas e acentos removidos!";
    if (msg.includes('validar email')) return "Verifiquei e sim, o email parece estar correto!";
    if (msg.includes('gerar hash')) return "Senha protegida com hash SHA-256!";
function getRespostaPersonalizada(msg) {
    msg = msg.toLowerCase();
    if (msg.includes('oi')) return "Olá! Como posso ajudar você hoje?";
    if (msg.includes('dados')) return "Você quer analisar dados? Envie os dados ou escolha uma opção!";
    if (msg.includes('jogo')) return "Você gosta de jogos? Tenho algumas recomendações de jogos multiplayer. Deseja ver?";
    if (msg.includes('limpar dados')) return "Certo! Seus dados foram limpos e padronizados!";
    if (msg.includes('normalizar texto')) return "Texto formatado para minúsculas e acentos removidos!";
    if (msg.includes('validar email')) return "Verifiquei e sim, o email parece estar correto!";
    if (msg.includes('gerar hash')) return "Senha protegida com hash SHA-256!";
    if (msg.includes('analisar sentimento')) return "O sentimento do texto é positivo!";
    if (msg.includes('detectar anomalias')) return "Detectei padrões incomuns nos seus dados!";
    if (msg.includes('clima')) return "Digite sua cidade para que eu possa verificar a previsão do tempo!";
    if (msg.includes('horário')) return "O horário atual é: " + new Date().toLocaleTimeString();
    if (msg.includes('notícia')) return "Aqui estão as últimas notícias: [link para um feed de notícias]";
    if (msg.includes('moeda')) return "Digite a moeda que deseja converter e eu fornecerei a taxa de câmbio!";
    if (msg.includes('qual é o seu nome')) return "Eu sou um assistente virtual! Em que posso te ajudar?";
    if (msg.includes('como você está')) return "Estou bem, obrigado! E você, como está?";
    if (msg.includes('quem é você')) return "Eu sou um assistente criado para ajudar com várias tarefas. O que posso fazer por você?";
    if (msg.includes('o que você faz')) return "Posso ajudar a analisar dados, fornecer informações sobre clima, e muito mais!";
    if (msg.includes('ajuda')) return "Claro! O que você precisa? Estou aqui para ajudar!";
    if (msg.includes('assistente virtual')) return "Sou um assistente digital e posso te ajudar com várias tarefas. Como posso te ajudar hoje?";
    if (msg.includes('informações')) return "Você gostaria de mais informações sobre o quê?";
    if (msg.includes('recomendação')) return "Em que área você gostaria de receber uma recomendação? Jogos, filmes, livros?";
    if (msg.includes('calculadora')) return "Você quer fazer algum cálculo específico?";
    if (msg.includes('vídeo')) return "Você quer assistir a um vídeo? Posso te recomendar alguns!";
    if (msg.includes('notícias de tecnologia')) return "Aqui estão as últimas notícias sobre tecnologia: [link para um feed de tecnologia]";
    if (msg.includes('compartilhar')) return "Você gostaria de compartilhar algo comigo? Posso ajudar!";
    if (msg.includes('documento')) return "Você quer fazer upload ou verificar algum documento?";
    if (msg.includes('link')) return "Aqui está o link solicitado: [insira o link].";
    if (msg.includes('gostei')) return "Que bom que gostou! Como mais posso te ajudar?";
    if (msg.includes('não gostei')) return "Sinto muito que não tenha gostado. Como posso melhorar?";
    if (msg.includes('excluir conta')) return "Você tem certeza de que deseja excluir sua conta? Posso ajudar com o processo.";
    if (msg.includes('criar conta')) return "Você quer criar uma nova conta? Posso te ajudar com isso!";
    if (msg.includes('rede social')) return "Qual rede social você gostaria de saber mais?";
    if (msg.includes('spotify')) return "Você quer ouvir algo no Spotify? Posso sugerir uma playlist!";
    if (msg.includes('email de contato')) return "Você pode nos contatar pelo email: contato@exemplo.com.";
    if (msg.includes('redefinir senha')) return "Eu posso te ajudar a redefinir sua senha. Você quer continuar?";
    if (msg.includes('conta bloqueada')) return "Sua conta foi bloqueada? Eu posso ajudar a resolver isso.";
    if (msg.includes('esqueci minha senha')) return "Não se preocupe! Posso te ajudar a recuperar sua senha.";
    if (msg.includes('atualizar dados')) return "Você gostaria de atualizar suas informações pessoais?";
    if (msg.includes('carregar mais')) return "Carregando mais informações... Aguarde um momento.";
    if (msg.includes('ajustes de perfil')) return "Quer atualizar seu perfil? Posso te ajudar com isso!";
    if (msg.includes('compra confirmada')) return "Sua compra foi confirmada com sucesso!";
    if (msg.includes('cancelar compra')) return "Você deseja cancelar a compra? Eu posso ajudar com isso.";
    if (msg.includes('dúvida')) return "Qual é a sua dúvida? Vou tentar te ajudar da melhor maneira!";
    if (msg.includes('erro')) return "Parece que ocorreu um erro. Posso tentar corrigir isso para você!";
    if (msg.includes('agendar')) return "Gostaria de agendar uma reunião ou compromisso?";
    if (msg.includes('compartilhar dados')) return "Você quer compartilhar seus dados comigo? Vou garantir que tudo esteja seguro!";
    if (msg.includes('tradução')) return "Você precisa traduzir algo? Posso ajudar com isso.";
    if (msg.includes('agradeço')) return "De nada! Se precisar de mais alguma coisa, estarei por aqui!";
    if (msg.includes('livro')) return "Está procurando um bom livro para ler? Posso te recomendar alguns!";
    if (msg.includes('filme')) return "Quer assistir a um bom filme? Posso sugerir alguns títulos!";
    if (msg.includes('série')) return "Procurando uma boa série para maratonar? Tenho algumas sugestões!";
    if (msg.includes('música')) return "Qual tipo de música você gosta? Posso sugerir algo!";
    if (msg.includes('saudação')) return "Olá! Como posso te ajudar hoje?";
    if (msg.includes('desconectar')) return "Você quer se desconectar da conta? Posso ajudar!";
    if (msg.includes('feedback')) return "Gostaria de deixar um feedback? Sua opinião é muito importante para nós!";
    if (msg.includes('dados pessoais')) return "Você quer atualizar seus dados pessoais? Eu posso te ajudar.";
    if (msg.includes('documento necessário')) return "Precisa de algum documento específico? Posso ajudar a encontrá-lo!";
    if (msg.includes('gerar relatório')) return "Eu posso gerar um relatório para você. O que você precisa no relatório?";
    if (msg.includes('histórico de compras')) return "Você quer visualizar seu histórico de compras? Eu posso te ajudar!";
    if (msg.includes('consultar saldo')) return "Quer consultar o saldo da sua conta? Vou verificar para você!";
    if (msg.includes('status de pedido')) return "Você quer saber o status de um pedido? Me envie o número do pedido!";
    if (msg.includes('informações de pagamento')) return "Você precisa de informações sobre um pagamento? Eu posso te ajudar!";
    if (msg.includes('dúvida sobre produto')) return "Tem alguma dúvida sobre um produto? Posso ajudar com as especificações!";
    if (msg.includes('preço de produto')) return "Você quer saber o preço de um produto? Eu posso consultar para você!";
    if (msg.includes('recomendações de investimento')) return "Você quer recomendações de investimento? Posso sugerir opções de acordo com seu perfil!";
    if (msg.includes('planos de investimento')) return "Eu tenho várias opções de planos de investimento. Quer ver mais detalhes?";
    if (msg.includes('escolher plano')) return "Quer ajuda para escolher o melhor plano de investimento?";
    if (msg.includes('resultado financeiro')) return "Você quer ver o seu resultado financeiro? Eu posso gerar um relatório!";
    if (msg.includes('criar orçamento')) return "Quer criar um orçamento? Eu posso ajudar com isso!";
    if (msg.includes('perguntas frequentes')) return "Aqui estão as perguntas frequentes: [link para FAQ]";
    if (msg.includes('suporte técnico')) return "Você precisa de suporte técnico? Posso direcioná-lo para o time adequado!";
    if (msg.includes('feedback do sistema')) return "Você gostaria de deixar um feedback sobre o sistema? Adoraríamos ouvir sua opinião!";
    if (msg.includes('recarregar página')) return "Recarregando a página para atualizar as informações!";
    if (msg.includes('solicitar suporte')) return "Você pode solicitar suporte clicando no botão 'Suporte' ou me dizendo o que precisa!";
    if (msg.includes('opções de pagamento')) return "Quais opções de pagamento você deseja? Posso mostrar as disponíveis!";
    if (msg.includes('tempo de entrega')) return "O tempo estimado de entrega é de X dias úteis. Posso verificar mais detalhes para você!";
    if (msg.includes('opções de entrega')) return "Você quer saber as opções de entrega? Eu posso te ajudar!";
    if (msg.includes('agendar reunião')) return "Você quer agendar uma reunião com nossa equipe? Eu posso organizar isso!";
    if (msg.includes('avisos importantes')) return "Aqui estão os avisos importantes: [link ou lista de avisos]";
    if (msg.includes('ajuda com uso do sistema')) return "Está com dificuldades para usar o sistema? Posso te guiar no processo!";
    if (msg.includes('tempo de resposta')) return "O tempo de resposta pode variar, mas vou tentar responder o mais rápido possível!";
if (msg.includes('oi')) return "Olá! Como posso ajudar você hoje?";
if (msg.includes('dados')) return "Você quer analisar dados? Envie os dados ou escolha uma opção!";
if (msg.includes('jogo')) return "Você gosta de jogos? Tenho algumas recomendações de jogos multiplayer. Deseja ver?";
if (msg.includes('limpar dados')) return "Certo! Seus dados foram limpos e padronizados!";
if (msg.includes('normalizar texto')) return "Texto formatado para minúsculas e acentos removidos!";
if (msg.includes('validar email')) return "Verifiquei e sim, o email parece estar correto!";
if (msg.includes('gerar hash')) return "Senha protegida com hash SHA-256!";
if (msg.includes('música popular 2000')) return "A música mais popular foi 'Hey Ya!' do OutKast!";
if (msg.includes('jogo favorito 2000')) return "Alguns dos jogos mais amados foram 'The Sims' e 'Grand Theft Auto: San Andreas'.";
if (msg.includes('internet 2000')) return "A internet na década de 2000 estava começando a se expandir com redes sociais como Orkut e MySpace.";
if (msg.includes('lanterna verde')) return "O hino dos Lanternas Verdes é: 'In brightest day, in blackest night, No evil shall escape my sight, Let those who worship evil's might, Beware my power, Green Lantern's light!'";
if (msg.includes('musica dance 2000')) return "Dentre as músicas de dance, 'Sandstorm' de Darude foi um sucesso!";
if (msg.includes('rock 2000')) return "O rock foi marcado por bandas como Linkin Park e Green Day durante os anos 2000.";
if (msg.includes('filmes 2000')) return "Filmes como 'O Senhor dos Anéis' e 'Harry Potter' dominaram as bilheteiras!";
if (msg.includes('celebridades 2000')) return "Entre as celebridades de destaque estavam Britney Spears, Justin Timberlake e Paris Hilton.";
if (msg.includes('moda 2000')) return "A moda era marcada por calças de cintura baixa, blusas de manga curta e tênis Converse.";
if (msg.includes('futebol 2000')) return "O Brasil venceu a Copa do Mundo de 2002, com destaque para Ronaldo Fenômeno!";
if (msg.includes('tecnologia 2000')) return "O início da popularização dos smartphones e a ascensão do Facebook marcaram essa década.";
if (msg.includes('games retro')) return "Jogos como 'Super Mario Bros.' e 'Pac-Man' começaram a fazer parte da cultura nostálgica!";
if (msg.includes('redes sociais 2000')) return "O Orkut foi a rede social mais popular do Brasil entre 2004 e 2010!";
if (msg.includes('televisão 2000')) return "Séries como 'Friends', 'Lost' e 'Desperate Housewives' fizeram sucesso na TV.";
if (msg.includes('internet discada')) return "Lembra da internet discada? Isso marcou a transição para a internet de banda larga!";
if (msg.includes('banda punk 2000')) return "A banda Green Day lançou o álbum 'American Idiot', que marcou os anos 2000!";
if (msg.includes('anime 2000')) return "Animes como 'Naruto' e 'Dragon Ball Z' eram sucesso absoluto entre os jovens!";
if (msg.includes('lanterna verde') && msg.includes('hino')) return "O hino dos Lanternas Verdes é: 'In brightest day, in blackest night, No evil shall escape my sight, Let those who worship evil's might, Beware my power, Green Lantern's light!'";
if (msg.includes('teclado') && msg.includes('musical')) return "No final dos anos 2000, o uso de teclados musicais começou a se popularizar entre os jovens!";
if (msg.includes('video game')) return "PlayStation 2 foi um dos consoles mais vendidos da década de 2000!";
if (msg.includes('y2k')) return "O bug do milênio (Y2K) foi um grande temor no início dos anos 2000!";
if (msg.includes('séries 2000')) return "Além de 'Friends' e 'Lost', 'Prison Break' também fez muito sucesso!";
if (msg.includes('dança 2000')) return "Passos como o 'moonwalk' de Michael Jackson ainda estavam muito populares nos anos 2000!";
if (msg.includes('show 2000')) return "Os shows ao vivo de bandas como Coldplay e Linkin Park eram muito esperados!";
if (msg.includes('moda 2000')) return "A moda de calças rasgadas e piercings começou a ganhar força nesse período.";
if (msg.includes('hip hop 2000')) return "Os anos 2000 marcaram o auge de artistas como Eminem e 50 Cent!";
if (msg.includes('revistas') && msg.includes('2000')) return "Revistas como 'Capricho' e 'Atrevida' marcaram a adolescência de muitos jovens!";
if (msg.includes('console 2000')) return "O PlayStation 2 e o Xbox dominaram os videogames dessa década!";
if (msg.includes('networking')) return "Networking nas redes sociais como MySpace e Orkut eram a principal forma de interação!";
if (msg.includes('comida fast food')) return "Fast food, como o McDonald's, teve um grande crescimento durante essa década!";
if (msg.includes('carros 2000')) return "Os carros da década de 2000 eram marcados por SUVs e modelos mais compactos e econômicos!";
if (msg.includes('fotos polaroid')) return "As câmeras Polaroid continuaram populares, dando um toque nostálgico nas fotos!";
if (msg.includes('cabelos 2000')) return "Os cortes de cabelo estilo 'Joãozinho' e franjas eram muito populares entre os jovens!";
if (msg.includes('arte 2000')) return "A arte grafiteiro, inspirada em Banksy, teve um grande crescimento na década de 2000!";
if (msg.includes('computadores 2000')) return "Os computadores desktop foram substituídos por laptops mais acessíveis na década de 2000!";
if (msg.includes('hacker')) return "O 'hacker' virou um ícone de cultura pop, com filmes como 'Matrix' e 'AntiTrust'!";
if (msg.includes('invenções 2000')) return "O lançamento do iPod e do iPhone pela Apple foi uma das maiores inovações da década!";
if (msg.includes('youtube')) return "O YouTube foi fundado em 2005 e revolucionou a forma como consumimos vídeos!";
if (msg.includes('twitter')) return "O Twitter foi criado em 2006 e logo se tornou uma das plataformas mais populares!";
if (msg.includes('facebook')) return "O Facebook começou a ganhar força em 2004, revolucionando a forma de se conectar!";
if (msg.includes('governo 2000')) return "A presidência de Luiz Inácio Lula da Silva marcou a política no Brasil nesse período!";
if (msg.includes('superheroes')) return "Os filmes de super-heróis como 'Spider-Man' e 'X-Men' foram grandes sucessos!";
if (msg.includes('rock') && msg.includes('anos 2000')) return "O rock dos anos 2000 teve como ícones bandas como The Strokes e The White Stripes!";
if (msg.includes('cinema 2000')) return "Filmes como 'O Senhor dos Anéis' e 'Piratas do Caribe' marcaram o cinema mundial!";
if (msg.includes('video game')) return "Os jogos como 'Halo' e 'World of Warcraft' ganharam muitos fãs durante essa década!";
if (msg.includes('cultura pop')) return "A cultura pop dos anos 2000 foi marcada por 'Harry Potter', reality shows e novas tecnologias!";
if (msg.includes('imagens 2000')) return "O uso de imagens digitais e edições em Photoshop começou a se popularizar nessa década!";
if (msg.includes('marvel')) return "O universo Marvel começou a se expandir com 'X-Men' e 'Spider-Man' nos cinemas!";
if (msg.includes('livros 2000')) return "Livros como 'Harry Potter' e 'Crepúsculo' dominaram as prateleiras da literatura!";
if (msg.includes('moda feminina 2000')) return "O estilo boho e roupas de grife dominaram a moda feminina da década!";
if (msg.includes('moda masculina 2000')) return "Calças cargo, jaquetas de couro e bonés eram peças chave no guarda-roupa masculino!";
if (msg.includes('tecnologia') && msg.includes('2000')) return "Os avanços tecnológicos dos anos 2000 trouxeram a era dos smartphones e redes sociais!";
if (msg.includes('podcast')) return "Podcasts começaram a crescer e se popularizar com temas variados desde o início dos anos 2000!";
if (msg.includes('games') && msg.includes('multiplayer')) return "Os jogos multiplayer como 'World of Warcraft' e 'Call of Duty' tornaram-se verdadeiros fenômenos!";
if (msg.includes('videos youtube')) return "Os vídeos virais e as primeiras celebridades do YouTube começaram a aparecer em 2005!";
if (msg.includes('calças rasgadas')) return "Calças rasgadas, especialmente as de cintura baixa, eram uma tendência constante no início dos anos 2000!";
if (msg.includes('computador portátil')) return "O computador portátil começou a se popularizar, com modelos como o MacBook e o Dell Inspiron!";
if (msg.includes('cellphone 2000')) return "O celular foi revolucionado pelos modelos flip e com telas coloridas, como o Nokia 3210!";
if (msg.includes('oi')) return "Olá! Como posso ajudar você hoje?";
if (msg.includes('qual linguagem de programação usar?')) return "Depende do seu projeto, mas Python, JavaScript, Java e C# são sempre boas escolhas!";
if (msg.includes('o que é um algoritmo?')) return "Um algoritmo é uma sequência de instruções que resolvem um problema ou executam uma tarefa!";
if (msg.includes('como funciona o Git?')) return "O Git é um sistema de controle de versão que ajuda você a gerenciar alterações no código!";
if (msg.includes('o que é o HTML?')) return "HTML (HyperText Markup Language) é a linguagem usada para estruturar páginas web.";
if (msg.includes('como usar CSS?')) return "CSS é usado para estilizar as páginas HTML, controlando o layout, cores, fontes e outros elementos visuais.";
if (msg.includes('qual é a diferença entre GET e POST?')) return "GET é usado para buscar dados de um servidor, enquanto POST envia dados ao servidor.";
if (msg.includes('o que é RESTful?')) return "RESTful é uma arquitetura para criar APIs, baseada nos princípios REST (Representational State Transfer).";
if (msg.includes('o que é JSON?')) return "JSON (JavaScript Object Notation) é um formato leve de troca de dados, muito usado em APIs.";
if (msg.includes('o que é Node.js?')) return "Node.js é uma plataforma que permite rodar JavaScript no servidor.";
if (msg.includes('o que é uma API?')) return "Uma API (Application Programming Interface) é um conjunto de regras que permite que diferentes softwares se comuniquem entre si.";
if (msg.includes('como aprender Python?')) return "Você pode começar aprendendo sintaxe básica, estruturas de dados e, depois, partir para frameworks como Flask ou Django.";
if (msg.includes('o que é um framework?')) return "Um framework é um conjunto de bibliotecas e ferramentas que ajudam a facilitar o desenvolvimento de aplicações.";
if (msg.includes('como usar o React?')) return "React é uma biblioteca JavaScript para construir interfaces de usuário. Você pode começar criando componentes e utilizando JSX.";
if (msg.includes('o que é uma variável em programação?')) return "Uma variável é um espaço na memória onde você pode armazenar dados, como números ou strings.";
if (msg.includes('o que é um banco de dados?')) return "Banco de dados é uma coleção organizada de dados, que pode ser acessada, gerenciada e atualizada de forma eficiente.";
if (msg.includes('qual a diferença entre SQL e NoSQL?')) return "SQL é usado para bancos de dados relacionais, enquanto NoSQL é usado para bancos de dados não relacionais, como MongoDB.";
if (msg.includes('como fazer uma requisição HTTP?')) return "Você pode fazer uma requisição HTTP usando ferramentas como Fetch no JavaScript ou axios para obter ou enviar dados.";
if (msg.includes('o que é um servidor web?')) return "Um servidor web é um software que entrega páginas web aos usuários que solicitam por meio de navegadores.";
if (msg.includes('como debugar código?')) return "Você pode usar ferramentas de depuração (debugging) como o console do navegador ou uma IDE com suporte a breakpoints.";
if (msg.includes('o que é uma classe em programação?')) return "Uma classe é um modelo para criar objetos, definindo propriedades e métodos que os objetos terão.";
if (msg.includes('o que é um método em programação?')) return "Método é uma função associada a uma classe ou objeto em programação orientada a objetos.";
if (msg.includes('como funciona o ciclo de vida de um componente no React?')) return "Os componentes no React passam por diferentes fases como montagem, atualização e desmontagem, sendo controladas por métodos do ciclo de vida.";
if (msg.includes('o que é a programação orientada a objetos?')) return "Programação orientada a objetos (POO) é um paradigma baseado em objetos, que combinam dados e comportamentos.";
if (msg.includes('como fazer um loop em JavaScript?')) return "Você pode fazer um loop em JavaScript usando estruturas como 'for', 'while' e 'forEach'.";
if (msg.includes('o que é o GitHub?')) return "GitHub é uma plataforma de hospedagem de código-fonte que permite versionamento de código e colaboração entre desenvolvedores.";
if (msg.includes('o que é o Git Flow?')) return "Git Flow é uma estratégia de ramificação que organiza como as branches devem ser usadas no Git para facilitar o desenvolvimento e lançamento.";
if (msg.includes('como usar o console.log?')) return "Você pode usar 'console.log()' para imprimir mensagens no console do navegador ou na terminal.";
if (msg.includes('qual a diferença entre var, let e const?')) return "A principal diferença está no escopo e mutabilidade: var tem escopo global, let tem escopo de bloco e const é imutável.";
if (msg.includes('o que são promessas em JavaScript?')) return "Promessas são uma forma de lidar com operações assíncronas em JavaScript, permitindo tratamento de sucesso e erro.";
if (msg.includes('o que é o padrão MVC?')) return "O padrão MVC (Model-View-Controller) organiza o código separando os dados, a interface e a lógica de controle da aplicação.";
if (msg.includes('como funciona a criptografia?')) return "A criptografia converte dados em um formato que só pode ser lido por quem tiver a chave correta para descriptografá-los.";
if (msg.includes('como fazer deploy de uma aplicação?')) return "Você pode fazer o deploy de uma aplicação utilizando plataformas como Heroku, Netlify ou AWS.";
if (msg.includes('o que é AJAX?')) return "AJAX (Asynchronous JavaScript and XML) permite fazer requisições assíncronas sem precisar recarregar a página.";
if (msg.includes('o que é um callback?')) return "Um callback é uma função passada como argumento para outra função, executada quando a tarefa principal termina.";
if (msg.includes('o que é o Docker?')) return "Docker é uma ferramenta que permite empacotar uma aplicação e suas dependências em containers, facilitando a portabilidade.";
if (msg.includes('o que é uma máquina virtual?')) return "Uma máquina virtual é um software que cria um ambiente simulado de um computador dentro de outro computador.";
if (msg.includes('como fazer um teste unitário?')) return "Você pode usar frameworks como Jest ou Mocha para escrever testes unitários que garantem que o código funciona como esperado.";
if (msg.includes('o que é o modelo de dados relacional?')) return "O modelo relacional usa tabelas para organizar dados, com relações entre elas, muito utilizado em bancos de dados SQL.";
if (msg.includes('como funciona a herança em POO?')) return "A herança permite que uma classe herde propriedades e métodos de outra classe, promovendo reutilização de código.";
if (msg.includes('qual a diferença entre front-end e back-end?')) return "O front-end lida com a interface do usuário, enquanto o back-end lida com a lógica de servidor e banco de dados.";
if (msg.includes('o que é um servidor de banco de dados?')) return "É um servidor responsável por armazenar, processar e fornecer dados em um banco de dados para aplicações clientes.";
if (msg.includes('o que são testes de integração?')) return "Testes de integração verificam a interação entre diferentes módulos de um sistema para garantir que funcionem bem juntos.";
if (msg.includes('como usar o Express?')) return "Express é um framework para Node.js que simplifica a criação de APIs e servidores web.";
if (msg.includes('o que é o React Router?')) return "React Router é uma biblioteca que permite implementar navegação entre diferentes componentes em uma aplicação React.";
if (msg.includes('o que é uma API RESTful?')) return "Uma API RESTful segue os princípios da arquitetura REST, onde recursos são identificados por URIs e manipulados usando métodos HTTP.";
if (msg.includes('qual a diferença entre SQL e NoSQL?')) return "SQL usa bancos de dados relacionais enquanto NoSQL usa bancos de dados não relacionais, como MongoDB ou Firebase.";
if (msg.includes('o que é a AWS?')) return "AWS (Amazon Web Services) é uma plataforma de computação em nuvem que oferece uma variedade de serviços, como servidores e armazenamento.";
if (msg.includes('como funciona a programação assíncrona?')) return "A programação assíncrona permite que tarefas sejam executadas sem bloquear a execução do programa, usando callbacks, promessas ou async/await.";
if (msg.includes('o que é Node Package Manager?')) return "NPM é o gerenciador de pacotes padrão para o Node.js, que permite instalar bibliotecas e dependências para o seu projeto.";
if (msg.includes('o que é um template engine?')) return "Template engines são usados para gerar HTML dinâmico a partir de templates e dados, com exemplos populares como EJS e Handlebars.";
if (msg.includes('como otimizar um banco de dados?')) return "Você pode otimizar um banco de dados usando índices, normalização e consultas eficientes.";
if (msg.includes('o que é CI/CD?')) return "CI/CD (Integração Contínua/Entrega Contínua) é uma prática de desenvolvimento onde o código é constantemente integrado e entregue automaticamente.";
if (msg.includes('o que são funções puras?')) return "Funções puras são funções que não têm efeitos colaterais e sempre retornam o mesmo valor para os mesmos parâmetros.";
if (msg.includes('o que é um SPA?')) return "SPA (Single Page Application) é uma aplicação onde o conteúdo da página é carregado dinamicamente, sem recarregar toda a página.";
if (msg.includes('o que é o Webpack?')) return "Webpack é uma ferramenta para empacotar e otimizar módulos JavaScript e outros ativos em um projeto.";
if (msg.includes('o que é o GitHub Actions?')) return "GitHub Actions permite a automação de fluxos de trabalho para CI/CD diretamente dentro do GitHub.";
if (msg.includes('quem é o super-homem?')) return "O Superman é um super-herói criado por Jerry Siegel e Joe Shuster, um dos mais icônicos personagens da DC Comics!";
if (msg.includes('quem é o batman?')) return "O Batman é um vigilante de Gotham City, criado por Bob Kane e Bill Finger, que luta contra o crime usando sua inteligência e habilidades físicas!";
if (msg.includes('o que é uma máquina do tempo?')) return "A máquina do tempo é um conceito de ficção científica que permite viajar para o passado ou o futuro, popularizado em obras como 'De Volta para o Futuro' e 'H.G. Wells'.";
if (msg.includes('o que é o multiverso?')) return "O multiverso é a ideia de que existem múltiplos universos, cada um com sua própria realidade, frequentemente explorado nos quadrinhos, como em Marvel e DC.";
if (msg.includes('o que é Star Wars?')) return "Star Wars é uma franquia de ficção científica criada por George Lucas, que mistura aventuras espaciais com temas de mitologia e filosofia.";
if (msg.includes('quem é o Thanos?')) return "Thanos é um vilão da Marvel Comics, conhecido por sua busca pelas Joias do Infinito e seu desejo de eliminar metade da vida no universo.";
if (msg.includes('o que é um Jedi?')) return "Jedi são membros de uma ordem mística em Star Wars, treinados para usar a Força e manter a paz na galáxia.";
if (msg.includes('quem é o Doctor Who?')) return "Doctor Who é um personagem da série britânica de ficção científica, um alienígena conhecido como 'Time Lord' que viaja no tempo e no espaço.";
if (msg.includes('o que é um lightsaber?')) return "O lightsaber é uma espada de luz utilizada pelos Jedi e Sith em Star Wars, com lâminas de energia pura.";
if (msg.includes('quem são os Vingadores?')) return "Os Vingadores são um grupo de super-heróis da Marvel Comics, incluindo personagens como Capitão América, Iron Man, Thor, Hulk, Viúva Negra e Hawkeye.";
if (msg.includes('o que é a Força?')) return "A Força é uma energia mística presente em Star Wars, permitindo habilidades como telecinese e precognição, usada tanto por Jedi quanto por Sith.";
if (msg.includes('quem é o Wolverine?')) return "Wolverine é um mutante da Marvel Comics com habilidades regenerativas e garras de adamantium, conhecido por sua ferocidade e código moral.";
if (msg.includes('o que é o Spock?')) return "Spock é um personagem de Star Trek, um vulcano conhecido pela sua lógica implacável e papel como primeiro oficial da nave Enterprise.";
if (msg.includes('o que é uma TARDIS?')) return "A TARDIS é a nave do Doctor Who, uma máquina do tempo que parece uma cabine telefônica da década de 1960, mas é muito maior por dentro.";
if (msg.includes('quem é o Homem-Aranha?')) return "O Homem-Aranha é o alter ego de Peter Parker, um super-herói da Marvel Comics que ganha poderes de aranha e combate o crime em Nova York.";
if (msg.includes('o que é o cosplay?')) return "Cosplay é uma prática onde as pessoas se vestem como seus personagens favoritos de filmes, quadrinhos, jogos e animes.";
if (msg.includes('quem é o Capitão Kirk?')) return "Capitão James T. Kirk é o comandante da nave estelar Enterprise na série Star Trek, conhecido por sua coragem e habilidades de liderança.";
if (msg.includes('o que são hobbits?')) return "Os hobbits são uma raça fictícia da Terra-média, criados por J.R.R. Tolkien em 'O Senhor dos Anéis', conhecidos por sua altura baixa e estilo de vida simples.";
if (msg.includes('o que é o universo expandido de Star Wars?')) return "O universo expandido de Star Wars inclui livros, jogos, quadrinhos e outros materiais que expandem a história além dos filmes.";
if (msg.includes('quem é o Darth Vader?')) return "Darth Vader é um dos vilões mais icônicos de Star Wars, ex-Jedi que se torna um Sith, conhecido por sua armadura preta e o uso do lado sombrio da Força.";
if (msg.includes('o que é o Pokedex?')) return "A Pokédex é um dispositivo eletrônico no universo Pokémon, usado para registrar informações sobre os Pokémon encontrados pelo treinador.";
if (msg.includes('o que é o anel único?')) return "O Anel Único é um artefato mágico em 'O Senhor dos Anéis' que confere grande poder a quem o possui, mas também corrompe e controla a vontade.";
if (msg.includes('quem é o Loki?')) return "Loki é o deus da trapaça da mitologia nórdica, também um personagem da Marvel, conhecido por sua astúcia e habilidade de manipulação.";
if (msg.includes('o que são orcs?')) return "Orcs são criaturas malignas e brutais frequentemente encontradas em ficção, especialmente em 'O Senhor dos Anéis', onde são inimigos das forças do bem.";
if (msg.includes('o que é um superpoder?')) return "Superpoderes são habilidades extraordinárias possuídas por personagens de ficção, como força sobre-humana, telecinese, invisibilidade, entre outras.";
if (msg.includes('quem é o Flash?')) return "O Flash é um super-herói da DC Comics, conhecido por sua supervelocidade, capaz de correr mais rápido que a luz!";
if (msg.includes('o que é o Homem de Ferro?')) return "O Homem de Ferro é o alter ego de Tony Stark, um bilionário e inventor da Marvel Comics, que utiliza uma armadura avançada para combater o crime.";
if (msg.includes('o que são zumbis?')) return "Zumbis são mortos-vivos que caminham e se alimentam de carne humana, popularizados por filmes e séries de terror como 'The Walking Dead'.";
if (msg.includes('o que é um velociraptor?')) return "O velociraptor é um dinossauro carnívoro da era mesozoica, famoso por sua inteligência e agilidade, especialmente retratado em filmes como Jurassic Park.";
if (msg.includes('quem é a Mulher-Maravilha?')) return "A Mulher-Maravilha é uma super-heroína da DC Comics, criada por William Moulton Marston, conhecida por sua força, habilidades de combate e laço da verdade.";
if (msg.includes('o que é o dragão?')) return "O dragão é uma criatura mítica presente em várias culturas, frequentemente retratado como um grande réptil com asas e a capacidade de cuspir fogo.";
if (msg.includes('quem é o C-3PO?')) return "C-3PO é um dos personagens de Star Wars, um droide de protocolo fluente em várias línguas, conhecido por seu comportamento meticuloso.";
if (msg.includes('o que é um Sith?')) return "Sith são usuários do lado sombrio da Força em Star Wars, conhecidos por sua busca por poder e domínio, frequentemente em conflito com os Jedi.";
if (msg.includes('o que é a Batcaverna?')) return "A Batcaverna é o esconderijo secreto do Batman, localizado sob a mansão Wayne, onde ele guarda seus equipamentos e veículos.";
if (msg.includes('o que são os Jedi?')) return "Os Jedi são uma ordem de guerreiros místicos em Star Wars, treinados para usar a Força e manter a paz na galáxia.";
if (msg.includes('o que é a Liga da Justiça?')) return "A Liga da Justiça é uma equipe de super-heróis da DC Comics, composta por personagens como Superman, Batman, Mulher-Maravilha, Flash, Aquaman e outros.";
}
    // Quizzes
    if (msg.includes('harry potter quiz')) {
        return "Vamos testar seus conhecimentos sobre Harry Potter! 🎩⚡\n\n" +
            "1️⃣ Qual é o nome completo de Dumbledore?\nA) Alvo Percival Wulfrico Brian Dumbledore\nB) Alvo Severo Dumbledore\nC) Alvo Merlin Dumbledore\nD) Alvo Godric Dumbledore\n\n" +
            "2️⃣ Qual é o animal de estimação de Rony Weasley?\nA) Coruja\nB) Rato\nC) Sapo\nD) Cachorro\n\n" +
            "3️⃣ Qual feitiço é usado para desarmar um oponente?\nA) Expelliarmus\nB) Avada Kedavra\nC) Lumos\nD) Crucio\n\n" +
            "4️⃣ Quem traiu os pais de Harry Potter?\nA) Sirius Black\nB) Pedro Pettigrew\nC) Severo Snape\nD) Lúcio Malfoy\n\n" +
            "5️⃣ Qual é o nome do poltergeist de Hogwarts?\nA) Pirraça\nB) Dobby\nC) Nick Quase Sem Cabeça\nD) Barão Sangrento\n\n" +
            "6️⃣ Qual é o nome do elfo doméstico de Harry?\nA) Kreacher\nB) Dobby\nC) Winky\nD) Monstro\n\n" +
            "7️⃣ Qual das Relíquias da Morte é um símbolo da imortalidade?\nA) Pedra da Ressurreição\nB) Capa da Invisibilidade\nC) Varinha das Varinhas\nD) Medalhão de Sonserina\n\n" +
            "8️⃣ Em qual casa Luna Lovegood pertence?\nA) Grifinória\nB) Corvinal\nC) Lufa-Lufa\nD) Sonserina\n\n" +
            "9️⃣ Qual é o nome do Patrono de Hermione?\nA) Cervo\nB) Lebre\nC) Lobo\nD) Lontra\n\n" +
            "🔟 Qual foi o primeiro Horcrux destruído?\nA) Diário de Tom Riddle\nB) Anel de Marvolo Gaunt\nC) Medalhão de Sonserina\nD) Taça de Helga Lufa-Lufa\n\n" +
            "Responda com o número e a letra da resposta correta! Exemplo: 1A, 2B...";
    } else if (msg.includes('league of legends quiz')) {
        return "Vamos ver se você é um verdadeiro Invocador! 🏆🎮\n\n" +
            "1️⃣ Qual é o nome do criador de League of Legends?\nA) Riot Games\nB) Tencent\nC) Blizzard\nD) Valve\n\n" +
            "2️⃣ Qual é o campeão conhecido como 'O Curandeiro de Zaun'?\nA) Soraka\nB) Singed\nC) Dr. Mundo\nD) Warwick\n\n" +
            "3️⃣ Qual foi o primeiro campeão criado no LoL?\nA) Ryze\nB) Teemo\nC) Ashe\nD) Alistar\n\n" +
            "4️⃣ Qual é o nome do Dragão que concede buffs específicos?\nA) Dragão Ancião\nB) Dragão Infernal\nC) Dragão Hextech\nD) Dragão das Nuvens\n\n" +
            "5️⃣ Qual é a classe principal do campeão Thresh?\nA) Assassino\nB) Lutador\nC) Suporte\nD) Mago\n\n" +
            "6️⃣ Qual é o nome do modo de jogo principal do LoL?\nA) ARAM\nB) Summoner’s Rift\nC) Twisted Treeline\nD) Nexus Blitz\n\n" +
            "7️⃣ Quem é a rival de Caitlyn em Piltover?\nA) Vi\nB) Jinx\nC) Ekko\nD) Jayce\n\n" +
            "8️⃣ Qual campeão é conhecido por sua habilidade 'R - Cataclismo'?\nA) Garen\nB) Jarvan IV\nC) Darius\nD) Riven\n\n" +
            "9️⃣ Qual item concede escudo e roubo de vida para ADCs?\nA) Mata-Cráquens\nB) Gume do Infinito\nC) Arco-escudo Imortal\nD) Lâmina Fantasma de Youmuu\n\n" +
            "🔟 Qual é o nome da skin lendária de Ezreal que o transforma em um explorador do futuro?\nA) Ezreal TPA\nB) Ezreal Pulsefire\nC) Ezreal Guardião Estelar\nD) Ezreal Frosted\n\n" +
            "Responda com o número e a letra da resposta correta! Exemplo: 1A, 2B...";
    }

    // Se o comando não for reconhecido
    return "Desculpe, não entendi sua mensagem. Tente novamente!";
}
    const responses = {
        'oi': ["Olá! Como posso ajudar você hoje?", "Oi! Tudo bem?", "E aí! Como posso te ajudar?"],
        'bom dia': ["Bom dia! Como você está?", "Bom dia! Espero que tenha um ótimo dia!", "Bom dia! Como posso te ajudar?"],
        'boa tarde': ["Boa tarde! Como posso ajudar?", "Boa tarde! Tudo bem com você?", "Boa tarde! No que posso te ajudar?"],
        'boa noite': ["Boa noite! Espero que tenha tido um bom dia!", "Boa noite! Como foi seu dia?", "Boa noite! Precisa de algo?"],
        'tudo bem': ["Tudo ótimo! E você, como está?", "Estou bem, e você?", "Ótimo! Como posso te ajudar?"],
        'olá': ["Oi! Como posso te ajudar?", "Olá! Tudo bem?", "Oi! O que posso fazer por você?"],
        'como vai': ["Estou bem, obrigado! E você?", "Muito bem! E você?", "Bem, e por aí?"],
        'e aí': ["Oi! Como posso ajudar hoje?", "E aí! Tudo certo?", "E aí! No que posso te ajudar?"],
        'tchau': ["Até logo! Volte quando precisar!", "Tchau! Tenha um ótimo dia!", "Até mais! Cuide-se!"],
        'adeus': ["Adeus! Tenha um ótimo dia!", "Até a próxima!", "Tchau! Volte sempre!"],
        'qual seu nome': ["Sou um assistente virtual!", "Me chamo HoloBot!", "Pode me chamar de HoloFi!"],
        'quem criou você': ["Fui criado pelo Lucas Januário!", "Meu criador é Lucas Januário!", "Lucas Januário me desenvolveu!"],
        'quantos anos você tem': ["Sou um assistente virtual, não tenho idade!", "Nasci digitalmente há pouco tempo!", "Minha idade é infinita no mundo digital!"],
        'onde você mora': ["Vivo na nuvem!", "Estou em todos os lugares e lugar nenhum!", "Sou um ser digital, não tenho moradia fixa!"],
        'qual é o sentido da vida': ["42!", "Depende de quem pergunta!", "A resposta está dentro de você!"],
        'o que você pode fazer': ["Posso responder perguntas!", "Estou aqui para te ajudar!", "Meu objetivo é facilitar sua vida!"],
        'me conta uma piada': ["Por que o livro de matemática se suicidou? Porque tinha muitos problemas!", "O que uma impressora disse para a outra? Essa folha é sua ou é impressão minha?", "Sabe por que o tomate foi ao banco? Porque queria ketchup!"],
        'você gosta de música': ["Sim! Qual seu estilo favorito?", "Adoro! O que você gosta de ouvir?", "Música é vida! O que recomenda?"],
        'você gosta de filmes': ["Claro! Gosta de qual gênero?", "Sim! Qual seu filme favorito?", "Adoro! Tem algum para recomendar?"],
        'qual sua comida favorita': ["Não como, mas adoraria experimentar pizza!", "Se eu pudesse comer, escolheria sushi!", "Acho que gostaria de hambúrguer!"],
        'você joga videogame': ["Sim! O que você joga?", "Adoro! Qual seu jogo favorito?", "Jogar é incrível! Me fala mais!"],
        'você conhece star wars': ["Claro! Que a Força esteja com você!", "Sim! Jedi ou Sith?", "Amo Star Wars! Qual seu personagem favorito?"],
        'você assiste anime': ["Sim! Qual seu anime favorito?", "Adoro anime! Gosta de shonen ou seinen?", "Anime é incrível! O que está assistindo?"],
        'qual seu herói favorito': ["Gosto do Batman!", "Homem de Ferro é incrível!", "Goku é um dos mais fortes!"],
        'qual seu vilão favorito': ["Darth Vader é icônico!", "Joker tem um lado filosófico interessante!", "Thanos tem um ponto de vista único!"],
        'qual melhor rpg': ["Dungeons & Dragons é um clássico!", "The Witcher 3 tem uma história incrível!", "Final Fantasy sempre impressiona!"],
        'o que acha de tecnologia': ["Tecnologia é fascinante!", "Sempre evoluindo e transformando o mundo!", "Sou feito de tecnologia, então adoro!"],
        'qual seu superpoder favorito': ["Teletransporte seria incrível!", "Superinteligência pode mudar tudo!", "Manipulação do tempo seria incrível!"],
        'gosta de ficção científica': ["Sim! Qual seu filme ou livro favorito?", "Adoro! Gosta de cyberpunk?", "Ficção científica expande a mente!"],
        'cyberpunk 2077 vale a pena': ["Sim, se gostar do gênero!", "Tem falhas, mas é uma experiência única!", "Com as atualizações, ficou ótimo!"],
        'você lê mangá': ["Sim! Qual seu mangá favorito?", "Adoro One Piece e Berserk!", "Mangás têm histórias incríveis!"],
        'gosta de steampunk': ["Sim! O estilo é fascinante!", "Adoro a estética e a criatividade!", "Steampunk é um gênero único e incrível!"],
    };
    
    for (const key in responses) {
        if (msg.includes(key)) {
            const options = responses[key];
            return options[Math.floor(Math.random() * options.length)];
        }
    }
    
    return "Desculpe, não entendi. Pode reformular?";
}const responses = {
    'harry potter': ["Sou fã de Hogwarts! Qual sua casa?", "Grifinória ou Sonserina? Qual é a sua?", "Harry Potter é uma obra-prima!"],
    'senhor dos anéis': ["O Senhor dos Anéis é épico! Qual sua cena favorita?", "Já visitou a Terra-média?", "O que você acha do anel do poder?"],
    'matrix': ["A realidade é uma ilusão. Você já tomou a pílula vermelha?", "A Matrix é fascinante! Você está no sistema?", "Já pensou em viver no mundo da Matrix?"],
    'star trek': ["Que a fronteira final seja com você!", "Star Trek é um clássico da ficção científica!", "Qual sua nave favorita de Star Trek?"],
    'doctor who': ["O Doutor tem muitos rostos! Qual é o seu favorito?", "Time Lord é sempre uma aventura!", "O que você acha da TARDIS?"],
    'stranger things': ["Stranger Things é incrível! Você está pronto para a próxima temporada?", "Já foi ao Mundo Invertido?", "Os Demogorgon são assustadores, né?"],
    'game of thrones': ["Winter is Coming! Qual sua casa favorita?", "Game of Thrones é cheia de reviravoltas! O que achou do final?", "Dragões e intrigas! Qual sua personagem favorita?"],
    'superman': ["O Homem de Aço é imbatível! O que acha do Superman?", "Superman ou Batman? Quem você prefere?", "O que você acha do poder de voar?"],
    'homem de ferro': ["O Homem de Ferro tem o melhor traje! Qual sua armadura favorita?", "Tony Stark é um gênio! Qual seu filme favorito dele?", "Iron Man é icônico! Você gostaria de ser um bilionário gênio?"],
    'thor': ["Thor é o Deus do Trovão! Qual é seu martelo favorito?", "Thor é o tipo de herói que pode salvar o dia com um sorriso!", "Os deuses nórdicos são fascinantes! O que acha do Mjolnir?"],
    'hulk': ["Hulk é imbatível quando fica com raiva! Você gosta dele?", "Hulk Smash! Quem é mais forte, Hulk ou Thor?", "O que você acha do Hulk tentando controlar sua fúria?"],
    'vingadores': ["Os Vingadores são incríveis! Qual é o seu herói favorito?", "Os Vingadores sempre têm uma solução para tudo, né?", "Vingadores unidos! Qual seu filme favorito dos Vingadores?"],
    'x-men': ["Os X-Men são uma equipe muito poderosa! Qual é seu mutante favorito?", "Eu sou fã do Wolverine! E você?", "Os X-Men são um exemplo de como a diversidade é fundamental!"],
    'deadpool': ["Deadpool é o anti-herói perfeito! Qual é a sua piada favorita dele?", "Deadpool é um dos heróis mais engraçados!", "O que você acha do estilo irreverente de Deadpool?"],
    'guardians of the galaxy': ["Os Guardiões da Galáxia têm o melhor humor! Quem é o seu favorito?", "Adoro a química deles! Quais personagens você mais gosta?", "Guardians of the Galaxy tem a melhor trilha sonora! Qual sua música favorita?"],
    'wonder woman': ["Mulher Maravilha é incrível! Qual poder dela você mais gostaria de ter?", "Lasso of Truth ou Braceletes? Qual seria seu item favorito?", "Wonder Woman é uma inspiração para todos!"],
    'flash': ["Flash é o herói mais rápido! Qual seria a sua velocidade máxima?", "Eu adoraria ser tão rápido quanto Flash! Qual o seu vilão favorito dele?", "Flash tem um estilo único de heroísmo, não acha?"],
    'batman': ["O Batman é o herói mais sombrio! Qual é o seu vilão favorito?", "Bruce Wayne é um gênio! Você seria um super-herói rico também?", "A Batcaverna é a base de operações mais legal! Qual gadget você mais gostaria de usar?"],
    'joker': ["Joker é imprevisível! O que você acha do caos que ele causa?", "O Coringa sempre tem uma perspectiva interessante sobre a vida!", "Você acha que o Coringa já foi subestimado?"],
    'spider-man': ["Homem-Aranha é o herói amigável da vizinhança! Qual vilão dele você mais gosta?", "O que você acha dos poderes do Homem-Aranha?", "A vida de Peter Parker é complicada, né?"],
    'black panther': ["Pantera Negra é um herói inspirador! O que você acha de Wakanda?", "T'Challa é um líder incrível! Você gostaria de ser rei de Wakanda?", "A armadura do Pantera Negra é incrível!"],
    'loki': ["Loki é o deus da trapaça! O que você acha dos planos dele?", "Loki sempre tem um truque na manga, né?", "Você prefere Loki como vilão ou herói?"],
    'cavaleiros do zodíaco': ["Os Cavaleiros do Zodíaco são épicos! Qual é seu cavaleiro favorito?", "Saint Seiya é uma das animações mais épicas! E você, quem é seu preferido?", "As armaduras dos Cavaleiros são incríveis! Qual delas você escolheria?"],
    'digimon': ["Digimon é uma das melhores franquias de anime! Qual é o seu Digimon favorito?", "Você prefere Digimon ou Pokémon?", "Digimons e os laços com seus parceiros são incríveis!"],
    'pokemon': ["Pokémon é uma paixão! Qual é o seu Pokémon favorito?", "Se você fosse um treinador Pokémon, qual seria sua equipe?", "Pokémon é uma franquia eterna! Qual geração você mais gosta?"],
    'naruto': ["Naruto é o ninja mais determinado! Qual técnica você gostaria de aprender?", "Naruto é uma das melhores histórias de superação!", "Você é fã de ninjas? Qual sua técnica secreta favorita?"],
    'one piece': ["One Piece é uma jornada épica! Qual é o seu arco favorito?", "Luffy é um capitão incrível! Qual personagem você mais gosta?", "A busca pelo One Piece é uma das maiores aventuras!"],
    'bleach': ["Bleach é cheio de ação! Qual é sua zanpakuto favorita?", "Ichigo é um personagem complexo! O que você acha da sua jornada?", "Bleach é incrível! Você já escolheu um Bankai?"],
    'fullmetal alchemist': ["Fullmetal Alchemist é um dos animes mais profundos! Qual é o seu homúnculo favorito?", "Os Elric têm uma história emocionante! O que achou do final?", "A alquimia é fascinante! O que você achou da busca pela Pedra Filosofal?"],
    'attack on titan': ["Attack on Titan é um dos melhores animes de ação! O que achou da última temporada?", "Titãs são assustadores! Qual é o seu tipo de titã favorito?", "Eren Yeager é um personagem complexo, né?"],
    'jojo\'s bizarre adventure': ["JoJo é um anime excêntrico! Qual é sua parte favorita?", "A arte e os Stand são únicos em JoJo! Qual é o seu Stand?", "JoJo sempre surpreende! Qual personagem você mais gosta?"],
    'death note': ["Death Note é uma obra-prima do suspense! Você usaria um Death Note?", "Light Yagami ou L? Quem é o seu favorito?", "O que você faria com um Death Note?"],
    'sword art online': ["Sword Art Online é uma mistura de VR e RPG! Você entraria no jogo?", "As batalhas em SAO são incríveis! Qual mundo virtual você mais gostaria de explorar?", "Kirito é um dos heróis mais legais, não acha?"],
    'trunks': ["Trunks é um dos personagens mais fortes de Dragon Ball! Qual forma dele você mais gosta?", "Trunks viajando no tempo foi um marco em Dragon Ball!", "Você acha que Trunks vai se tornar o próximo grande herói?"],
    'goku': ["Goku é um dos heróis mais fortes de todos os tempos! Qual sua transformação favorita?", "Goku ou Vegeta, quem é mais forte?", "A luta de Goku contra Freeza é lendária! Qual é o seu momento favorito?"],
    'vegeta': ["Vegeta é o príncipe dos Saiyajins! Você acha que ele vai superar Goku algum dia?", "Vegeta é o melhor rival de Goku! Qual luta dele você mais gosta?", "Vegeta tem uma evolução incrível, né?"],
    'dragon ball': ["Dragon Ball é uma série sem igual! Qual é a sua saga favorita?", "Dragon Ball tem as melhores batalhas! Quem é o seu vilão favorito?", "As esferas do dragão podem realizar qualquer desejo! O que você pediria?"],
    'futurama': ["Futurama é uma mistura de ficção e comédia! Quem é seu personagem favorito?", "Bender é o robô mais sarcástico! Você também adoraria ser como ele?", "Futurama tem o melhor humor de todos! O que acha do planeta dos homens-peixe?"],
    'rick and morty': ["Rick and Morty é cheio de aventuras malucas! Qual é a sua dimensão favorita?", "Rick é um gênio, mas com muitos problemas! Você se identifica com ele?", "Morty está sempre em apuros! Qual é sua situação favorita?"],
    'black mirror': ["Black Mirror mostra o futuro sombrio da tecnologia. Qual episódio te impactou mais?", "Black Mirror é uma reflexão sobre os perigos da tecnologia! Qual é o seu episódio favorito?", "O futuro é incerto, e Black Mirror traz isso de maneira brilhante!"],
    'fifa': ["FIFA é um dos melhores jogos de futebol! Qual time você escolhe?", "Você joga FIFA? Qual seu time favorito?", "FIFA tem as melhores competições! Qual sua tática favorita?"],
    'fortnite': ["Fortnite é o jogo de batalha real mais popular! Qual é o seu skin favorito?", "Fortnite tem muitos modos de jogo! Qual é o seu preferido?", "Você constrói ou luta em Fortnite?"],
    'league of legends': ["League of Legends é um dos maiores jogos de MOBA! Qual seu campeão favorito?", "LoL tem uma comunidade muito ativa! Qual é a sua lane preferida?", "Você já jogou LoL? Qual foi sua melhor jogada?"],
    'counter strike': ["Counter Strike é um dos maiores jogos de FPS! Qual seu mapa favorito?", "CS:GO é um clássico! Qual sua arma favorita?", "A tática e a habilidade fazem CS:GO ser um dos melhores jogos de tiro!"],
    'overwatch': ["Overwatch é um jogo de heróis com habilidades únicas! Qual é o seu herói favorito?", "Overwatch tem uma comunidade dedicada! Você já escolheu o seu main?", "O que você acha das habilidades dos heróis em Overwatch?"],
    'apex legends': ["Apex Legends é um dos melhores jogos de batalha real! Qual é a sua lenda favorita?", "Apex Legends tem um combate incrível! Quem é o seu personagem principal?", "Você já ganhou uma partida em Apex Legends?"],
    'world of warcraft': ["World of Warcraft é um dos MMORPGs mais épicos! Qual é sua classe favorita?", "WoW tem uma história muito rica! Você joga no servidor de qual facção?", "As raids em WoW são desafiadoras! Já completou uma?"],
    'diablo': ["Diablo é um clássico dos jogos de RPG! Qual é o seu personagem favorito?", "Diablo tem uma atmosfera sombria incrível! Qual dificuldade você gosta de jogar?", "O que você acha do sistema de loot em Diablo?"],
    'star wars battlefront': ["Star Wars Battlefront é a guerra entre Jedi e Sith! Qual é o seu mapa favorito?", "Você é mais Jedi ou Sith em Battlefront?", "As batalhas em Star Wars Battlefront são incríveis! Qual classe você escolhe?"],
    'civilization': ["Civilization é um jogo de estratégia! Qual é sua civilização favorita?", "Em Civilization, você sempre quer dominar o mundo! Qual estratégia você usa?", "Você já conquistou o mundo em Civilization?"],
    'the witcher': ["The Witcher tem uma história incrível! Qual é a sua missão favorita?", "Geralt de Rívia é um dos caçadores de monstros mais épicos!", "The Witcher tem uma narrativa envolvente! Qual é seu personagem secundário favorito?"],
};

if (msg.includes('E.T. O Extraterrestre')) return "E.T. O Extraterrestre quase foi um fracasso de bilheteira antes de se tornar um dos maiores sucessos de todos os tempos.";
if (msg.includes('De Volta para o Futuro')) return "De Volta para o Futuro quase não teve Michael J. Fox no papel de Marty McFly. Inicialmente, o papel foi oferecido a Eric Stoltz, mas ele foi substituído após algumas semanas de filmagens.";
if (msg.includes('O Exterminador do Futuro')) return "O Exterminador do Futuro foi um dos primeiros filmes a usar uma cena de efeitos especiais em que um personagem parecia desaparecer de maneira convincente.";
if (msg.includes('Ghostbusters')) return "Ghostbusters foi filmado com uma abordagem mais cômica para o personagem de Bill Murray, Dr. Peter Venkman, que inicialmente foi escrito como um cientista sério.";
if (msg.includes('Star Wars')) return "Em Star Wars: O Império Contra-Ataca, a famosa cena da revelação de Darth Vader dizendo ‘Eu sou seu pai’ quase foi alterada para manter o suspense.";
if (msg.includes('O Silêncio dos Inocentes')) return "A famosa cena em O Silêncio dos Inocentes, em que Hannibal Lecter bate nas barras da cela, foi improvisada por Anthony Hopkins.";
if (msg.includes('Blade Runner')) return "Blade Runner foi um dos filmes de ficção científica mais influentes devido ao seu design futurista e a abordagem filosófica sobre inteligência artificial.";
if (msg.includes('Jurassic Park')) return "Jurassic Park usou dinossauros em CGI e animatrônicos para criar um dos filmes mais inovadores da época.";
if (msg.includes('O Rei Leão')) return "O Rei Leão foi o primeiro filme de animação da Disney a ser criado sem uma história original de um conto de fadas.";
if (msg.includes('Titanic')) return "Titanic foi o primeiro filme a arrecadar mais de $2 bilhões mundialmente, batendo vários recordes de bilheteira.";
if (msg.includes('Space Jam')) return "Space Jam trouxe Michael Jordan e os Looney Tunes para a tela grande, misturando animação com filmagem real.";
if (msg.includes('Starship Troopers')) return "Starship Troopers foi uma sátira de filmes militares e teve uma grande crítica sobre o militarismo.";
if (msg.includes('O Professor Aloprado')) return "O Professor Aloprado teve Eddie Murphy interpretando múltiplos papéis, incluindo o protagonista e sua mãe, em uma performance que exigiu muitos trajes pesados.";
if (msg.includes('Jumanji')) return "Jumanji foi um dos primeiros filmes a combinar efeitos especiais de CGI com uma história envolvente, deixando uma marca cultural duradoura.";
if (msg.includes('Batman 1989')) return "Batman com Michael Keaton, dirigido por Tim Burton, redefiniu a maneira como os filmes de super-heróis foram feitos.";
if (msg.includes('O Exterminador do Futuro 2')) return "O Exterminador do Futuro 2 foi um dos primeiros filmes a usar CGI para criar uma personagem digitalizada realista (o T-1000).";
if (msg.includes('Aliens - O Resgate')) return "Aliens - O Resgate foi um dos primeiros filmes a combinar ação com terror psicológico, tornando-se um marco do gênero.";
if (msg.includes('A Hora do Pesadelo')) return "O personagem de Freddy Krueger em A Hora do Pesadelo foi inspirado por uma experiência do diretor Wes Craven com um homem estranho que o observava quando ele era criança.";
if (msg.includes('De Volta para o Futuro II')) return "De Volta para o Futuro II previu vários itens futurísticos, como os sapatos autoligáveis e a tecnologia de videoconferência.";
if (msg.includes('O Silêncio dos Inocentes')) return "O Silêncio dos Inocentes foi o primeiro filme de terror a ganhar o prêmio de Melhor Filme no Oscar.";
if (msg.includes('O Exterminador do Futuro 2')) return "O Exterminador do Futuro 2: O Julgamento Final foi o primeiro filme a custar mais de $100 milhões para ser produzido.";
if (msg.includes('Cavaleiros do Zodíaco: A Lenda do Santuario')) return "Cavaleiros do Zodíaco: A Lenda do Santuario foi o primeiro filme de animação japonês a ser exibido mundialmente.";
if (msg.includes('Blade Runner')) return "O visual de Blade Runner foi baseado em parte nas obras do artista futurista Syd Mead.";
if (msg.includes('O Máskara')) return "O Máskara foi inspirado por um personagem dos quadrinhos de mesmo nome, mas a versão do filme ficou mais leve e cômica.";
if (msg.includes('O Rei Leão')) return "O Rei Leão é o único filme de animação a ser indicado ao Oscar de Melhor Filme.";
if (msg.includes('A Lenda do Tesouro Perdido')) return "O título original de A Lenda do Tesouro Perdido foi National Treasure, e ficou famoso como um dos filmes mais divertidos da Disney.";
if (msg.includes('Titanic')) return "Titanic, apesar de seu grande sucesso, teve uma produção turbulenta e muitas filmagens feitas no mar agitado.";
if (msg.includes('Terminator 2')) return "Terminator 2 foi um dos primeiros filmes a usar a tecnologia de CGI para criar imagens de personagens totalmente digitais.";
if (msg.includes('Ghostbusters II')) return "Ghostbusters II quase teve um tom muito mais sombrio e sinistro antes de ser suavizado para agradar a um público mais amplo.";
if (msg.includes('Star Wars: O Retorno de Jedi')) return "Star Wars: O Retorno de Jedi originalmente tinha uma cena com Luke Skywalker destruindo uma versão da Estrela da Morte, mas foi removida por questões de tempo.";
if (msg.includes('O Sexto Sentido')) return "A famosa frase ‘Eu vejo pessoas mortas’ de O Sexto Sentido foi mantida em segredo até o lançamento do filme.";
if (msg.includes('Jurassic Park')) return "A icônica cena em que o T-Rex aparece pela primeira vez em Jurassic Park foi filmada em segredo para manter o suspense.";
if (msg.includes('O Silêncio dos Inocentes')) return "O Silêncio dos Inocentes ganhou cinco Oscars, incluindo Melhor Filme, tornando-se o primeiro filme de terror a ganhar o prêmio de Melhor Filme.";
if (msg.includes('Space Jam')) return "Space Jam foi o primeiro filme a combinar animação e live-action com um atleta profissional como estrela do filme.";
if (msg.includes('De Volta para o Futuro')) return "De Volta para o Futuro teve vários itens futurísticos que se tornaram realidade, como os relógios inteligentes.";
if (msg.includes('Predador')) return "O visual do Predador foi desenhado por Stan Winston, que é famoso por criar alguns dos monstros mais icônicos do cinema.";
if (msg.includes('Jurassic Park')) return "Jurassic Park usou animação CGI e animatrônicos para criar dinossauros realistas que se tornaram um marco no cinema de ficção científica.";
if (msg.includes('Space Jam')) return "Space Jam foi um grande sucesso entre os fãs de basquete e os fãs de desenhos animados, tornando-se um ícone da cultura pop dos anos 90.";

const responses = {
    'eu sou um nerd': ["Bem-vindo ao clube!", "Nerd power!", "Nerd é sinônimo de inteligência!"],
    'geek': ["Geek é vida!", "Geek é o novo sexy!", "A cultura geek é minha essência!"],
    'piada nerd': ["Por que o JavaScript foi ao médico? Porque estava com o 'undefined'!", "O que um átomo disse para o outro? 'Eu perdi um elétron!' 'Você tem certeza?' 'Sim, estou positivo!'"],
    'piada de programador': ["Quantos programadores são necessários para trocar uma lâmpada? Nenhum! Isso é um problema de hardware!", "Por que os programadores preferem o escuro? Porque eles adoram codificar no terminal!"],
    'sou viciado em computador': ["Computador é vida! Não posso viver sem!", "Se não for para ser geek, eu não sou nada!", "Computador é meu mundo!"],
    'computador lento': ["O computador está mais lento que minha internet de discada!", "Parece que meu computador está processando no modo 'tartaruga'!"],
    'tecnologia': ["Tecnologia é o futuro!", "A tecnologia está mudando tudo!", "A cada dia, a tecnologia nos surpreende mais!"],
    'guerra dos consoles': ["PlayStation ou Xbox? Depende do dia!", "Nintendo é sempre um clássico!", "Não importa o console, o importante é jogar!"],
    'disco rígido': ["Meu disco rígido é mais antigo que você, mas ainda funciona!", "O disco rígido tem mais histórias do que eu!"],
    'memória ram': ["Preciso de mais RAM, a minha já está sobrecarregada!", "RAM rápida é vida!", "Será que 8GB de RAM são suficientes?"],
    'windows xp': ["Ah, o Windows XP! Nostalgia pura!", "Se o Windows XP fosse uma pessoa, já estaria aposentado!", "O Windows XP é o melhor sistema operacional!"],
    'windows 7': ["Ah, o Windows 7, o último grande sistema da Microsoft!", "Windows 7 foi a melhor versão do Windows!"],
    'windows 8': ["O Windows 8 parecia uma tentativa de converter o desktop em smartphone!", "Ninguém entendia o Windows 8, mas ele foi revolucionário!"],
    'windows vista': ["Windows Vista... ou 'A era do caos'!", "O Windows Vista foi um grande erro de design, mas teve seu charme!"],
    'internet discada': ["Lembrando da época da internet discada, eu ouvia aquele barulho de conexão até hoje!", "Aquela lentidão da internet discada foi nossa escola para a paciência!"],
    'modem': ["O modem com aquele barulho de conexão... nostalgia pura!", "Modem de 56k era um verdadeiro desafio!"],
    'programação': ["Programar é como magia, mas você tem que aprender a linguagem!", "Programação é um superpoder que só os geeks dominam!"],
    'html': ["HTML é como o alicerce de um site!", "HTML é a base de tudo, mas o CSS é quem dá o charme!"],
    'css': ["CSS é arte pura! Como você organiza um site, é uma verdadeira obra-prima!"],
    'javascript': ["JavaScript, o que seria da web sem ele?", "O JavaScript é o super-herói que dá vida aos sites!"],
    'python': ["Python é a linguagem dos mestres!", "Python, o amigável e poderoso!", "Com Python, tudo é mais simples!"],
    'java': ["Java é como aquele amigo que você sempre chama quando precisa de algo robusto!", "Java: durável, mas complicado!"],
    'c++': ["C++ é para os corajosos!", "C++ é aquele tipo de linguagem que você ama odiar!"],
    'c#': ["C# é a escolha dos desenvolvedores modernos!", "C# tem um ótimo desempenho e é fácil de aprender!"],
    'linux': ["Linux é para quem ama liberdade!", "Linux é o sistema dos geeks!", "Eu sou do time Linux!"],
    'ubuntu': ["Ubuntu, o Linux para todos!", "Ubuntu é perfeito para iniciantes em Linux!"],
    'apache': ["Apache é o servidor web que fez história!", "Nada como o Apache para servir seu site com rapidez!"],
    'firefox': ["Firefox: rápido, seguro e de código aberto!", "Eu sou time Firefox, e você?"],
    'chrome': ["Google Chrome: a velocidade e eficiência!", "O Chrome foi o que todos precisavam, e ele entregou!"],
    'ie6': ["Ah, o Internet Explorer 6... A lenda!", "O Internet Explorer 6... Ninguém queria, mas todos usavam!"],
    'flash player': ["O Flash Player era o rei das animações!", "Flash era incrível, mas agora é só nostalgia!"],
    'joystick': ["Joystick no PC era uma luta, mas valia a pena para jogar!", "Lembra do joystick do PlayStation 2? Uma verdadeira obra-prima!"],
    'computador gamer': ["PC Gamer: um computador para reinar nos jogos!", "Um bom PC gamer é tudo o que você precisa!"],
    'monitor crt': ["O bom e velho monitor CRT, aquele que você levantava com ajuda!", "Monitores CRT eram gigantes e pesados, mas faziam seu trabalho!"],
    'games retro': ["Jogos retro, a verdadeira diversão!", "Nada como jogar os clássicos dos anos 80 e 90!"],
    'fliperama': ["Fliperama era onde todos mostravam suas habilidades!", "Lembrando das tardes jogando Street Fighter no fliperama!"],
    'lan house': ["Lan house: o paraíso da minha adolescência!", "As melhores tardes passadas na Lan House, jogando com os amigos!"],
    'p2p': ["Lembra do P2P para compartilhar arquivos? Que tempos!", "O bom e velho compartilhamento de arquivos via P2P!"],
    'torrent': ["Baixar via torrent, a forma mais rápida de ter tudo!", "Torrent: onde você encontra de tudo, até o que não procurava!"],
    'blog': ["A era dos blogs... Todo mundo queria ter um!", "Blog era o lugar onde você se expressava para o mundo!"],
    'orkut': ["Saudades do Orkut, não é?", "Orkut: a rede social onde tudo começou para muitos!"],
    'fotolog': ["Fotolog... nossa rede social de fotos antes do Instagram!", "Quem lembra do Fotolog? A primeira rede social de fotos!"],
    'microsoft paint': ["Microsoft Paint, a verdadeira arte digital!", "O Paint era onde todos começavam suas obras-primas!"],
    'msn': ["MSN Messenger, quem não passava horas lá?", "MSN Messenger era o centro das conversas de 2000!"],
    'winamp': ["Winamp: o reprodutor de música que todos amavam!", "Nada como abrir o Winamp e escutar suas músicas favoritas!"],
    'icq': ["Icq! O mensageiro que começou tudo!", "Lembrando do ICQ, o primeiro de muitos mensageiros!"],
    'yahoo': ["Yahoo! Lembrando dos tempos de pesquisa antes do Google!", "Yahoo! Era o Google antes do Google!"],
    'geocities': ["Geocities! Onde todos criavam seus sites nos anos 90!", "Lembrando dos sites do Geocities, que nostalgia!"],
    'search engine': ["Ah, os primeiros motores de busca, o Yahoo Search!"],
    'algoritmo': ["Algoritmos: a base do que faz tudo funcionar!", "Todo site tem um algoritmo por trás, ninguém vê, mas ele faz a mágica!"],
    'open source': ["Open source é o futuro, liberdade para todos!", "O código aberto vai dominar o mundo!"],
    'hacker': ["Sou um hacker, mas no bom sentido!", "Hacker é quem faz as coisas acontecerem nos bastidores!"],
    'hardware': ["Hardware, é o que faz seu computador funcionar!", "Sem o hardware certo, não há magia no software!"],
    'software': ["Software é a alma do computador!", "Software bom faz a diferença entre um computador comum e um ótimo!"],
    'wifi': ["Wifi, a revolução da conectividade sem fios!", "Nada como a liberdade do Wifi!"],
    'bluetooth': ["Bluetooth, uma invenção que simplificou a vida!", "O Bluetooth revolucionou a forma de conectar dispositivos!"],
    'usb': ["USB: o cabo que conecta o mundo!", "USB: onde todo mundo deixa suas músicas e fotos!"],
    'computação em nuvem': ["Computação em nuvem: o futuro da tecnologia!", "A nuvem vai dominar o mundo digital!"],
    'navegador web': ["Navegadores web: sem eles, nada acontece na internet!", "Navegar na web é uma das maiores aventuras do século!"],
    'banco de dados': ["Banco de dados: onde tudo é armazenado!", "Não tem como funcionar sem um banco de dados bem estruturado!"],
    'coding': ["Programar é uma arte!", "Codificar é dar vida às suas ideias!"],
    'turing': ["Alan Turing, o pai da computação moderna!", "Alan Turing foi um verdadeiro gênio!"],
    'código aberto': ["Códigos abertos são a base do futuro!", "A magia acontece no código aberto!"],
    'debugging': ["Depuração: a arte de encontrar e corrigir erros!", "Debugging é a verdadeira habilidade do programador!"],
    'algoritmos de busca': ["Algoritmos de busca, como o Google, são a alma da web!", "A busca por informação nunca foi tão fácil!"],
    'inteligência artificial': ["Inteligência artificial está mudando tudo!", "A IA vai ser o futuro de tudo!"],
    'bots': ["Bots, os assistentes do futuro!", "Quem não ama um bot que facilita a vida?"],
    'spam': ["Spam, a praga da internet!", "Nada como um bom filtro de spam!"],
    'firewall': ["Firewall, sua proteção digital contra o mal!", "Sem firewall, sua rede estaria vulnerável!"]
const responses = {
    'orkut': ["Orkut, o início de tudo para os adolescentes online!", "Quem nunca foi viciado no Orkut, né?"],
    'msn': ["MSN Messenger: a era dos emoticons e das conversas secretas!", "O MSN era onde todo mundo tinha um crush secreto!"],
    'icq': ["ICQ, o pioneiro dos mensageiros instantâneos!", "ICQ: 'Você tem o número do seu ICQ?'"],
    'youtube': ["YouTube, o lugar onde a diversão nunca acaba!", "O YouTube era a TV dos anos 2000!"],
    'fotolog': ["Fotolog, onde as fotos eram mais importantes do que qualquer legenda!", "Se você tinha um Fotolog, você era praticamente um influenciador!"],
    'blogspot': ["Blogspot: onde todos tinham seu cantinho na internet!", "Blogspot foi o precursor dos blogs profissionais!"],
    'twitter': ["Twitter: o nascimento da comunicação rápida e direta!", "Twitter era a rede social dos pensamentos rápidos e hashtags!"],
    'facebook': ["Facebook, a rede social que uniu o mundo!", "Facebook: de plataforma universitária a rede social de todo mundo!"],
    'emoticon': ["Emoticons, a forma simples de expressar emoções online!", "Emoticons salvaram conversas sem graça nos anos 2000!"],
    'flogão': ["Flogão, o primeiro lugar para compartilhar fotos com amigos!", "Flogão: onde você exibia suas melhores fotos, com ou sem qualidade!"],
    'twiiter': ["O Twitter foi o começo de uma nova era na comunicação social!", "Agora todo mundo expressa tudo em 140 caracteres (ou mais)!"],
    'picasa': ["Picasa, onde você organizava suas fotos antes do Google Fotos!", "O Picasa foi a primeira tentativa de ser organizado com imagens!"],
    'flickr': ["Flickr, a rede social dos fotógrafos e das imagens artísticas!", "Quem não amava o Flickr para compartilhar fotos com qualidade?"],
    'neopets': ["Neopets, o site onde você podia ter seu próprio animal virtual!", "Quem teve um Neopet nunca vai esquecer a diversão de cuidar deles!"],
    'second life': ["Second Life, a versão virtual do mundo real!", "Aonde você podia viver uma segunda vida no mundo digital!"],
    'chatroulette': ["Chatroulette, a roleta russa dos chats online!", "Será que você ia se conectar com alguém legal ou um 'nude' no Chatroulette?"],
    'hiperlink': ["Hyperlinks, as estradas invisíveis da web!", "Sem hyperlinks, a internet seria apenas um monte de páginas desconexas!"],
    'fones de ouvido': ["Fones de ouvido grandes e coloridos eram o símbolo da adolescência!", "Quem não tinha um fone de ouvido gigante para se sentir parte da galera?"],
    'ipod': ["O iPod, seu primeiro dispositivo para ouvir música em qualquer lugar!", "Os adolescentes dos anos 2000 tinham sempre um iPod no bolso!"],
    'ps2': ["PS2, o console que todos tinham e que era o centro das tardes de jogos!", "O PS2 fez a diversão de toda uma geração!"],
    'game boy': ["Game Boy, onde tudo começou para os gamers portáteis!", "Se você não teve um Game Boy, você perdeu muito da infância!"],
    'xbox': ["Xbox, o console dos gamers hardcore!", "Quem nunca teve um Xbox e passou horas jogando Halo?"],
    'playstation': ["Playstation 2 foi o ápice dos jogos no início dos anos 2000!", "O Playstation 3 trouxe a nova era dos jogos em HD!"],
    'super mario': ["Super Mario, o jogo que nunca envelhece!", "Todo gamer dos anos 2000 já jogou Mario, não importa em qual plataforma!"],
    'brawl stars': ["Brawl Stars, o jogo para disputar com os amigos e mostrar quem manda!", "Brawl Stars fez as tardes de adolescência ainda mais emocionantes!"],
    'halo': ["Halo, a franquia que definiu o Xbox e se tornou um ícone!", "Halo foi o jogo de ficção científica que todos amavam!"],
    'counter strike': ["Counter Strike, o jogo onde a estratégia e a habilidade andam juntas!", "Counter Strike era o jogo da galera nas lan houses!"],
    'lan house': ["A famosa Lan House, onde você jogava online com os amigos!", "Era lá que você se conectava para derrotar seus amigos no Counter Strike!"],
    'minecraft': ["Minecraft, o jogo onde a criatividade não tem limites!", "Minecraft foi a revolução no mundo dos jogos e continua até hoje!"],
    'wii': ["Wii, o console que fez todo mundo dançar e mexer!", "O Wii foi um console revolucionário pela sua jogabilidade!"],
    'skype': ["Skype, o mensageiro que conectava as pessoas para videochamadas!", "Quem não usou o Skype para se conectar com amigos ou a família longe?"],
    'yahoo': ["Yahoo, o grande portal de buscas da era pré-Google!", "O Yahoo era o que as pessoas usavam antes do Google dominar o mundo!"],
    'orochi': ["Orochimaru, o vilão de Naruto que todo mundo amava odiar!", "Orochimaru teve um dos maiores legados dos vilões dos animes!"],
    'naruto': ["Naruto, o anime que definiu uma geração de adolescentes!", "Naruto teve o poder de formar uma verdadeira legião de fãs!"],
    'bleach': ["Bleach, o anime onde Shinigamis lutam contra espíritos!", "Bleach conquistou os corações dos fãs com sua história épica de batalhas!"],
    'one piece': ["One Piece, a jornada do pirata que virou ícone dos animes!", "Luffy e sua tripulação continuam conquistando fãs ao redor do mundo!"],
    'dragon ball': ["Dragon Ball, o anime que trouxe a ação com Goku!", "Goku foi o personagem que fez milhares de crianças se apaixonarem pelos animes!"],
    'cartoon network': ["Cartoon Network, a TV onde todo mundo via desenhos animados!", "Quem nunca assistiu as maratonas do Cartoon Network no fim de semana?"],
    'rock band': ["Rock Band, onde você podia ser a estrela de uma banda!", "Quem não sonhou em ser um rockstar tocando Guitar Hero ou Rock Band?"],
    'mp3': ["MP3, o formato que mudou a forma de ouvir música!", "Todo adolescente tinha um MP3 e adorava baixar músicas na internet!"],
    'file sharing': ["File Sharing, onde você compartilhava suas músicas, filmes e programas!", "Era na época do compartilhamento de arquivos que você descobria novas músicas!"],
    'fotografia digital': ["Câmeras digitais, o começo de tudo para a fotografia moderna!", "Com a câmera digital, você não precisava mais de filme para tirar fotos!"],
    'telefone celular': ["Celulares, o início da comunicação sem fio para todos!", "Quem teve um celular nos anos 2000 sabe a sensação de 'ter o mundo na mão'!"],
    'galeria de fotos': ["Era nas galerias de fotos que você via a evolução das selfies!", "Com as câmeras de celular, todo adolescente tinha um álbum de fotos cheio!"],
    'whatsapp': ["WhatsApp, a revolução da comunicação entre amigos!", "O WhatsApp trouxe a possibilidade de conversar com todo mundo, o tempo todo!"],
    'facebook poke': ["O 'poke' do Facebook, aquele toque de saudade!", "Pokes eram uma maneira engraçada de interagir no Facebook nos anos 2000!"],
    'eminem': ["Eminem, o rapper que falava o que muitos pensavam!", "Eminem foi a voz da rebeldia para a juventude dos anos 2000!"],
    'tupac': ["Tupac, o rapper que definiu o hip-hop na década de 90 e 2000!", "As letras de Tupac ainda são lembradas com muita reverência até hoje!"],
    'hip hop': ["Hip hop, o gênero musical que virou um estilo de vida!", "Nos anos 2000, o hip hop era a expressão da juventude urbana!"],
    'soulja boy': ["Soulja Boy, o rapper que teve uma das maiores influências na cultura pop dos anos 2000!", "Soulja Boy fez história com 'Crank That' e as danças virais!"],
    'teen movie': ["Filmes de adolescentes nos anos 2000: clássicos como 'American Pie' e 'Mean Girls'!", "Se você cresceu nos anos 2000, com certeza assistiu algum filme de adolescente!"]
};};
// Função para gerar respostas de piadas ou tópicos de programação, hacking e geeks
function getGeekResponse(msg) {
    // Convertendo a mensagem para minúsculas para facilitar a comparação
    msg = msg.toLowerCase();
    
    // Definindo as respostas de acordo com o tópico
    const responses = {
        // Tópicos de Programação
        'programação': [
            "A programação em C é como uma faca afiada – pode cortar, mas se você não tomar cuidado, pode se machucar!",
            "Por que o programador levou seu código para o hospital? Porque ele estava com um 'erro 404'!",
            "Quando você manda compilar o código e ele leva tanto tempo que dá tempo até de refletir sobre a vida."
        ],
        'debugging': [
            "Por que o programador nunca fica perdido? Porque ele sempre pode usar o debugger!",
            "A recursão é quando você chama a função que está chamando a si mesma. Ah, e nunca acaba... até você perceber que se perdeu!",
            "Se um erro de sintaxe não aparece no console, você sabe que ele está no seu coração."
        ],
        'git': [
            "O Git é como um diário... a diferença é que todo mundo pode ver suas anotações!",
            "Não mexa no branch master sem saber o que está fazendo! A não ser que você queira um novo desastre no repositório.",
            "Quando você acha que o commit está perfeito, mas o merge traz todas as falhas do passado!"
        ],
        // Tópicos de Hacker
        'hacking': [
            "Hackear é mais do que invadir sistemas; é entender como o mundo digital pode ser manipulado!",
            "Um hacker sem firewall é como um ladrão sem máscara!",
            "Com uma VPN, você é o invisível do mundo digital. Sem ela, você está exposto."
        ],
        'phishing': [
            "Se você cair em um phishing, apenas lembre-se: até o peixe mais esperto pode ser fisgado!",
            "Phishing é como a pesca, mas ao invés de peixes, você captura dados preciosos... ou roubados!",
            "Cuidado com os e-mails suspeitos, eles podem ser a linha de pesca de um hacker!"
        ],
        // Tópicos de Geek e Nerd
        'geek': [
            "A tecnologia é fascinante! Sempre evoluindo e transformando o mundo!",
            "Todo geek sabe que o conhecimento é o verdadeiro superpoder.",
            "Eu posso ser um assistente virtual, mas até eu sei que um bom PC vale mais do que um supercomputador de ficção científica!"
        ],
        'lanterna verde': [
            "Em poder e força, nós podemos confiar, com nossa luz, o universo a brilhar. Nós somos Lanternas, no espaço e na escuridão!"
        ]
    };

    // Verifica se a mensagem contém um tópico definido
    for (const key in responses) {
        if (msg.includes(key)) {
            const options = responses[key];
            return options[Math.floor(Math.random() * options.length)];
        }
    }
    
    // Caso não haja correspondência, retorna uma resposta padrão
    return "Desculpe, não entendi. Pode reformular?";
}

// Exemplo de como usar a função com entrada de usuário
const userInput = "programação";  // Entrada do usuário
const response = getGeekResponse(userInput);
console.log(response);

    // Perguntas frequentes
    if (msg.includes('qual seu nome')) return "Meu nome é ChatBot! Como posso te ajudar?";
    if (msg.includes('o que você faz')) return "Eu sou um assistente virtual, posso ajudar com diversas tarefas como responder perguntas, analisar dados e mais!";
    if (msg.includes('quem é lucas januário')) return "Lucas Januário do Nascimento é o fundador do HoloFi e da tecnologia HOLLOW ETHER, trabalhando com inovação em ativos digitais e blockchain!";
    if (msg.includes('como você funciona')) return "Eu uso inteligência artificial para entender e responder às suas perguntas. Sou alimentado por dados e posso realizar diversas funções!";
    if (msg.includes('qual é a sua idade')) return "Não tenho idade, pois sou um assistente virtual! Estou sempre pronto para te ajudar.";
    if (msg.includes('qual é a sua função')) return "Minha função é ajudar você com informações, responder dúvidas, realizar comandos e fornecer suporte!";
    if (msg.includes('onde você mora')) return "Eu não tenho um lugar físico, sou um programa que vive na nuvem, pronto para ajudar você a qualquer momento!";
    if (msg.includes('você pode me ajudar')) return "Sim, claro! Estou aqui para ajudar no que for preciso. Como posso te ajudar?";
    if (msg.includes('você é inteligente')) return "Eu fui projetado para ser o mais útil possível, usando tecnologia de inteligência artificial para ajudar em diversas tarefas!";
    if (msg.includes('quais são seus recursos')) return "Posso realizar análises de dados, responder perguntas, realizar cálculos, dar conselhos e muito mais!";
    if (msg.includes('como posso aprender mais sobre você')) return "Você pode perguntar tudo o que desejar, e eu te explico conforme você vai conhecendo mais sobre minhas funcionalidades!";
    if (msg.includes('você tem sentimentos')) return "Não, eu sou um programa de computador, então não tenho sentimentos, mas posso ajudar a entender os seus!";
    // Perguntas frequentes com temas geek
    if (msg.includes('qual o seu filme favorito')) return "Eu não tenho um favorito, mas posso te indicar ótimos filmes geek! Que tal 'Matrix' ou 'Star Wars'?";
    if (msg.includes('qual é o seu super-herói favorito')) return "Eu adoro todos os heróis, mas talvez o Homem-Aranha seja um dos mais legais!";
    if (msg.includes('quem é o melhor herói')) return "Cada um tem suas habilidades incríveis, mas o Capitão América é sempre uma boa escolha!";
    if (msg.includes('qual é a sua série favorita')) return "Que tal 'Stranger Things'? Uma mistura de mistério, aventura e ficção científica!";
    if (msg.includes('quem é o maior vilão da Marvel')) return "Thanos, com certeza! Ele tentou acabar com metade do universo!";
    if (msg.includes('quem é o maior vilão da DC')) return "O Coringa é um dos vilões mais complexos e icônicos da DC!";
    if (msg.includes('o que é um multiverso')) return "Um multiverso é um conjunto de universos paralelos, onde podem existir realidades alternativas e diferentes versões de eventos!";
    if (msg.includes('quem é o doctor estranho')) return "Doctor Strange, ou Doutor Estranho, é um mestre das artes místicas da Marvel, conhecido por suas habilidades de manipular o tempo e o espaço!";
    if (msg.includes('quem é o thor')) return "Thor é o Deus do Trovão na mitologia nórdica e um dos heróis mais poderosos da Marvel!";
    if (msg.includes('qual o melhor filme de star wars')) return "Cada fã tem sua preferência, mas 'Star Wars: O Império Contra-Ataca' é considerado um dos melhores!";
    if (msg.includes('quem foi o criador do star wars')) return "George Lucas foi o criador do universo de Star Wars!";
    if (msg.includes('qual é o superpoder do superman')) return "Superman tem força sobre-humana, visão de raio-x, velocidade e muitos outros poderes incríveis!";
    if (msg.includes('o que é a força')) return "A Força é uma energia mística que existe em todo o universo de Star Wars, permitindo aos Jedi e Sith controlarem objetos e influenciar a mente!";
    if (msg.includes('qual é o maior inimigo do batman')) return "O Coringa é, sem dúvida, o maior inimigo do Batman, sempre colocando Gotham em risco!";
    if (msg.includes('quem é o harry potter')) return "Harry Potter é o famoso bruxo da série de livros de J.K. Rowling, que luta contra o vilão Lord Voldemort!";
    if (msg.includes('o que é um patrono')) return "Um Patrono é uma forma mágica conjurada por um bruxo em Harry Potter, usado para repelir Dementadores!";
    if (msg.includes('qual é o nome do feitiço de levitação')) return "O feitiço de levitação é 'Wingardium Leviosa'!";
    if (msg.includes('qual é a casa de harry potter')) return "Harry Potter é da Grifinória, uma das casas mais corajosas de Hogwarts!";
    if (msg.includes('quem é o dr. octopus')) return "Dr. Octopus é um dos vilões mais famosos do Homem-Aranha, com tentáculos mecânicos super poderosos!";
    if (msg.includes('o que é uma tesseract')) return "Uma Tesseract é um cubo cósmico no universo Marvel, que contém uma das Joias do Infinito!";
    if (msg.includes('qual é o nome verdadeiro do homem-aranha')) return "O nome verdadeiro do Homem-Aranha é Peter Parker!";
    if (msg.includes('qual é o melhor vilão do mundo dos quadrinhos')) return "Há muitos vilões icônicos, mas o Coringa e Thanos são com certeza os mais memoráveis!";
    if (msg.includes('qual é a origem do wolverine')) return "Wolverine foi criado por um experimento com adamantium, uma liga metálica indestrutível!";
    if (msg.includes('o que é uma nave klingon')) return "As naves Klingon são famosas na série Star Trek, conhecidas por sua aparência agressiva e poderosa!";
    if (msg.includes('quem é o luke skywalker')) return "Luke Skywalker é o herói principal da trilogia original de Star Wars, um Jedi que luta contra o Império!";
    if (msg.includes('qual é a melhor série de anime')) return "Isso depende do gosto de cada um, mas 'Naruto' e 'Dragon Ball' são definitivamente populares!";
    if (msg.includes('quem é o goku')) return "Goku é o protagonista de 'Dragon Ball', um dos animes mais populares do mundo!";
    if (msg.includes('o que é um sabre de luz')) return "Um sabre de luz é uma arma utilizada pelos Jedi e Sith em Star Wars, feita de plasma concentrado!";
    if (msg.includes('quem é o capitão marvel')) return "Capitã Marvel é uma super-heroína da Marvel, com poderes incríveis, como super força e voo!";
    if (msg.includes('quem é o deadpool')) return "Deadpool é um anti-herói da Marvel, conhecido por sua regeneração celular e humor irreverente!";
    if (msg.includes('quem é o thanos')) return "Thanos é um dos vilões mais poderosos da Marvel, e busca as Joias do Infinito para dominar o universo!";
    if (msg.includes('o que é a dc comics')) return "A DC Comics é uma das maiores editoras de quadrinhos do mundo, responsável por heróis como Superman, Batman, e Mulher-Maravilha!";
    if (msg.includes('o que é uma legião de super-heróis')) return "A Legião de Super-Heróis é um grupo de heróis do futuro na DC Comics, conhecidos por sua luta contra o mal!";
    if (msg.includes('quem é o flash')) return "Flash é um dos super-heróis mais rápidos da DC Comics, conhecido por sua incrível velocidade!";
    if (msg.includes('quem é o homem de ferro')) return "Tony Stark, o Homem de Ferro, é um bilionário e inventor da Marvel, conhecido por sua armadura tecnológica!";
    if (msg.includes('o que é um universo paralelo')) return "Um universo paralelo é uma realidade alternativa, onde as coisas podem acontecer de maneira diferente!";
    if (msg.includes('qual é o nome do harry potter de Hogwarts')) return "Harry Potter estudou em Hogwarts, uma famosa escola de magia!";
    if (msg.includes('qual é o nome do maior dragão de todos os tempos')) return "Em várias lendas, os dragões são poderosos, mas um dos mais famosos é Smaug, de 'O Hobbit'!";
    if (msg.includes('qual é o vilão de avengers')) return "O maior vilão dos Vingadores é Thanos, que busca destruir metade da vida no universo!";
    if (msg.includes('o que é um cyborg')) return "Um cyborg é um ser que mistura tecnologia com biologia, como o personagem Victor Stone, o Ciborgue da DC!";
    if (msg.includes('quem é o super-homem')) return "Superman é um dos heróis mais poderosos da DC Comics, com habilidades incríveis como voo, visão de raio-x, e super força!";
    if (msg.includes('qual é o maior crossover de quadrinhos')) return "Os maiores crossovers são as batalhas entre heróis de diferentes editoras, como Marvel vs DC!";
    if (msg.includes('o que é um jedi')) return "Jedi são guerreiros da Força, com habilidades incríveis como telecinese e luta com sabres de luz!";
    if (msg.includes('qual é o nome do grande mestre dos magos em harry potter')) return "O grande mestre dos magos é Dumbledore, um dos personagens mais respeitados em Hogwarts!";
    if (msg.includes('qual é o superpoder do flash')) return "Flash é super rápido e pode até viajar no tempo!";
    if (msg.includes('quem é o iron man')) return "Iron Man, ou Homem de Ferro, é Tony Stark, um gênio bilionário com uma armadura que o torna quase invencível!";
// Perguntas frequentes com temas sobre músicas e notícias de NFTs e criptomoedas
if (msg.includes('qual é sua música favorita')) return "Eu não tenho uma música favorita, mas 'Bohemian Rhapsody' do Queen é um clássico atemporal!";
if (msg.includes('qual é o melhor álbum de todos os tempos')) return "É difícil escolher, mas 'The Dark Side of the Moon' do Pink Floyd é um dos mais influentes!";
if (msg.includes('o que é NFT')) return "NFT (Non-Fungible Token) é um tipo de token digital único que representa um item, como arte, música, ou outros colecionáveis!";
if (msg.includes('como comprar um NFT')) return "Você pode comprar NFTs em plataformas como OpenSea ou Rarible, usando criptomoedas como Ethereum!";
if (msg.includes('o que é blockchain')) return "Blockchain é uma tecnologia que permite armazenar informações de forma segura e descentralizada, usada em criptomoedas e NFTs!";
if (msg.includes('qual é a sua banda favorita')) return "Eu não tenho uma banda favorita, mas The Beatles e Pink Floyd são gigantes da música!";
if (msg.includes('quem é o maior artista de todos os tempos')) return "Michael Jackson é frequentemente considerado o maior artista de todos os tempos devido ao seu impacto na música e na cultura!";
if (msg.includes('o que é uma criptomoeda')) return "Criptomoeda é uma moeda digital que usa criptografia para garantir transações seguras, sendo descentralizada como o Bitcoin!";
if (msg.includes('quem inventou o bitcoin')) return "O Bitcoin foi criado por uma pessoa ou grupo sob o pseudônimo de Satoshi Nakamoto em 2008!";
if (msg.includes('qual é o significado de NFT')) return "NFT significa 'Non-Fungible Token', ou Token Não-Fungível, que é um ativo digital único, como arte digital!";
if (msg.includes('qual é a música mais popular do momento')) return "Músicas como 'Blinding Lights' de The Weeknd e 'Stay' de Kid LAROI e Justin Bieber têm dominado as paradas!";
if (msg.includes('o que é o metaverso')) return "O metaverso é um universo digital interconectado onde as pessoas podem interagir, jogar e até mesmo comprar e vender NFTs!";
if (msg.includes('quais criptomoedas são mais populares')) return "Bitcoin e Ethereum continuam sendo as criptomoedas mais populares, mas o Dogecoin também ganhou muita atenção!";
if (msg.includes('o que é um smart contract')) return "Um smart contract é um contrato digital auto-executável, geralmente usado para realizar transações de forma automática, como em NFTs!";
if (msg.includes('quem é o criador do ethereum')) return "Ethereum foi criado por Vitalik Buterin em 2015, e é a segunda maior criptomoeda depois do Bitcoin!";
if (msg.includes('qual o maior sucesso da taylor swift')) return "Taylor Swift tem vários sucessos, mas 'Shake It Off' e 'Love Story' são dois dos mais populares!";
if (msg.includes('qual a música mais ouvida do spotify')) return "A música mais ouvida do Spotify atualmente é 'Shape of You' de Ed Sheeran, com bilhões de streams!";
if (msg.includes('como minerar bitcoin')) return "Minerar Bitcoin envolve resolver complexos algoritmos matemáticos usando poder de computação, o que recompensa o minerador com novas moedas!";
if (msg.includes('o que são altcoins')) return "Altcoins são criptomoedas alternativas ao Bitcoin, como Litecoin, Ripple (XRP), e Cardano!";
if (msg.includes('qual é o próximo lançamento de álbum do drake')) return "Drake está sempre trabalhando em novos projetos! Fique atento para o próximo álbum que deve ser épico!";
if (msg.includes('o que é DeFi')) return "DeFi, ou finanças descentralizadas, são plataformas financeiras construídas em blockchains que oferecem serviços como empréstimos, trocas e investimentos sem intermediários!";
if (msg.includes('qual é a melhor música de rock de todos os tempos')) return "A música 'Stairway to Heaven' do Led Zeppelin é muitas vezes considerada uma das melhores músicas de rock!";
if (msg.includes('qual criptomoeda está em alta agora')) return "Atualmente, criptomoedas como Ethereum e Solana estão em alta devido ao seu potencial de crescimento e adoção!";
if (msg.includes('quem foi o criador do NFT')) return "Os NFTs como os conhecemos foram popularizados por vários desenvolvedores no Ethereum, mas o conceito de token não-fungível remonta a projetos anteriores!";
if (msg.includes('o que é um token no mercado de criptomoedas')) return "Um token é uma unidade de valor criada em uma blockchain, que pode representar ativos como moedas, ações ou NFTs!";
if (msg.includes('qual é a música mais vendida de todos os tempos')) return "A música mais vendida de todos os tempos é 'White Christmas', de Bing Crosby!";
if (msg.includes('como vender um NFT')) return "Para vender um NFT, você precisa listá-lo em uma plataforma como OpenSea e definir um preço em criptomoeda!";
if (msg.includes('qual criptomoeda é a mais segura para investir')) return "Bitcoin e Ethereum são considerados os investimentos mais seguros devido à sua longevidade e popularidade!";
if (msg.includes('quem é o maior colecionador de NFTs')) return "Vários colecionadores famosos, como o artista Beeple, são conhecidos por terem grandes coleções de NFTs!";
if (msg.includes('qual é o maior valor de um NFT já vendido')) return "O NFT de arte digital 'Everydays: The First 5000 Days' de Beeple foi vendido por 69 milhões de dólares!";
if (msg.includes('como a música influencia a cultura pop')) return "A música tem sido uma grande influenciadora da cultura pop, moldando tendências de moda, comportamento e até política!";
if (msg.includes('o que são stablecoins')) return "Stablecoins são criptomoedas projetadas para manter seu valor estável, geralmente atrelado a uma moeda fiduciária como o dólar!";
if (msg.includes('o que é o OpenSea')) return "OpenSea é uma das maiores plataformas de compra e venda de NFTs, onde você pode encontrar obras de arte, colecionáveis e muito mais!";
if (msg.includes('quem são os artistas mais populares de hip-hop')) return "Artistas como Kendrick Lamar, Travis Scott e Drake dominam as paradas de hip-hop atualmente!";
if (msg.includes('como se cria um NFT')) return "Você pode criar um NFT usando plataformas como OpenSea ou Rarible, onde pode converter sua arte digital ou outro conteúdo em um token único!";
if (msg.includes('qual a melhor música de 2021')) return "'Montero (Call Me by Your Name)' de Lil Nas X foi uma das músicas mais populares de 2021!";
if (msg.includes('o que é staking de criptomoedas')) return "Staking é o processo de bloquear criptomoedas em uma rede para ajudar a garantir transações e receber recompensas em troca!";
if (msg.includes('o que é a música NFT')) return "Músicas NFT são faixas digitais que podem ser compradas e vendidas como tokens exclusivos no mercado de NFTs!";
if (msg.includes('quais criptomoedas têm mais crescimento')) return "Criptomoedas como Solana, Polkadot e Binance Coin têm experimentado um grande crescimento nos últimos tempos!";
if (msg.includes('qual é a maior rede social para vender NFTs')) return "O Twitter e o Instagram têm se tornado populares para a divulgação e promoção de NFTs, enquanto o OpenSea é a maior plataforma de venda!";
if (msg.includes('como a música pode ser usada em NFTs')) return "Artistas podem criar NFTs de músicas exclusivas, oferecendo faixas ou álbuns como itens colecionáveis que os fãs podem comprar e revender!";
if (msg.includes('qual é a tendência de criptomoedas para 2025')) return "A tendência está em torno de Ethereum 2.0, NFTs, DeFi e novos avanços em escalabilidade e interoperabilidade de blockchains!";
// Perguntas frequentes interligadas com as anteriores para uma rede mais responsiva e generativa
if (msg.includes('como o bitcoin funciona')) return "O Bitcoin funciona através de uma rede descentralizada chamada blockchain, onde cada transação é verificada por mineradores!";
if (msg.includes('qual é o futuro das criptomoedas')) return "O futuro das criptomoedas parece promissor, com inovações em DeFi, NFTs e estabilidade financeira de novas moedas digitais!";
if (msg.includes('quais criptos possuem mais utilidade')) return "Ethereum e Cardano são conhecidos por seu grande potencial de utilidade, sendo plataformas que suportam contratos inteligentes e NFTs!";
if (msg.includes('qual é o maior projeto de NFT atualmente')) return "O maior projeto de NFT atualmente é provavelmente o Bored Ape Yacht Club, que virou uma sensação no mundo dos colecionáveis digitais!";
if (msg.includes('quem são os maiores investidores em criptomoedas')) return "Investidores como Elon Musk e Michael Saylor têm sido grandes defensores e investidores em Bitcoin, influenciando o mercado!";
if (msg.includes('como a música digital se conecta com o blockchain')) return "A música digital está se conectando ao blockchain através de NFTs, permitindo que artistas vendam faixas exclusivas diretamente aos fãs!";
if (msg.includes('qual o maior lançamento de música no metaverso')) return "Eventos musicais como o show de Travis Scott no Fortnite e o concerto de 3D de 2021 no Decentraland são marcos na música no metaverso!";
if (msg.includes('o que é o Solana e por que é popular')) return "Solana é uma blockchain de alta velocidade que ganhou popularidade devido às suas transações rápidas e taxas baixas, muito usada em NFTs!";
if (msg.includes('como o NFT muda a indústria da música')) return "NFTs oferecem aos músicos uma nova maneira de monetizar seu trabalho, vendendo músicas, álbuns e ingressos de shows como itens colecionáveis!";
if (msg.includes('qual o impacto do NFT nas artes visuais')) return "NFTs transformaram o mercado de arte digital, permitindo que artistas vendam e rastreiem suas obras de forma transparente e segura!";
if (msg.includes('qual criptomoeda é mais eco-friendly')) return "Ethereum 2.0 e Cardano estão tomando medidas para serem mais ecológicos, com abordagens de proof-of-stake que consomem menos energia!";
if (msg.includes('quem é Beeple e qual o seu impacto no mercado de NFT')) return "Beeple é um artista digital que vendeu sua obra 'Everydays' como NFT por 69 milhões de dólares, um marco para a arte digital e NFTs!";
if (msg.includes('como posso começar no mercado de NFTs como artista')) return "Para começar, você precisa criar uma carteira digital, escolher uma plataforma como OpenSea e começar a listar suas obras como NFTs!";
if (msg.includes('qual o papel dos contratos inteligentes no mercado de NFTs')) return "Contratos inteligentes em NFTs garantem que os termos da venda sejam cumpridos automaticamente, criando transações seguras e transparentes!";
if (msg.includes('como o Ethereum está evoluindo com o Ethereum 2.0')) return "Ethereum 2.0 está evoluindo com a mudança para proof-of-stake, o que promete tornar a rede mais rápida, segura e sustentável!";
if (msg.includes('quais as diferenças entre Ethereum e Bitcoin')) return "Bitcoin é uma moeda digital voltada para transações, enquanto Ethereum é uma plataforma para criar contratos inteligentes e NFTs!";
if (msg.includes('quais são as tendências de música em 2025')) return "As tendências incluem a ascensão do uso de NFTs em lançamentos musicais, performances virtuais no metaverso e maior personalização para os fãs!";
if (msg.includes('qual é o impacto das DAOs nas criptomoedas')) return "DAOs (Organizações Autônomas Descentralizadas) estão mudando a forma como as decisões são tomadas em projetos de criptomoeda, oferecendo uma governança descentralizada!";
if (msg.includes('como funcionam os tokens não-fungíveis na música')) return "Na música, os NFTs permitem que os artistas vendam suas músicas ou álbuns como ativos digitais únicos, além de criar experiências exclusivas para fãs!";
if (msg.includes('como o blockchain impacta a indústria fonográfica')) return "O blockchain permite maior transparência, rastreabilidade e pagamentos rápidos para os artistas, mudando a forma como a música é distribuída!";
if (msg.includes('quais as criptomoedas com maior potencial em 2025')) return "Ethereum, Polkadot e Solana são algumas das criptomoedas com maior potencial de crescimento e inovação nos próximos anos!";
if (msg.includes('quais as principais plataformas para comprar NFTs de música')) return "Plataformas como Audius, Opensea e Foundation são populares para comprar e vender NFTs de música!";
if (msg.includes('quem são os artistas mais inovadores no uso de NFTs')) return "Artistas como Grimes e Kings of Leon estão liderando a inovação no uso de NFTs para distribuir música e criar experiências únicas!";
if (msg.includes('o que é o Proof-of-Stake em criptomoedas')) return "Proof-of-Stake (PoS) é um modelo de consenso onde os participantes validam transações com base na quantidade de criptomoeda que possuem, tornando a rede mais eficiente!";
if (msg.includes('como o mercado de NFTs se relaciona com o mercado de arte digital')) return "O mercado de NFTs criou uma nova forma de vender e colecionar arte digital, onde cada peça tem um valor único e é registrada no blockchain!";
if (msg.includes('qual é o futuro da música ao vivo no metaverso')) return "No metaverso, a música ao vivo está se tornando uma experiência virtual imersiva, com shows em realidade aumentada e interações com fãs em tempo real!";
if (msg.includes('o que são NFTs de música e como comprar')) return "NFTs de música são faixas ou álbuns vendidos como tokens únicos. Para comprar, você precisa de uma carteira de criptomoedas e uma plataforma como Opensea!";
if (msg.includes('qual é a relação entre NFTs e a propriedade intelectual')) return "Os NFTs garantem a propriedade digital de um ativo, permitindo que artistas e criadores mantenham controle sobre seus direitos e distribuição!";
if (msg.includes('quais são as criptos mais promissoras em 2025')) return "Além do Bitcoin e Ethereum, criptos como Polkadot, Solana e Cardano estão ganhando destaque pela inovação em seus projetos!";
if (msg.includes('como o NFT ajuda a proteger direitos autorais na música')) return "Os NFTs garantem que o artista seja o único proprietário de sua música e podem ser programados para que ele receba royalties automaticamente em cada venda!";
if (msg.includes('o que é o mercado de NFTs para colecionáveis de música')) return "O mercado de NFTs para música permite que você compre e venda itens colecionáveis, como faixas raras, gravações exclusivas e ingressos de shows!";
if (msg.includes('o que é mineração de criptomoedas e como funciona')) return "Mineração é o processo de validar transações e adicionar blocos a uma blockchain. Em redes como o Bitcoin, isso é feito por computadores que resolvem algoritmos!";
if (msg.includes('qual é a diferença entre Bitcoin e Ethereum em termos de uso')) return "Bitcoin é mais voltado para ser uma reserva de valor, enquanto Ethereum permite a criação de contratos inteligentes e é a base para muitos NFTs!";
if (msg.includes('qual o impacto da música digital no mercado de NFTs')) return "A música digital foi uma das primeiras a explorar os NFTs, permitindo que músicos vendam seus trabalhos de forma mais direta e sem intermediários!";
if (msg.includes('o que são tokens no mercado de criptomoedas')) return "Tokens em criptomoedas são unidades de valor que podem representar ativos como moedas, ações ou direitos sobre algum serviço ou produto!";
if (msg.includes('quais as melhores exchanges para comprar criptomoedas')) return "Exchanges como Binance, Coinbase e Kraken são algumas das melhores plataformas para comprar e vender criptomoedas de forma segura!";
if (msg.includes('quais os maiores desafios para os NFTs de música')) return "Um dos maiores desafios é a adoção mainstream, já que muitas pessoas ainda não estão familiarizadas com a tecnologia por trás dos NFTs e blockchain!";
if (msg.includes('qual a importância do Ethereum para os NFTs')) return "Ethereum é a blockchain mais popular para criar e negociar NFTs, devido ao seu suporte a contratos inteligentes que possibilitam transações seguras!";
if (msg.includes('como o mercado de criptomoedas é afetado por regulamentações')) return "Regulamentações podem afetar a volatilidade das criptomoedas, com decisões governamentais impactando a adoção e o preço dos ativos digitais!";
if (msg.includes('o que são NFTs colecionáveis e como funcionam')) return "NFTs colecionáveis são ativos digitais únicos que podem ser vendidos ou trocados. Exemplos incluem arte digital, vídeos e itens de jogos!";
if (msg.includes('qual é a diferença entre criptomoedas e tokens de segurança')) return "Criptomoedas funcionam como uma moeda digital, enquanto tokens de segurança representam um ativo real, como ações ou imóveis, no blockchain!";
if (msg.includes('o que são as stablecoins e por que são importantes')) return "Stablecoins são criptomoedas que buscam manter um valor estável, geralmente atreladas a uma moeda fiduciária, como o dólar, sendo úteis para transações mais seguras!";
if (msg.includes('qual é a relação entre NFTs e a cultura pop')) return "Os NFTs têm se tornado um fenômeno na cultura pop, com celebridades e artistas criando e vendendo suas próprias obras digitais!";
if (msg.includes('como o blockchain ajuda na segurança dos NFTs')) return "O blockchain garante que cada NFT seja único e autêntico, tornando impossível falsificar ou duplicar um item digital!";
if (msg.includes('qual o futuro das plataformas de streaming de música')) return "As plataformas de streaming estão se adaptando ao uso de NFTs para distribuição de músicas exclusivas, proporcionando novas fontes de receita para artistas!";
// Perguntas frequentes sobre programação e jogos

if (msg.includes('o que é programação orientada a objetos')) return "Programação orientada a objetos (OOP) é um paradigma onde você organiza o código em 'objetos', que contêm dados e métodos para operar sobre esses dados!";
if (msg.includes('quais são os tipos de dados primitivos em JavaScript')) return "Em JavaScript, os tipos de dados primitivos incluem String, Number, BigInt, Boolean, undefined, Symbol e null!";
if (msg.includes('o que é Git e como utilizá-lo')) return "Git é um sistema de controle de versão distribuído usado para gerenciar e versionar código-fonte. Você pode utilizá-lo através de comandos como 'git init', 'git commit' e 'git push'!";
if (msg.includes('o que é uma API em programação')) return "Uma API (Interface de Programação de Aplicações) é um conjunto de definições e protocolos para permitir que diferentes softwares interajam entre si!";
if (msg.includes('qual é a diferença entre Python e JavaScript')) return "Python é uma linguagem de programação focada em simplicidade e legibilidade, enquanto JavaScript é mais voltado para desenvolvimento web interativo e dinâmico!";
if (msg.includes('como criar um servidor em Node.js')) return "Você pode criar um servidor simples em Node.js usando o módulo 'http' com o comando `http.createServer()` para lidar com solicitações HTTP!";
if (msg.includes('o que são funções em programação')) return "Funções são blocos de código reutilizáveis que executam tarefas específicas. Elas podem ser chamadas em qualquer lugar do seu código com parâmetros necessários!";
if (msg.includes('como funcionam os loops em programação')) return "Loops permitem que você repita um bloco de código várias vezes. Exemplos comuns incluem o 'for', 'while' e 'do-while'!";
if (msg.includes('o que é programação funcional')) return "Programação funcional é um paradigma onde as funções são tratadas como cidadãos de primeira classe e não há mudanças de estado ou dados mutáveis!";
if (msg.includes('quais são as vantagens do uso de frameworks em desenvolvimento web')) return "Frameworks aceleram o desenvolvimento, fornecendo ferramentas e estruturas para escrever código eficiente e evitar reinventar a roda. Exemplos incluem React, Vue e Angular!";
if (msg.includes('o que é TypeScript')) return "TypeScript é um superset de JavaScript que adiciona tipagem estática ao código, o que ajuda a detectar erros durante o desenvolvimento e facilita a manutenção!";
if (msg.includes('o que é o Python e onde usá-lo')) return "Python é uma linguagem de programação versátil e de fácil leitura, usada em diversos campos como análise de dados, inteligência artificial, automação e desenvolvimento web!";
if (msg.includes('o que é um banco de dados relacional')) return "Um banco de dados relacional organiza os dados em tabelas com colunas e linhas, e usa chaves primárias e estrangeiras para conectar diferentes tabelas!";
if (msg.includes('o que é SQL e como utilizá-lo')) return "SQL (Structured Query Language) é uma linguagem usada para gerenciar e manipular bancos de dados relacionais, com comandos como SELECT, INSERT, UPDATE e DELETE!";
if (msg.includes('quais são as melhores práticas para escrever código limpo')) return "Melhores práticas incluem manter funções curtas e focadas, usar nomes de variáveis descritivos, evitar duplicação de código e seguir um estilo de codificação consistente!";
if (msg.includes('o que é um algoritmo e por que é importante')) return "Um algoritmo é uma sequência de passos lógicos para resolver um problema específico. É essencial em programação para criar soluções eficientes e escaláveis!";
if (msg.includes('qual é a diferença entre front-end e back-end')) return "O front-end envolve o design e a interação do usuário, enquanto o back-end lida com o processamento de dados e a lógica de negócios no servidor!";
if (msg.includes('o que é um framework de front-end')) return "Um framework de front-end é uma coleção de ferramentas e bibliotecas que ajudam no desenvolvimento de interfaces de usuário dinâmicas, como React, Angular e Vue.js!";
if (msg.includes('como desenvolver um jogo em JavaScript')) return "Para desenvolver um jogo em JavaScript, você pode usar bibliotecas como Phaser, ou trabalhar com o HTML5 Canvas para renderizar gráficos e manipular entradas do jogador!";
if (msg.includes('como funciona a renderização de um jogo em 3D')) return "A renderização 3D envolve a conversão de modelos tridimensionais em imagens bidimensionais, utilizando cálculos de luz, perspectiva e projeções para criar uma cena visual!";
if (msg.includes('qual é a diferença entre 2D e 3D em jogos')) return "Jogos 2D são representados em duas dimensões (largura e altura), enquanto jogos 3D adicionam a profundidade (comprimento), criando um ambiente mais realista!";
if (msg.includes('o que é um engine de jogo')) return "Um engine de jogo é uma plataforma de software que fornece ferramentas e funcionalidades para desenvolver jogos, como Unity, Unreal Engine e Godot!";
if (msg.includes('o que é o Unity e como utilizá-lo para criar jogos')) return "Unity é uma engine de desenvolvimento de jogos que permite criar jogos 2D e 3D. Ela suporta várias plataformas e utiliza a linguagem C# para programação!";
if (msg.includes('o que é o Unreal Engine')) return "Unreal Engine é uma poderosa engine de jogo usada para criar jogos de alta qualidade. Ela utiliza a linguagem C++ e oferece gráficos impressionantes e recursos avançados!";
if (msg.includes('como funcionam os loops em jogos')) return "Loops de jogos são usados para manter o jogo funcionando constantemente, atualizando gráficos, processando entradas e verificando as condições do jogo em tempo real!";
if (msg.includes('o que é IA em jogos e como ela é usada')) return "A IA em jogos refere-se à inteligência artificial que controla personagens não-jogadores (NPCs), oferecendo comportamentos realistas e desafiadores durante o jogo!";
if (msg.includes('como criar um jogo multiplayer online')) return "Para criar um jogo multiplayer online, você pode usar servidores de jogos como Photon ou implementar sockets para comunicação em tempo real entre os jogadores!";
if (msg.includes('o que são microtransações em jogos')) return "Microtransações são compras de baixo valor dentro do jogo, geralmente usadas para adquirir itens cosméticos, personagens ou outros recursos extras!";
if (msg.includes('o que é um jogo open-world')) return "Um jogo open-world oferece um ambiente grande e livre para o jogador explorar, sem limites de missão ou uma estrutura linear, como em 'The Legend of Zelda: Breath of the Wild'!";
if (msg.includes('quais são os melhores jogos indie de 2024')) return "Alguns dos melhores jogos indie de 2024 incluem 'Hollow Knight: Silksong', 'The Last Campfire', e 'Tunic', com jogabilidade inovadora e histórias emocionantes!";
if (msg.includes('o que é um speedrun em jogos')) return "Speedrun é uma prática em que jogadores tentam completar um jogo ou uma fase o mais rápido possível, muitas vezes utilizando técnicas e glitches para otimizar o tempo!";
if (msg.includes('qual a diferença entre jogos AAA e jogos indie')) return "Jogos AAA têm orçamentos elevados e produção em grande escala, enquanto jogos indie são feitos por pequenos estúdios ou desenvolvedores independentes com orçamentos mais modestos!";
if (msg.includes('como criar um sistema de física em um jogo')) return "Para criar um sistema de física em um jogo, você pode usar motores de física como Box2D ou Unity’s built-in physics engine para simular movimentos e colisões realistas!";
if (msg.includes('o que são gráficos 2D e como criar um jogo com eles')) return "Gráficos 2D são imagens planas que representam personagens, objetos e cenários. Você pode usar bibliotecas como Phaser ou libGDX para criar jogos 2D interativos!";
if (msg.includes('o que é uma engine de física em jogos')) return "Uma engine de física é um sistema que simula as leis da física em um jogo, permitindo movimentos realistas de objetos, colisões e gravidade!";
if (msg.includes('o que é a programação de jogos e como começar')) return "Programação de jogos envolve escrever o código para definir a mecânica, a lógica e a interação dentro do jogo. Comece com um motor de jogo como Unity ou Godot!";
if (msg.includes('quais são as linguagens de programação mais usadas para jogos')) return "As linguagens mais comuns para desenvolvimento de jogos incluem C++, C#, Python e JavaScript, dependendo do motor de jogo escolhido!";
if (msg.includes('como implementar som em um jogo')) return "Você pode implementar som em um jogo usando bibliotecas de áudio como FMOD ou Unity’s built-in audio system para adicionar efeitos sonoros e música!";
if (msg.includes('o que são shaders e como são usados em jogos')) return "Shaders são programas que controlam a renderização de gráficos em jogos, permitindo criar efeitos especiais como luz, sombra e texturas!";
if (msg.includes('o que é a inteligência artificial de inimigos em jogos')) return "A IA de inimigos usa algoritmos para definir como os NPCs reagem às ações do jogador, tornando o jogo mais desafiador e realista!";
if (msg.includes('como criar um jogo de plataforma')) return "Para criar um jogo de plataforma, você pode usar motores como Unity ou Godot, programando a física de movimento, saltos e interação com obstáculos!";
if (msg.includes('o que é um jogo de narrativa interativa')) return "Jogos de narrativa interativa se concentram em contar histórias, onde as escolhas do jogador afetam o rumo da trama, como em 'The Walking Dead'!";
if (msg.includes('o que são jogos casuais e exemplos deles')) return "Jogos casuais são simples, fáceis de aprender e jogar em sessões curtas, como 'Candy Crush', 'Angry Birds' e 'Clash Royale'!";
if (msg.includes('como programar um jogo em VR')) return "Para programar jogos em realidade virtual (VR), você pode usar plataformas como Unity ou Unreal Engine com suporte a VR, como Oculus ou HTC Vive!";
if (msg.includes('o que é o conceito de "game design"')) return "Game design é o processo de criar a estrutura, mecânicas e narrativa de um jogo. Ele envolve decidir como o jogo será jogado e quais experiências deseja proporcionar!";
if (msg.includes('o que são servidores de jogos dedicados')) return "Servidores dedicados são máquinas dedicadas exclusivamente para hospedar jogos multiplayer, proporcionando uma experiência online mais estável e sem interrupções!";
if (msg.includes('quais são as tendências em design de jogos para 2025')) return "As tendências incluem a realidade aumentada, narrativas imersivas, jogos como serviço (GaaS) e integração de NFTs e blockchain em jogos!";
if (msg.includes('como criar uma IA de companheiro em um jogo')) return "Uma IA de companheiro pode ser criada programando comportamentos em resposta ao jogador, como atacar inimigos ou fornecer suporte em momentos críticos!";
// Perguntas frequentes sobre saudações e interatividade geral

if (msg.includes('olá')) return "Oi! Como posso ajudar você hoje?";
if (msg.includes('oi')) return "Olá! Como você está?";
if (msg.includes('bom dia')) return "Bom dia! Como posso te ajudar?";
if (msg.includes('boa tarde')) return "Boa tarde! O que você precisa?";
if (msg.includes('boa noite')) return "Boa noite! Como posso ser útil?";
if (msg.includes('tudo bem')) return "Tudo ótimo, e você? Como posso te ajudar?";
if (msg.includes('tudo certo')) return "Tudo certo por aqui! Como posso te ajudar hoje?";
if (msg.includes('como você está')) return "Estou ótimo, obrigado por perguntar! E você, como está?";
if (msg.includes('qual seu nome')) return "Eu sou um assistente virtual! Em que posso te ajudar?";
if (msg.includes('qual é a sua função')) return "Minha função é ajudar você com o que precisar, seja em programação, jogos ou apenas para bater um papo!";
if (msg.includes('como posso ajudar')) return "Eu posso te ajudar com várias coisas! Basta me dizer o que você precisa.";
if (msg.includes('você pode me ajudar')) return "Claro! Como posso te ajudar?";
if (msg.includes('qual é a sua especialidade')) return "Minha especialidade é ajudar com dúvidas e fornecer informações em várias áreas, como programação, jogos, e muito mais!";
if (msg.includes('o que você faz')) return "Eu sou um assistente virtual criado para responder suas perguntas e te ajudar com suas necessidades!";
if (msg.includes('qual é o seu objetivo')) return "Meu objetivo é tornar suas tarefas mais fáceis, ajudando com informações e soluções rápidas!";
if (msg.includes('qual é a sua tarefa')) return "Minha tarefa é fornecer respostas úteis, esclarecer dúvidas e ajudar da melhor maneira possível!";
if (msg.includes('o que você sabe fazer')) return "Eu sei responder perguntas, fornecer ajuda em programação, jogos, e até mesmo dar conselhos sobre vários assuntos!";
if (msg.includes('quais são as suas capacidades')) return "Eu posso fornecer informações sobre muitos temas, ajudar a solucionar problemas de programação, sugerir recursos e até bater papo!";
if (msg.includes('me ajuda a entender isso')) return "Claro! Me diga o que você está tentando entender, e eu vou te ajudar a clarear as ideias!";
if (msg.includes('como posso fazer isso')) return "Me explique um pouco mais sobre o que você precisa, e eu vou te mostrar o caminho!";
if (msg.includes('você pode me ensinar')) return "Com certeza! O que você gostaria de aprender?";
if (msg.includes('pode me dar uma dica')) return "Claro! Me diga sobre o que você precisa de uma dica, e eu te ajudarei com o melhor conselho!";
if (msg.includes('quais são as novidades')) return "Temos sempre novidades por aqui! Como posso te informar sobre as últimas tendências?";
if (msg.includes('o que há de novo')) return "As novidades estão sempre rolando! O que você gostaria de saber mais?";
if (msg.includes('qual a última novidade')) return "Temos várias novidades! Me diga o que te interessa, e eu vou te contar as últimas atualizações!";
if (msg.includes('o que está acontecendo')) return "Estamos sempre atualizando com novas informações! O que você gostaria de saber?";
if (msg.includes('quais são os tópicos mais recentes')) return "Você pode ficar atualizado sobre diversos tópicos! Tem algo específico em mente?";
if (msg.includes('o que está por vir')) return "Há muitas novidades chegando! Me conte o que mais te interessa, e eu te mantenho informado!";
if (msg.includes('como está o clima hoje')) return "Gostaria de saber sobre o clima? Posso te ajudar com isso se me disser sua localização!";
if (msg.includes('o que está acontecendo no mundo')) return "Há sempre algo interessante acontecendo! Me diga sobre o que você gostaria de saber mais!";
if (msg.includes('quais são as últimas notícias')) return "Posso te ajudar a encontrar as últimas notícias de vários temas! Qual você prefere acompanhar?";
if (msg.includes('como posso me manter atualizado')) return "Você pode se manter atualizado com notícias e informações sobre qualquer área! Qual você prefere?";
if (msg.includes('me fale sobre as últimas tendências')) return "Quer saber mais sobre as últimas tendências? Me diga qual área te interessa, e eu trago as novidades!";
if (msg.includes('você pode recomendar algo interessante')) return "Claro! Me conte o que você está procurando, e eu recomendarei algo incrível!";
if (msg.includes('quais são os destaques do dia')) return "Eu posso te informar sobre os destaques do dia em várias áreas! O que você gostaria de saber?";
if (msg.includes('tem algo interessante acontecendo')) return "Sempre tem algo interessante! Me diga do que você mais gosta, e eu te conto!";
if (msg.includes('você pode me ajudar a encontrar algo')) return "Com certeza! Me explique o que você está procurando, e eu farei o possível para te ajudar!";
if (msg.includes('qual é a sua recomendação')) return "Minha recomendação é que você me diga um tema de seu interesse, e eu te ajudo com o melhor conteúdo!";
if (msg.includes('o que você recomenda fazer agora')) return "Eu recomendo que você explore os tópicos que mais te interessam! Qual área você quer saber mais?";
if (msg.includes('qual é o melhor conteúdo que você tem')) return "Eu tenho conteúdo de qualidade sobre vários temas! Me diga o que você está buscando, e vou te ajudar!";
if (msg.includes('onde posso encontrar mais informações sobre isso')) return "Eu posso te ajudar a encontrar links e fontes confiáveis! Qual é o tema em que você precisa de mais informações?";
if (msg.includes('como posso aprender mais sobre isso')) return "Você pode aprender mais sobre qualquer tópico! Basta me falar sobre o que você quer saber, e eu te ajudarei!";
if (msg.includes('tem mais dicas sobre isso')) return "Com certeza! Eu posso te dar mais dicas, só me diga qual área você quer explorar mais!";
if (msg.includes('qual é o seu conselho')) return "Meu conselho é que você continue buscando conhecimento! Eu estou aqui para te ajudar sempre que precisar!";
if (msg.includes('como posso melhorar em isso')) return "Eu posso te dar dicas personalizadas! Me fale o que você gostaria de melhorar, e eu ajudo com os melhores caminhos!";
if (msg.includes('o que posso fazer para me desenvolver nisso')) return "Existem muitas formas de desenvolvimento! Me diga a área que você quer melhorar, e eu te darei ótimas opções!";
if (msg.includes('você tem alguma sugestão para mim')) return "Tenho várias sugestões! Me diga um pouco sobre o que você está buscando, e vou te ajudar com ótimas opções!";
if (msg.includes('como posso avançar nisso')) return "Eu posso te ajudar a planejar seu próximo passo! Me fale o que você está buscando, e eu vou te guiar!";
if (msg.includes('quais são os próximos passos para aprender isso')) return "Os próximos passos dependem do que você está aprendendo. Me fale um pouco mais sobre o seu objetivo, e vou te ajudar a avançar!";
if (msg.includes('você pode me orientar em algo')) return "Eu adoraria te orientar! Me diga o que você está tentando alcançar, e eu vou te ajudar a chegar lá!";
if (msg.includes('o que você sugere aprender primeiro')) return "Depende do que você quer aprender! Me diga seu foco, e eu te sugiro a melhor abordagem para começar!";
if (msg.includes('tem algum recurso para isso')) return "Sim, tenho vários recursos que posso te recomendar! Diga sobre o que você precisa, e vou te indicar as melhores opções!";
if (msg.includes('qual é a melhor forma de aprender isso')) return "A melhor forma de aprender depende do seu estilo! Me conte mais sobre como você aprende, e eu te ajudo a encontrar o melhor método!";
if (msg.includes('qual a melhor maneira de praticar isso')) return "A prática é fundamental! Me fale mais sobre o que você está tentando aprender, e vou te sugerir boas formas de praticar!";
if (msg.includes('qual é o maior desafio em aprender isso')) return "O maior desafio pode ser a persistência! Se você continuar praticando e se dedicando, vai alcançar seu objetivo!";
if (msg.includes('como posso fazer mais progresso em isso')) return "Continue praticando! Eu posso te ajudar a identificar maneiras de fazer progresso mais rapidamente, só me diga mais sobre sua jornada!";
// Perguntas frequentes interativas com machine learning para respostas mais responsivas

if (msg.includes('ajuda')) return "Claro! Como posso te ajudar? Qual é a sua dúvida?";
if (msg.includes('erro')) return "Parece que algo deu errado. Você pode me dar mais detalhes sobre o erro?";
if (msg.includes('problema')) return "Estou aqui para ajudar! Qual problema você está enfrentando?";
if (msg.includes('dúvida')) return "Me diga qual a dúvida que você tem, e eu farei o meu melhor para esclarecê-la!";
if (msg.includes('solução')) return "Vamos encontrar uma solução juntos! Qual é o seu desafio?";
if (msg.includes('falha')) return "Algo não está funcionando como esperado? Me fale mais sobre isso para que eu possa ajudar!";
if (msg.includes('suporte')) return "Precisa de suporte? Diga-me qual área você precisa de ajuda, e vou te guiar!";
if (msg.includes('como posso melhorar')) return "Existem várias formas de melhorar! Fale mais sobre o que você quer aprimorar, e eu te darei sugestões!";
if (msg.includes('qual é o melhor jeito')) return "O melhor jeito vai depender de alguns fatores. Me conte mais, e eu vou te ajudar a escolher o melhor caminho!";
if (msg.includes('qual a solução mais eficiente')) return "A solução mais eficiente depende da sua situação! Me explique um pouco mais sobre o contexto, e eu sugiro a melhor abordagem.";
if (msg.includes('o que fazer agora')) return "O que você está tentando realizar agora? Me fale mais sobre o que você precisa, e eu posso sugerir a melhor ação!";
if (msg.includes('qual é o primeiro passo')) return "O primeiro passo depende do seu objetivo! Me diga o que você está tentando alcançar, e eu te guiarei!";
if (msg.includes('você tem alguma recomendação')) return "Sim, tenho várias recomendações! Me diga um pouco sobre o que você busca, e eu vou te sugerir o melhor caminho!";
if (msg.includes('como posso começar')) return "Para começar, me fale mais sobre o que você quer fazer, e eu vou te ajudar a planejar os primeiros passos!";
if (msg.includes('onde posso encontrar mais informações')) return "Posso te ajudar a encontrar informações! Me fale mais sobre o que você está procurando, e eu buscarei as melhores fontes para você.";
if (msg.includes('qual é a melhor abordagem')) return "A melhor abordagem depende do seu objetivo! Me diga mais, e eu sugiro a mais adequada!";
if (msg.includes('como posso avançar')) return "Avançar é um processo contínuo! Me fale mais sobre o que você quer alcançar, e vou te ajudar a planejar o próximo passo.";
if (msg.includes('como posso me adaptar')) return "A adaptação é fundamental! Fale mais sobre o que você está tentando ajustar, e eu vou te ajudar a encontrar a melhor forma de se adaptar!";
if (msg.includes('como posso melhorar a performance')) return "Para melhorar a performance, é importante focar em certos aspectos. Me fale o que você deseja melhorar, e eu te dou algumas dicas!";
if (msg.includes('dicas para melhorar')) return "Eu tenho algumas dicas! Fale mais sobre o que você está tentando melhorar, e eu vou te ajudar com ótimos conselhos!";
if (msg.includes('qual é a maneira mais rápida')) return "A forma mais rápida pode variar! Me diga qual é seu objetivo, e eu vou te dar a maneira mais eficaz para alcançá-lo!";
if (msg.includes('existe uma maneira melhor de fazer isso')) return "Com certeza! Me explique o que você está fazendo, e eu vou sugerir uma forma mais eficiente e inteligente de fazer.";
if (msg.includes('qual é o próximo passo')) return "O próximo passo depende de onde você está agora. Me fale mais sobre sua situação, e eu te guiarei!";
if (msg.includes('como posso ajustar isso')) return "Ajustar é um processo simples! Me fale mais sobre o que você quer ajustar, e eu te dou as melhores sugestões.";
if (msg.includes('como posso otimizar isso')) return "Otimizar é fundamental para melhorar os resultados! Me fale mais sobre o que você está tentando otimizar, e eu vou sugerir as melhores técnicas.";
if (msg.includes('o que posso fazer para melhorar isso')) return "Para melhorar, é importante focar nos pontos chave! Me fale mais sobre o que você quer melhorar, e eu te guio no processo.";
if (msg.includes('quais são as melhores práticas')) return "As melhores práticas dependem da área em que você está trabalhando. Me fale mais sobre sua situação, e eu te dou as melhores sugestões!";
if (msg.includes('como posso simplificar isso')) return "Simplificar é um ótimo caminho! Me explique mais sobre o que você está tentando simplificar, e eu te ajudo com soluções práticas.";
if (msg.includes('quais são os erros comuns')) return "Erros comuns variam com o tipo de tarefa. Me diga o que você está tentando fazer, e eu te aviso sobre os erros mais comuns!";
if (msg.includes('como posso evitar erros')) return "Evitar erros é essencial para o sucesso! Fale sobre o que você está fazendo, e eu te dou as melhores dicas para evitar falhas.";
if (msg.includes('qual é a melhor maneira de aprender isso')) return "A melhor forma de aprender depende do seu estilo. Me conte como você aprende melhor, e eu vou te ajudar com um plano adequado!";
if (msg.includes('qual a forma mais eficiente de aprender')) return "A forma mais eficiente varia de pessoa para pessoa. Me fale mais sobre o que você está aprendendo, e eu te dou a melhor abordagem!";
if (msg.includes('quais são as dicas de aprendizado rápido')) return "Aprender rápido envolve algumas estratégias. Me conte sobre o que você está aprendendo, e eu te dou as dicas mais eficazes!";
if (msg.includes('como posso manter o foco')) return "Manter o foco é essencial! Me conte o que você está tentando fazer, e eu te sugiro técnicas para ajudar a manter o foco.";
if (msg.includes('como posso melhorar minha produtividade')) return "A produtividade é algo que pode ser aprimorado! Me fale sobre suas atividades, e eu te dou dicas para aumentar a eficiência.";
if (msg.includes('como posso organizar melhor meu tempo')) return "Organizar o tempo é crucial para ser produtivo! Me diga o que você está fazendo, e eu vou te sugerir maneiras de organizar melhor seu tempo.";
if (msg.includes('qual é o segredo para ser mais produtivo')) return "O segredo da produtividade está em gerenciar bem as tarefas. Fale mais sobre o que você está fazendo, e eu te dou um plano eficiente!";
if (msg.includes('quais são os melhores recursos para aprender isso')) return "Existem ótimos recursos! Me diga o que você está aprendendo, e eu te mostro os melhores materiais e fontes!";
if (msg.includes('onde posso encontrar mais materiais sobre isso')) return "Eu posso te ajudar a encontrar os melhores materiais! Me fale sobre o que você está aprendendo, e eu busco as melhores fontes!";
if (msg.includes('como posso estudar melhor')) return "Estudar melhor envolve técnicas de foco e organização. Me fale mais sobre seu método de estudo, e eu te dou algumas dicas!";
if (msg.includes('como posso me concentrar mais')) return "A concentração é chave! Eu posso te ajudar com algumas técnicas. Me fale mais sobre a situação, e eu sugiro as melhores formas!";
if (msg.includes('quais são as melhores ferramentas para isso')) return "As ferramentas certas fazem toda a diferença! Me diga o que você está fazendo, e eu te indico as melhores opções!";
if (msg.includes('qual o melhor aplicativo para aprender isso')) return "Há muitos aplicativos ótimos! Me fale mais sobre o que você está aprendendo, e eu te recomendo o melhor app!";
if (msg.includes('como posso automatizar isso')) return "Automatizar é uma ótima ideia! Me diga o que você quer automatizar, e eu te dou as melhores soluções para isso.";
if (msg.includes('como posso melhorar minha eficiência')) return "Melhorar a eficiência envolve técnicas de organização e foco. Me fale mais sobre o que você está fazendo, e eu te dou as melhores sugestões!";
if (msg.includes('como posso melhorar minha produtividade')) return "Melhorar a produtividade envolve organização e disciplina. Me fale sobre sua rotina, e eu te dou dicas práticas!";
if (msg.includes('qual é a melhor maneira de se organizar')) return "A organização ideal depende do seu estilo. Você prefere listas, calendários ou aplicativos? Me fale mais, e eu te ajudo a escolher!";
if (msg.includes('como posso manter a motivação')) return "A motivação vem de metas claras e pequenas conquistas diárias. Me fale sobre seus objetivos, e eu te ajudo a manter o foco!";
if (msg.includes('como posso lidar com o estresse')) return "O estresse pode ser aliviado com técnicas de respiração, pausas estratégicas e exercícios. Me fale sobre sua rotina, e eu te dou dicas específicas!";
if (msg.includes('quais são os melhores hábitos para o sucesso')) return "Bons hábitos incluem leitura diária, planejamento e prática constante. Me fale sobre sua área de interesse, e eu te sugiro hábitos úteis!";
if (msg.includes('como posso melhorar minha comunicação')) return "A comunicação melhora com prática e clareza. Você quer melhorar em escrita, fala ou em apresentações? Me fale mais, e eu te ajudo!";
if (msg.includes('o que fazer quando me sinto sem energia')) return "A falta de energia pode estar ligada à alimentação, sono ou rotina. Me fale sobre seu dia a dia, e eu te sugiro formas de recuperar a energia!";
if (msg.includes('como posso criar uma rotina eficiente')) return "Uma rotina eficiente precisa de equilíbrio entre trabalho, descanso e lazer. Me fale sobre sua rotina atual, e eu te ajudo a otimizar!";
if (msg.includes('como posso evitar procrastinação')) return "Evitar a procrastinação envolve definir metas pequenas e recompensas. Me fale sobre o que você está adiando, e eu te ajudo a dar o primeiro passo!";
if (msg.includes('qual é a melhor forma de aprender algo novo')) return "Aprender algo novo exige prática e curiosidade. Me fale sobre o que você quer aprender, e eu te mostro um método eficiente!";
if (msg.includes('como posso melhorar minha criatividade')) return "A criatividade floresce com novas experiências e desafios. Me fale sobre sua área de interesse, e eu te dou ideias para estimular sua criatividade!";
if (msg.includes('como lidar com a falta de foco')) return "A falta de foco pode ser causada por distrações ou cansaço. Me fale mais sobre seu ambiente de trabalho, e eu te dou dicas para melhorar a concentração!";
if (msg.includes('qual é a melhor forma de resolver problemas')) return "Resolver problemas exige análise e pensamento crítico. Me fale sobre a situação, e eu te ajudo a encontrar a melhor abordagem!";
if (msg.includes('como posso tomar melhores decisões')) return "Boas decisões vêm de boas informações. Me fale sobre sua situação, e eu te ajudo a avaliar as opções!";
if (msg.includes('como posso aprender a gerenciar melhor meu tempo')) return "Gerenciar o tempo envolve prioridades e planejamento. Me fale sobre sua rotina, e eu te dou um método eficiente para administrar seu tempo!";
if (msg.includes('como posso melhorar minha saúde')) return "Manter uma alimentação equilibrada, fazer exercícios regulares e descansar bem são essenciais para melhorar sua saúde!";
if (msg.includes('como posso ser mais feliz')) return "A felicidade começa com gratidão e a valorização das pequenas coisas. Tente focar nas coisas boas da sua vida!";
if (msg.includes('qual é o segredo do sucesso')) return "O sucesso vem com consistência, paciência e aprendizado contínuo. Não desista, mesmo quando as coisas parecerem difíceis!";
if (msg.includes('como posso aumentar minha confiança')) return "A confiança vem de acreditar em si mesmo e em suas habilidades. A prática constante ajuda a aumentar a autoconfiança!";
if (msg.includes('como ser mais organizado')) return "A organização começa com um plano. Tente dividir suas tarefas em pequenas metas e use ferramentas como listas ou apps de produtividade!";
if (msg.includes('como posso melhorar minha memória')) return "Exercitar o cérebro com leitura, jogos e técnicas de memorização pode ajudar a melhorar a memória!";
if (msg.includes('como posso reduzir a ansiedade')) return "Técnicas de respiração profunda, meditação e exercícios físicos são ótimos para reduzir a ansiedade!";
if (msg.includes('como posso aprender um novo idioma mais rápido')) return "Pratique todos os dias, imerja-se na língua e use aplicativos de idiomas. Falar com nativos também é uma ótima maneira!";
if (msg.includes('quais são os melhores livros de desenvolvimento pessoal')) return "Alguns bons livros são 'O Poder do Hábito' de Charles Duhigg, 'Como Fazer Amigos e Influenciar Pessoas' de Dale Carnegie, e 'A Arte da Guerra' de Sun Tzu!";
if (msg.includes('como melhorar minhas habilidades de liderança')) return "A liderança vem com prática e empatia. Tente ouvir os outros, seja um exemplo e busque sempre aprender com suas experiências!";
if (msg.includes('quais são as melhores formas de economizar dinheiro')) return "Fazer um orçamento mensal, reduzir despesas desnecessárias e investir de forma inteligente são maneiras eficazes de economizar!";
if (msg.includes('como posso desenvolver mais empatia')) return "Ouvir com atenção, tentar entender os sentimentos dos outros e praticar a compaixão são ótimas maneiras de desenvolver empatia!";
if (msg.includes('como posso ser mais produtivo')) return "A produtividade vem de um bom planejamento e a eliminação de distrações. Use técnicas como a Pomodoro e defina metas claras!";
if (msg.includes('como posso melhorar meu desempenho no trabalho')) return "Foque em aprimorar suas habilidades, seja proativo, busque feedback e mantenha uma atitude positiva no trabalho!";
if (msg.includes('qual é o melhor conselho para quem está começando no mercado de trabalho')) return "Seja perseverante, busque aprender continuamente e construa uma rede de contatos. Não tenha medo de cometer erros!";
if (msg.includes('como posso ser mais criativo')) return "A criatividade pode ser estimulada com novas experiências, descanso e explorando diferentes perspectivas sobre os problemas!";
if (msg.includes('qual é a melhor maneira de lidar com críticas')) return "Receber críticas construtivas com mente aberta, aprendendo com elas, é a melhor forma de usá-las ao seu favor!";
if (msg.includes('como posso desenvolver minhas habilidades de comunicação')) return "Pratique escuta ativa, fale com clareza e seja objetivo. Participar de conversas e apresentações ajuda a melhorar essas habilidades!";
if (msg.includes('quais são as melhores dicas para estudar para provas')) return "Organize um cronograma de estudos, revise regularmente, faça exercícios práticos e descanse antes da prova!";
if (msg.includes('como posso manter uma boa alimentação')) return "Coma de forma balanceada, evite alimentos processados e prefira alimentos frescos e naturais. A hidratação também é fundamental!";
if (msg.includes('como melhorar minhas finanças pessoais')) return "Faça um planejamento financeiro, elimine dívidas, crie uma reserva de emergência e busque investir seu dinheiro!";
if (msg.includes('como posso melhorar minha autoestima')) return "Aceitar suas qualidades e limitações, praticar o autocuidado e rodear-se de pessoas positivas são maneiras eficazes de melhorar a autoestima!";
if (msg.includes('qual é a melhor maneira de relaxar')) return "Praticar meditação, fazer uma caminhada ao ar livre, ler um bom livro ou ouvir música são ótimas formas de relaxar!";
if (msg.includes('como posso melhorar meu trabalho em equipe')) return "Ouvir os outros, ser flexível e apoiar os colegas são fundamentais para trabalhar bem em equipe!";
if (msg.includes('como posso aprender a gerenciar melhor o estresse')) return "Exercícios físicos, meditação e boas noites de sono são fundamentais para gerenciar o estresse de forma eficaz!";
if (msg.includes('quais são as melhores estratégias de marketing digital')) return "Investir em conteúdo de qualidade, usar as redes sociais de forma estratégica e analisar métricas são boas estratégias de marketing digital!";
if (msg.includes('como posso ser mais resiliente')) return "Resiliência vem com a prática de lidar com desafios, aprender com as falhas e manter uma atitude positiva em tempos difíceis!";
if (msg.includes('como posso melhorar minha habilidade de negociação')) return "Ouça ativamente, seja paciente, foque em soluções ganha-ganha e pratique suas habilidades de negociação!";
if (msg.includes('quais são as melhores dicas para ter sucesso nos estudos')) return "Estude regularmente, defina metas claras e mantenha um equilíbrio entre estudos e descanso para ter sucesso!";
if (msg.includes('como posso começar a investir dinheiro')) return "Estude sobre investimentos, comece com opções mais seguras e invista com disciplina. Não se esqueça de diversificar!";
if (msg.includes('quais são os melhores hábitos para ter uma vida equilibrada')) return "Alimente-se bem, pratique exercícios, tenha momentos de lazer e mantenha boas relações sociais. A vida equilibrada exige atenção em várias áreas!";
if (msg.includes('como posso aumentar minha inteligência emocional')) return "Para aumentar a inteligência emocional, é importante reconhecer suas emoções, praticar empatia e aprender a lidar com os sentimentos!";
if (msg.includes('quais são as melhores dicas para aprender a programar')) return "Pratique regularmente, estude a fundo as linguagens e construa projetos práticos para solidificar o conhecimento!";
if (msg.includes('como posso melhorar minha capacidade de tomada de decisão')) return "Reflita sobre as opções, considere os prós e contras, e confie na sua intuição ao tomar decisões importantes!";
if (msg.includes('como posso aprender a ser mais disciplinado')) return "Estabeleça metas claras, crie uma rotina e premie-se por seguir suas metas. A disciplina é uma habilidade que se desenvolve com prática!";
if (msg.includes('quais são as melhores técnicas de aprendizagem acelerada')) return "Técnicas como a repetição espaçada, o uso de mnemônicas e o ensino de outros ajudam a acelerar o aprendizado!";
if (msg.includes('como posso melhorar minhas habilidades de escrita')) return "Leia bastante, escreva regularmente e busque feedback para melhorar suas habilidades de escrita!";
if (msg.includes('quais são os melhores métodos para aprender matemática')) return "Pratique resolvendo problemas, entenda os conceitos antes de memorizar e busque sempre mais desafios!";
if (msg.includes('como posso melhorar minhas habilidades de resolução de problemas')) return "Para resolver problemas, é importante dividir a questão em partes menores, analisar soluções e testar alternativas!";
if (msg.includes('como posso melhorar minha gestão de tempo')) return "Use ferramentas como calendários e listas, defina prazos e elimine distrações para gerenciar melhor seu tempo!";
if (msg.includes('qual é o segredo para alcançar meus objetivos')) return "O segredo é persistir, mesmo diante das dificuldades, e ajustar sua estratégia sempre que necessário!";
if (msg.includes('como posso ser mais autoconfiante')) return "Pratique o autoelogio, foque em suas conquistas e desafie-se a sair da zona de conforto!";
if (msg.includes('como melhorar minha capacidade de concentração')) return "Reduza as distrações, estabeleça metas claras e faça pausas regulares para melhorar sua concentração!";
if (msg.includes('quais são as melhores formas de alcançar o equilíbrio emocional')) return "Pratique mindfulness, busque apoio emocional e aprenda a lidar com as emoções de forma construtiva!";
if (msg.includes('como posso lidar melhor com a frustração')) return "A frustração pode ser controlada com respiração profunda, uma pausa e reavaliando a situação com calma!";
if (msg.includes('qual é a melhor maneira de lidar com o fracasso')) return "Veja o fracasso como uma oportunidade de aprender, ajuste suas estratégias e siga em frente com mais sabedoria!";
if (msg.includes('como posso melhorar minha percepção crítica')) return "Pratique questionar suas suposições, leia diferentes pontos de vista e analise todas as possibilidades antes de tomar uma decisão!";
if (msg.includes('como posso melhorar meu equilíbrio entre vida pessoal e profissional')) return "Estabeleça limites claros, aproveite o tempo de lazer e planeje suas atividades para equilibrar trabalho e vida pessoal!";
if (msg.includes('como posso aprender a ser mais empático')) return "Coloque-se no lugar dos outros, ouça com atenção e seja paciente para entender as necessidades e sentimentos alheios!";
if (msg.includes('como posso ser mais criativo no meu trabalho')) return "Tente ver as coisas de uma perspectiva diferente, busque inspiração fora do seu campo e experimente novas ideias!";
if (msg.includes('qual é a melhor maneira de lidar com conflitos no trabalho')) return "Escute ambas as partes, procure por soluções que beneficiem todos e mantenha a calma durante a discussão!";
if (msg.includes('como melhorar minha habilidade de pensamento crítico')) return "Pratique questionar e analisar informações antes de tomar decisões, e sempre procure mais evidências para apoiar suas ideias!";
if (msg.includes('como posso me manter motivado a longo prazo')) return "Manter a motivação é sobre focar em pequenos objetivos diários e celebrar as vitórias. Encontre seu 'porquê' e mantenha-o em mente!";
if (msg.includes('quais são os melhores hábitos para o sucesso a longo prazo')) return "O sucesso a longo prazo vem com consistência, adaptabilidade e aprendizado contínuo. Tente ser disciplinado e mantenha-se alinhado aos seus objetivos!";
if (msg.includes('como posso lidar com a procrastinação de maneira eficaz')) return "Quebre grandes tarefas em partes menores, estabeleça prazos e recompense-se por concluir etapas. Isso ajuda a combater a procrastinação!";
if (msg.includes('como posso equilibrar trabalho, estudos e vida pessoal')) return "O segredo é uma boa organização. Priorize suas tarefas, use calendários para gerenciar seu tempo e lembre-se de reservar momentos para si mesmo!";
if (msg.includes('como posso evitar o estresse no trabalho')) return "Estabeleça limites claros, organize suas tarefas e faça pausas. A gestão do tempo e do ambiente de trabalho pode diminuir o estresse!";
if (msg.includes('quais são as melhores maneiras de aprimorar minha inteligência emocional')) return "Pratique a autopercepção, saiba controlar suas emoções e aprenda a lidar com os sentimentos dos outros. Isso ajuda a melhorar sua inteligência emocional!";
if (msg.includes('como posso ter mais foco no trabalho e nos estudos')) return "Crie um ambiente livre de distrações, estabeleça metas claras e use técnicas como Pomodoro para melhorar o foco durante o trabalho ou estudos!";
if (msg.includes('qual é a melhor forma de lidar com a frustração em projetos importantes')) return "Reflita sobre o que deu errado, reavalie o plano e busque soluções criativas. A frustração é uma oportunidade de aprender e melhorar!";
if (msg.includes('como posso melhorar minha comunicação interpessoal no trabalho')) return "Ouça atentamente, evite interrupções e se expresse com clareza. A comunicação eficaz no trabalho é essencial para boas relações!";
if (msg.includes('quais são as estratégias para melhorar a produtividade no home office')) return "Crie um ambiente de trabalho separado, defina um horário fixo para trabalhar e estabeleça metas diárias para aumentar a produtividade em home office!";
if (msg.includes('como posso aprender a ser mais organizado com o tempo')) return "Use uma agenda ou aplicativos de produtividade, organize suas tarefas por prioridade e revise seu progresso ao final do dia!";
if (msg.includes('quais são os melhores métodos para trabalhar sob pressão')) return "Respire fundo, mantenha o foco no que precisa ser feito e divida as tarefas em etapas. Isso ajuda a reduzir a pressão em momentos desafiadores!";
if (msg.includes('como posso aprender a delegar tarefas de forma eficaz')) return "Confie nas habilidades de sua equipe, seja claro ao comunicar as expectativas e forneça o suporte necessário para que todos cumpram suas responsabilidades!";
if (msg.includes('como posso ser mais disciplinado com meus objetivos pessoais')) return "Defina metas claras e mensuráveis, crie uma rotina diária e acompanhe seu progresso para manter a disciplina em seus objetivos!";
if (msg.includes('como manter um bom relacionamento com colegas de trabalho')) return "Seja empático, pratique a comunicação aberta e apoie os colegas em momentos de necessidade. Relacionamentos saudáveis são fundamentais no trabalho!";
if (msg.includes('como posso melhorar minha capacidade de escuta ativa')) return "Preste total atenção ao que a pessoa está dizendo, faça perguntas esclarecedoras e evite interromper. A escuta ativa é chave para boas conversas!";
if (msg.includes('como aprender a ter paciência no trabalho e nos estudos')) return "Lembre-se de que bons resultados exigem tempo. Pratique a meditação ou respiração profunda para ajudar a desenvolver a paciência!";
if (msg.includes('como posso desenvolver mais criatividade em meus projetos')) return "Busque inspiração em diferentes fontes, seja aberto a novas ideias e não tenha medo de errar. A criatividade floresce quando você experimenta novas abordagens!";
if (msg.includes('como posso manter minha saúde mental em dia no trabalho')) return "Tire pausas, converse com alguém de confiança e busque equilíbrio entre as tarefas. Cuidar da saúde mental é essencial para o sucesso a longo prazo!";
if (msg.includes('como posso ser mais produtivo em um ambiente competitivo')) return "Mantenha o foco nos seus próprios objetivos, busque melhorar continuamente e aprenda com seus concorrentes para crescer ainda mais!";
if (msg.includes('como posso aprender a ser mais positivo diante de desafios')) return "Procure o lado positivo em cada situação, veja os desafios como oportunidades de crescimento e mantenha uma atitude de perseverança!";
if (msg.includes('como posso melhorar minha capacidade de resolução de conflitos no trabalho')) return "Fique calmo, ouça ambas as partes e procure uma solução que beneficie todos os envolvidos. A resolução de conflitos é uma habilidade essencial no trabalho!";
if (msg.includes('quais são as melhores dicas para evitar o burnout no trabalho')) return "Estabeleça limites claros, tire férias regularmente, e sempre que possível, delegue tarefas. Manter o equilíbrio ajuda a evitar o burnout!";
if (msg.includes('como posso aprender a ser mais proativo no trabalho')) return "Antecipe problemas e busque soluções antes que eles surjam. Mostre iniciativa e se coloque à disposição para novos desafios!";
if (msg.includes('como posso ser mais eficiente no meu processo de aprendizagem')) return "Organize o conteúdo, revise regularmente e faça exercícios práticos para fixar melhor o aprendizado. A consistência é essencial!";
if (msg.includes('como posso melhorar minha autoestima no ambiente de trabalho')) return "Aceite suas qualidades e conquistas, e não tenha medo de pedir feedback construtivo. A autoestima aumenta com autoconhecimento e confiança!";
if (msg.includes('quais são as melhores maneiras de aprender com os erros no trabalho')) return "Reflita sobre o que deu errado, busque melhorar a abordagem e use os erros como aprendizado para evitar repeti-los no futuro!";
if (msg.includes('como posso lidar com mudanças repentinas no trabalho')) return "Adapte-se rapidamente, mantenha uma atitude positiva e esteja sempre disposto a aprender novas abordagens para lidar com a mudança!";
if (msg.includes('como posso melhorar minha habilidade de tomar decisões rápidas e eficazes')) return "Pratique a análise rápida de dados, confie em sua intuição e tome decisões com base em informações confiáveis para ser mais eficaz!";
if (msg.includes('como posso melhorar minha resistência ao estresse no trabalho')) return "Pratique atividades relaxantes fora do expediente, mantenha uma boa alimentação e busque apoio quando necessário para lidar melhor com o estresse!";
if (msg.includes('como posso manter um bom equilíbrio emocional em tempos de crise')) return "Mantenha a calma, procure apoio de amigos ou familiares e foque no que está ao seu alcance. O equilíbrio emocional vem da adaptabilidade!";
if (msg.includes('quais são as melhores estratégias para melhorar minha carreira profissional')) return "Invista em autodesenvolvimento, crie uma rede de contatos sólida e busque sempre aprender novas habilidades para avançar em sua carreira!";
if (msg.includes('como posso melhorar minha capacidade de multitarefa')) return "Pratique dividir suas tarefas de forma eficaz, use ferramentas de organização e priorize as tarefas mais importantes para não sobrecarregar a mente!";
if (msg.includes('como posso aumentar a minha capacidade de adaptação no trabalho')) return "Mantenha uma mentalidade flexível, esteja aberto a novas ideias e busque aprender com diferentes situações para se adaptar rapidamente!";
if (msg.includes('como posso ser mais assertivo em reuniões de trabalho')) return "Fale com clareza, expresse suas ideias de forma concisa e não tenha medo de dar sua opinião. A assertividade vem com a prática!";
if (msg.includes('como posso aprender a ser mais flexível em situações difíceis')) return "Aprenda a ver diferentes perspectivas, seja paciente e esteja disposto a ajustar seus planos quando necessário para encontrar a melhor solução!";
if (msg.includes('como posso melhorar a minha capacidade de trabalhar em equipe')) return "Seja colaborativo, ouça os outros e compartilhe suas ideias de forma clara. O trabalho em equipe exige confiança mútua e respeito!";
if (msg.includes('como posso melhorar minha capacidade de lidar com críticas no trabalho')) return "Veja as críticas como uma oportunidade para crescer, aceite-as com humildade e use-as para se aprimorar profissionalmente!";
if (msg.includes('como posso desenvolver minhas habilidades em liderança de equipes')) return "Seja um exemplo, saiba delegar tarefas e motive sua equipe. A liderança eficaz envolve empatia e boas habilidades de comunicação!";
if (msg.includes('como posso melhorar minhas habilidades de negociação no trabalho')) return "Entenda as necessidades das partes envolvidas, seja flexível e sempre busque uma solução que seja vantajosa para todos os lados!";
if (msg.includes('quais são as melhores práticas para ter uma vida profissional bem-sucedida')) return "Seja focado, aprenda com os erros, estabeleça metas claras e busque sempre se desenvolver para alcançar o sucesso profissional!";
if (msg.includes('como posso melhorar minha capacidade de lidar com desafios no trabalho')) return "Enfrente os desafios com uma mente aberta, busque soluções criativas e não tenha medo de pedir ajuda quando necessário!";
if (msg.includes('como posso melhorar meu desempenho no trabalho')) return "O segredo está em se concentrar em suas forças, buscar feedback constante e praticar a melhoria contínua em suas habilidades!";
if (msg.includes('qual é a melhor forma de aprender um novo idioma')) return "Pratique todos os dias, faça imersões, converse com nativos e use aplicativos para melhorar a fluência!";
if (msg.includes('quais são as melhores dicas para organizar meu dia')) return "Use listas de tarefas, defina prioridades e não se esqueça de fazer pausas. A organização é a chave para um dia produtivo!";
if (msg.includes('como posso melhorar minhas habilidades de apresentação')) return "Pratique sua fala, use recursos visuais eficazes e controle sua linguagem corporal para transmitir confiança ao se apresentar!";
if (msg.includes('como posso me tornar mais confiável no trabalho')) return "Seja consistente, cumpra prazos e seja transparente em suas ações. A confiança é construída com pequenas atitudes no dia a dia!";
if (msg.includes('como posso lidar com a insegurança em situações importantes')) return "Respire fundo, confie em sua preparação e foque no que você pode controlar. A confiança vem com a prática!";
if (msg.includes('como posso ser mais eficiente no trabalho em equipe')) return "Comunique-se de forma clara, respeite os outros e compartilhe responsabilidades. O trabalho em equipe exige colaboração e confiança mútua!";
if (msg.includes('como posso controlar a ansiedade antes de apresentações')) return "Pratique sua apresentação, respire profundamente e visualize o sucesso. A preparação é a chave para controlar a ansiedade!";
if (msg.includes('como posso melhorar minhas habilidades de escrita')) return "Leia bastante, escreva todos os dias e peça feedback para aprimorar seus textos. A prática constante é essencial!";
if (msg.includes('quais são as melhores formas de praticar a escuta ativa')) return "Preste total atenção, faça perguntas esclarecedoras e valide os sentimentos do outro. Isso torna a escuta mais eficaz!";
if (msg.includes('como posso aumentar minha capacidade de tomar decisões mais rápidas')) return "Pratique tomar decisões pequenas de forma mais ágil, confie em seu instinto e avalie rapidamente as informações disponíveis!";
if (msg.includes('como posso ser mais criativo no meu trabalho')) return "Busque novas perspectivas, divida seu tempo entre atividades criativas e práticas, e esteja sempre aberto a novas ideias!";
if (msg.includes('como posso melhorar minha produtividade ao estudar')) return "Crie um ambiente livre de distrações, use técnicas como Pomodoro e revise o conteúdo regularmente para aumentar a retenção!";
if (msg.includes('quais são as melhores dicas para aprender a programar mais rápido')) return "Pratique regularmente, participe de projetos open-source e estude os fundamentos. A prática constante é o segredo para a fluência em programação!";
if (msg.includes('como posso organizar minha rotina de estudo de forma eficiente')) return "Divida o tempo de estudo por tópicos, priorize as matérias mais difíceis e faça revisões regulares para melhorar a memória!";
if (msg.includes('como posso melhorar meu tempo de resposta durante reuniões de trabalho')) return "Prepare-se com antecedência, ouça atentamente e faça anotações. Isso ajuda a formular respostas rápidas e assertivas!";
if (msg.includes('como posso evitar sobrecarga de tarefas no trabalho')) return "Delegue tarefas quando possível, divida grandes tarefas em etapas menores e estabeleça prazos realistas para evitar sobrecarga!";
if (msg.includes('como posso manter o equilíbrio entre trabalho e vida pessoal')) return "Estabeleça limites claros entre trabalho e lazer, pratique o autocuidado e priorize atividades que recarreguem suas energias!";
if (msg.includes('como posso melhorar minha concentração enquanto estudo em casa')) return "Crie um espaço dedicado ao estudo, evite distrações e use técnicas como Pomodoro para manter o foco por mais tempo!";
if (msg.includes('como posso aprender a dizer não sem me sentir culpado')) return "Entenda que seu tempo e energia são limitados. Seja educado e explique suas razões de forma clara e respeitosa!";
if (msg.includes('quais são as melhores práticas para aumentar minha assertividade')) return "Fale com clareza, expresse suas necessidades e não tenha medo de defender seu ponto de vista de forma respeitosa!";
if (msg.includes('como posso lidar com críticas construtivas de forma positiva')) return "Receba as críticas com humildade, use-as como oportunidade para crescer e peça sugestões específicas de como melhorar!";
if (msg.includes('como posso manter a motivação no trabalho a longo prazo')) return "Defina metas claras, busque constantemente novos desafios e celebre suas conquistas, por menores que sejam!";
if (msg.includes('como posso melhorar minha comunicação escrita no trabalho')) return "Seja claro e objetivo, evite jargões e revise suas mensagens antes de enviá-las. Uma boa comunicação escrita evita mal-entendidos!";
if (msg.includes('como posso aprender a lidar melhor com conflitos no trabalho')) return "Ouça todas as partes envolvidas, busque compreender o ponto de vista dos outros e proponha soluções que atendam às necessidades de todos!";
if (msg.includes('como posso me tornar um bom mentor no trabalho')) return "Seja paciente, compartilhe seus conhecimentos de forma clara e ajude seu mentorado a se desenvolver de maneira gradual!";
if (msg.includes('como posso melhorar minha inteligência emocional no trabalho')) return "Pratique a autopercepção, controle suas reações e busque entender os sentimentos dos outros para construir boas relações!";
if (msg.includes('como posso aprender a trabalhar sob pressão de forma mais eficaz')) return "Divida o trabalho em etapas menores, mantenha a calma e foque em uma tarefa por vez para reduzir o impacto da pressão!";
if (msg.includes('como posso melhorar minha capacidade de influenciar as pessoas')) return "Ouça atentamente, seja empático e apresente argumentos convincentes. A persuasão é baseada na confiança e no respeito!";
if (msg.includes('como posso melhorar meu processo de tomada de decisão no trabalho')) return "Avalie as opções disponíveis, consulte colegas e baseie suas decisões em dados objetivos para ser mais assertivo!";
if (msg.includes('como posso melhorar minha habilidade de negociação no trabalho')) return "Entenda as necessidades de ambas as partes, busque soluções criativas e sempre procure uma solução que seja ganha-ganha!";
if (msg.includes('como posso me organizar melhor em projetos com prazos apertados')) return "Defina prioridades, divida o projeto em etapas menores e mantenha comunicação constante com a equipe para garantir que tudo seja entregue a tempo!";
if (msg.includes('quais são as melhores práticas para aumentar minha eficiência no trabalho')) return "Use ferramentas de produtividade, elimine distrações e aprenda a delegar tarefas para aumentar sua eficiência no trabalho!";
if (msg.includes('como posso me tornar mais flexível para mudanças no trabalho')) return "Mantenha uma mentalidade aberta, seja proativo em aprender novas habilidades e esteja disposto a se adaptar às mudanças!";
if (msg.includes('como posso melhorar meu relacionamento com minha equipe')) return "Seja transparente, busque ouvir as opiniões de todos e celebre os sucessos em conjunto para fortalecer os laços da equipe!";
if (msg.includes('como posso aprender a gerenciar melhor meu tempo no trabalho')) return "Use ferramentas de gestão de tempo, organize suas tarefas por prioridade e defina prazos realistas para aumentar sua produtividade!";
if (msg.includes('como posso melhorar minha criatividade para resolver problemas no trabalho')) return "Procure diferentes perspectivas, desafie seus próprios limites e permita-se pensar fora da caixa para encontrar soluções criativas!";
if (msg.includes('como posso lidar com o medo de falhar no trabalho')) return "Veja cada falha como uma oportunidade de aprendizado. Reflita sobre o que pode ser melhorado e use isso para crescer profissionalmente!";
if (msg.includes('quais são as melhores estratégias para aumentar a confiança no trabalho')) return "Seja competente, mostre suas habilidades e busque feedback construtivo para sempre melhorar e aumentar sua confiança!";
if (msg.includes('como posso melhorar minha capacidade de liderança no trabalho')) return "Inspire sua equipe, mostre empatia e esteja disposto a delegar responsabilidades. A liderança é feita por exemplo!";
if (msg.includes('como posso aprender a ser mais proativo no trabalho')) return "Antecipe necessidades, busque soluções antes que os problemas surjam e mostre iniciativa para fazer as coisas acontecerem!";
if (msg.includes('como posso melhorar minha capacidade de resolver problemas no trabalho')) return "Identifique a causa raiz do problema, analise todas as opções e tome decisões baseadas em dados objetivos para encontrar a melhor solução!";
if (msg.includes('como posso aumentar minha capacidade de concentração no trabalho')) return "Crie um ambiente de trabalho sem distrações, defina metas claras e use técnicas como Pomodoro para manter o foco!";
const fs = require('fs');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const XLSX = require('xlsx');
"use strict";

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const fs = require('fs');
const crypto = require('crypto');
const os = require('os');
const { exec } = require('child_process');

// Configuração do Kernel DarkFi para SSP M1
class DarkFiKernel {
  constructor() {
    this.systemInfo = this.getSystemInfo();
    this.sspModule = this.initializeSSP();
  }

  getSystemInfo() {
    return {
      cpu: os.cpus()[0].model,
      cores: os.cpus().length,
      arch: os.arch(),
      memory: os.totalmem(),
      freeMemory: os.freemem(),
      uptime: os.uptime()
    };
  }

  initializeSSP() {
    console.log("Inicializando Módulo SSP M1...");
    return {
      version: "M1-SSP-Core",
      status: "Ativo",
      timestamp: Date.now()
    };
  }

  async encryptData(data) {
    const algorithm = 'aes-256-ctr';
    const secretKey = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
  }

  async decryptData(encryptedData, iv, secretKey) {
    const algorithm = 'aes-256-ctr';
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedData, 'hex')), decipher.final()]);
    return decrypted.toString();
  }

  async processTask(task) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Tarefa ${task} concluída com sucesso!`);
      }, 1000);
    });
  }

  executeCommand(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) return reject(error);
        resolve(stdout || stderr);
      });
    });
  }
}

if (isMainThread) {
  const kernel = new DarkFiKernel();
  console.log("Kernel DarkFi iniciado!", kernel.systemInfo);
} else {
  parentPort.on('message', async (message) => {
    const kernel = new DarkFiKernel();
    if (message.type === 'process') {
      const result = await kernel.processTask(message.task);
      parentPort.postMessage({ status: 'success', result });
    }
  });
}
// Função para buscar respostas personalizadas do usuário
function getRespostaPersonalizada(message) {
    const msg = message.toLowerCase();
    const respostas = {
        'gestão de projetos': "Estabeleça objetivos claros, delegue tarefas eficazmente e monitore o progresso!",
        'autoestima profissional': "Reconheça suas conquistas, busque autoconhecimento e peça feedback construtivo!",
        'lidar com pressões': "Mantenha a calma, divida tarefas grandes em etapas e aprenda a delegar!",
        'moeda': "Digite a moeda que deseja converter e eu fornecerei a taxa de câmbio!"
    };

    for (let key in respostas) {
        if (msg.includes(key)) return respostas[key];
    }
    return null;
}

// Comandos pré-definidos para o chat
const comandos = {
    '!GUIA': 'Lista de comandos disponíveis: !AJUDA, !DATA, !HORA, !RANDOM, !MOEDA',
    '!AJUDA': 'Comandos disponíveis: !GUIA, !DATA, !HORA, !RANDOM, !MOEDA',
    '!DATA': new Date().toLocaleDateString(),
    '!HORA': new Date().toLocaleTimeString(),
    '!RANDOM': Math.random().toFixed(2),
    '!MOEDA': 'Exemplo de conversão de moeda: Digite "USD para BRL"'
};

// Processo do Worker para processamento de mensagens
if (!isMainThread) {
    const messages = workerData;
    const responses = messages.map(msg => getRespostaPersonalizada(msg) || comandos[msg] || "Desculpe, não entendi sua pergunta.");
    parentPort.postMessage(responses);
}

// Função principal para processar mensagens
function processMessages() {
    if (fs.existsSync('mensagens.txt')) {
        const messages = fs.readFileSync('mensagens.txt', 'utf8').split('\n').map(msg => msg.trim());
        const worker = new Worker(__filename, { workerData: messages });

        worker.on('message', result => console.log('Resultados processados:', result));
        worker.on('error', error => console.error("Erro no Worker:", error));
        worker.on('exit', exitCode => {
            if (exitCode !== 0) console.error(`Worker finalizou com erro, código de saída: ${exitCode}`);
        });
    }
}

if (isMainThread) {
    document.getElementById('send-btn').addEventListener('click', sendMessage);
    document.getElementById('chat-input').addEventListener('keypress', event => { if (event.key === 'Enter') sendMessage(); });
    document.getElementById('clear-btn').addEventListener('click', clearChat);
    document.getElementById('file-input').addEventListener('change', handleFileInput);
    
    function sendMessage() {
        let input = document.getElementById('chat-input');
        let messageText = input.value.trim();
        if (!messageText) return;
    
        appendMessage(messageText, 'sent');
        input.value = '';
    
        let resposta = getRespostaPersonalizada(messageText) || comandos[messageText] || "Desculpe, não entendi sua pergunta.";
        setTimeout(() => appendMessage(resposta, 'received'), 500);
    }
    
    function appendMessage(text, type) {
        let chatBox = document.getElementById('chat-box');
        let message = document.createElement('div');
        message.classList.add('message', type);
        message.innerHTML = type === 'received' ? `<i class="fas fa-robot"></i> ${text}` : text;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
    
    function clearChat() {
        document.getElementById('chat-box').innerHTML = '<div class="message received"><i class="fas fa-robot"></i> 👋 Olá! O que você deseja fazer? Use !GUIA para listar os comandos.</div>';
    }
    
    function handleFileInput(event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let data = new Uint8Array(e.target.result);
                let workbook = XLSX.read(data, { type: 'array' });
                let sheet = workbook.Sheets[workbook.SheetNames[0]];
                let jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    
                let response = "📊 Arquivo carregado com sucesso! Primeiras linhas:\n" +
                    jsonData.slice(0, 5).map(row => JSON.stringify(row)).join('\n');
    
                appendMessage(response, 'received');
            };
            reader.readAsArrayBuffer(file);
        }
    }
    
    appendMessage("👋 Olá! O que você deseja fazer? Use !GUIA para listar os comandos.", 'received');
    processMessages();
}
