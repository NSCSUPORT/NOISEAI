// Simulação de contrato com saldos de investidores
const contract = {
  investors: ['Lucas', 'Maria', 'João'],  // Lista de investidores
  balances: [1000, 2000, 1500]  // Saldo de cada investidor
};

// Variáveis de comandos do chat
const comandos = {
  "!GUIA": "Aqui estão alguns comandos disponíveis: !COMANDO1 - Descrição, !COMANDO2 - Descrição.",
  "!COMANDO1": "Você ativou o COMANDO1. O que deseja fazer?",
  "!COMANDO2": "Você ativou o COMANDO2. Por favor, forneça mais informações."
};

// Função para responder com mensagens personalizadas
function getRespostaPersonalizada(messageText) {
  if (messageText.includes("saldo de")) {
    let investidor = messageText.replace("saldo de", "").trim();
    let index = contract.investors.indexOf(investidor);
    if (index !== -1) {
      return `O saldo de ${investidor} é R$ ${contract.balances[index].toFixed(2)}.`;
    } else {
      return `Investidor ${investidor} não encontrado.`;
    }
  }
  return null;
}

// Função para inicializar o chat
function iniciarChat() {
  document.getElementById('chat-box').innerHTML = '<div class="message received"><i class="fas fa-robot"></i> 👋 Olá! O que você deseja fazer? Use !GUIA para listar os comandos.</div>';
}

// Função para iniciar o envio de mensagens do chat
function sendMessage() {
  let input = document.getElementById('chat-input');
  let messageText = input.value.trim();
  if (!messageText) return;

  appendMessage(messageText, 'sent');
  input.value = '';

  // Comandos conhecidos
  if (comandos[messageText]) {
    setTimeout(() => {
      appendMessage(comandos[messageText], 'received');
    }, 500);
  } else {
    // Resposta personalizada
    let respostaPersonalizada = getRespostaPersonalizada(messageText);
    if (respostaPersonalizada) {
      setTimeout(() => {
        appendMessage(respostaPersonalizada, 'received');
      }, 500);
    } else {
      // Resposta padrão do bot
      setTimeout(() => {
        appendMessage("Desculpe, não entendi a sua pergunta.", 'received');
      }, 500);
    }
  }
}

// Função para enviar mensagens e exibir no chat
function appendMessage(text, type) {
  let chatBox = document.getElementById('chat-box');
  let message = document.createElement('div');
  message.classList.add('message', type);
  message.innerHTML = type === 'received' ? `<i class="fas fa-robot"></i> ${text}` : text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Inicia o chat ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
  iniciarChat();

  // Adiciona eventos aos botões de interação
  document.getElementById('send-btn').addEventListener('click', sendMessage);
  document.getElementById('chat-input').addEventListener('keypress', handleEnterKey);
  document.getElementById('clear-btn').addEventListener('click', clearChat);
});

// Função para detectar pressionamento de "Enter"
function handleEnterKey(event) {
  if (event.key === 'Enter') sendMessage();
}

// Função para limpar o chat
function clearChat() {
  document.getElementById('chat-box').innerHTML = '<div class="message received"><i class="fas fa-robot"></i> 👋 Olá! O que você deseja fazer? Use !GUIA para listar os comandos.</div>';
}




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
// Função para buscar respostas personalizadas do usuário
function getRespostaPersonalizada(message) {
  const msg = message.toLowerCase();

  if (msg.includes('como posso melhorar minha gestão de projetos no trabalho')) {
    return "Estabeleça objetivos claros, delegue tarefas eficazmente e monitore o progresso de cada fase para garantir que os projetos sejam entregues a tempo!";
  }
  if (msg.includes('como posso melhorar minha autoestima no ambiente profissional')) {
    return "Reconheça suas conquistas, busque autoconhecimento e peça feedback construtivo para crescer pessoal e profissionalmente!";
  }
  if (msg.includes('como posso melhorar minha capacidade de lidar com pressões no trabalho')) {
    return "Mantenha a calma, divida tarefas grandes em etapas e aprenda a delegar para reduzir a pressão e aumentar sua eficiência!";
  }
  if (msg.includes('moeda')) {
    return "Digite a moeda que deseja converter e eu fornecerei a taxa de câmbio!";
  }
  return null;
}

// Comandos pré-definidos para o chat
const comandos = {
  '!GUIA': 'Lista de comandos disponíveis: !AJUDA, !DATA, !HORA, !RANDOM, !MOEDA, !ALL',
  '!AJUDA': 'Comandos disponíveis: !GUIA, !DATA, !HORA, !RANDOM, !MOEDA, !ALL',
  '!DATA': new Date().toLocaleDateString(),
  '!HORA': new Date().toLocaleTimeString(),
  '!RANDOM': Math.random(),
  '!MOEDA': 'Exemplo de conversão de moeda: Digite "USD para BRL"'
};

// Função para processar mensagens (exemplo com Worker)
function processMessages() {
  // Supondo que as mensagens estão sendo lidas de um arquivo ou outro método de entrada
  const messages = fs.readFileSync('mensagens.txt', 'utf8').split('\n').map(msg => msg.trim());
  const worker = new Worker(__filename, { workerData: messages });

  worker.on('message', result => {
    console.log('Resultados processados:');
    console.log(result);
  });

  worker.on('error', (error) => {
    console.error("Erro no Worker:", error);
  });

  worker.on('exit', (exitCode) => {
    if (exitCode !== 0) {
      console.error(`Worker finalizou com erro, código de saída: ${exitCode}`);
    }
  });
}

// Processo do Worker para processamento de mensagens
if (!isMainThread) {
  const messages = workerData;
  const responses = messages.map(msg => {
    // Verifica se há uma resposta personalizada para a mensagem
    let resposta = getRespostaPersonalizada(msg);
    if (resposta) return resposta;

    // Caso não haja resposta personalizada, verifica comandos predefinidos
    for (let comando in comandos) {
      if (msg.includes(comando.toLowerCase())) {
        return comandos[comando];
      }
    }
    return "Desculpe, não entendi a sua pergunta.";
  });

  parentPort.postMessage(responses);
}

// Se for o processo principal, inicia o processamento e define os eventos da interface
if (isMainThread) {
  // Instancia e inicializa o contrato de investimentos
  const contract = new InvestmentContract();
  contract.initializeContract();

  // Processa alguns investimentos para teste
  contract.processInvestment('Alice', 200);    // Investimento válido
  contract.processInvestment('Bob', 100);      // Investidor não autorizado
  contract.processInvestment('Charlie', 2000); // Saldo insuficiente

  // Manipulação do arquivo de entrada para chat
  document.getElementById('file-input').addEventListener('change', handleFileInput);
  document.getElementById('send-btn').addEventListener('click', sendMessage);
  document.getElementById('chat-input').addEventListener('keypress', handleEnterKey);
  document.getElementById('clear-btn').addEventListener('click', clearChat);

  // Função para enviar mensagem
  function sendMessage() {
    let input = document.getElementById('chat-input');
    let messageText = input.value.trim();
    if (!messageText) return;

    appendMessage(messageText, 'sent');
    input.value = '';

    // Se o comando existir, responde automaticamente
    if (comandos[messageText]) {
      setTimeout(() => {
        appendMessage(comandos[messageText], 'received');
      }, 500);
    } else {
      let respostaPersonalizada = getRespostaPersonalizada(messageText);
      if (respostaPersonalizada) {
        setTimeout(() => {
          appendMessage(respostaPersonalizada, 'received');
        }, 500);
      }
    }
  }

  // Função para tratar o pressionar da tecla Enter
  function handleEnterKey(event) {
    if (event.key === 'Enter') sendMessage();
  }

  // Função para limpar o chat
  function clearChat() {
    document.getElementById('chat-box').innerHTML = '<div class="message received"><i class="fas fa-robot"></i> 👋 Olá! O que você deseja fazer? Use !GUIA para listar os comandos.</div>';
  }

  // Função para adicionar mensagem no chat
  function appendMessage(text, type) {
    let chatBox = document.getElementById('chat-box');
    let message = document.createElement('div');
    message.classList.add('message', type);
    message.innerHTML = type === 'received' ? `<i class="fas fa-robot"></i> ${text}` : text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Inicializa o chat com uma saudação
  appendMessage("👋 Olá! O que você deseja fazer? Use !GUIA para listar os comandos.", 'received');

  // Se o arquivo de entrada for alterado, processa o novo arquivo
  function handleFileInput(event) {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function(e) {
        let data = new Uint8Array(e.target.result);
        let workbook = XLSX.read(data, { type: 'array' });
        let sheetName = workbook.SheetNames[0];
        let sheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        let response = "📊 Arquivo carregado com sucesso! Exibindo primeiras linhas:\n";
        jsonData.slice(0, 5).forEach(row => {
          response += JSON.stringify(row) + "\n";
        });

        appendMessage(response, 'received');
      };
      reader.readAsArrayBuffer(file);
    }
  }

  // Inicia o processamento de mensagens lidas de 'mensagens.txt'
  processMessages();
}
