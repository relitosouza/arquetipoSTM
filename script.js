// Dados das perguntas e perfis - Versão Cotidiano
const questions = [
    {
        id: 1,
        text: "Vocês vão dividir a conta do bar com 10 amigos. A comanda chega e é uma confusão. O que você faz?",
        options: [
            { text: "Pego a nota fiscal, abro a calculadora do celular e calculo centavo por centavo quem comeu o quê, incluindo os 10%. \"Fulano, você deve R$ 34,50 porque pediu batata extra.\"", profile: "Âncora" },
            { text: "\"Ai, gente, para não ter briga... divide igual pra todo mundo? Se alguém comeu menos, eu pago a diferença, não tem problema, só quero ir embora em paz.\"", profile: "Inocente" },
            { text: "\"Eu só bebi água e comi uma azeitona. Não vou pagar o rateio da cerveja de vocês. Tirem a minha parte e se virem com o resto.\"", profile: "Narcisista" },
            { text: "\"Ih, esqueci a carteira! Que loucura, né? Alguém cobre aí e depois eu faço um Pix? (Spoiler: Nunca fará o Pix).\"", profile: "Bufão" }
        ]
    },
    {
        id: 2,
        text: "Você está montando um móvel comprado na internet (tipo IKEA) cheio de parafusos.",
        options: [
            { text: "Conto todos os 342 parafusos e separo por tamanho em potinhos antes de começar. Se faltar uma arruela, tenho um ataque de pânico e ligo para o SAC chorando.", profile: "Neurótico" },
            { text: "Jogo o manual de instruções no lixo. \"Isso é para os fracos. Eu sei montar uma estante.\" (A estante fica torta e sobrarão 5 peças).", profile: "Rebelde" },
            { text: "\"Vai ficar lindo! Vou montar rapidinho e vai parecer capa de revista!\" (3 horas depois, está sentado no chão chorando abraçado a uma tábua).", profile: "Sonhador" },
            { text: "\"Eu disse para comprar o móvel que já vem montado. Isso é madeira aglomerada de péssima qualidade. Vai quebrar em dois meses. Mas ok, me passa a chave de fenda.\"", profile: "Cínico" }
        ]
    },
    {
        id: 3,
        text: "Grupo de WhatsApp da Família: Alguém manda uma \"Fake News\" absurda no domingo de manhã.",
        options: [
            { text: "Respondo imediatamente com o link de 3 agências de checagem de fatos, desmentindo ponto a ponto. \"Tia, isso é tecnicamente impossível pelas leis da física.\"", profile: "Âncora" },
            { text: "Ignoro a notícia e mando um áudio de 4 minutos contando que sonhei que fui abduzido por alienígenas veganos. Mudo o foco do grupo para o caos aleatório.", profile: "Excêntrico" },
            { text: "Mando um sticker de alguém rindo, nem leio a notícia, e aproveito para perguntar quem vai levar cerveja no churrasco. Política é chata, festa é legal.", profile: "Jogador" },
            { text: "\"Bom dia, família linda! ❤️ Que Deus abençoe o domingo de todos! Não vamos brigar por política, né? Olha essa foto de gatinho!\"", profile: "Inocente" }
        ]
    },
    {
        id: 4,
        text: "Planejando uma viagem de férias em grupo.",
        options: [
            { text: "\"Nós vamos para onde EU quiser. Eu quero praia, hotel 5 estrelas e quero que vocês tirem fotos minhas o dia todo. Se não for assim, eu não vou.\"", profile: "Narcisista" },
            { text: "\"Eu fiz um cronograma no Excel com intervalos de 15 minutos para banho e alimentação. Precisamos chegar no aeroporto 6 horas antes para evitar imprevistos.\"", profile: "Neurótico" },
            { text: "\"Bora pra onde o vento levar! Não reservei hotel, não vi passagem, mas vai dar certo! A gente dorme na praia se precisar! Uhuuul!\"", profile: "Bufão" },
            { text: "\"Vai chover. Eu vi a previsão. O hotel parece sujo nas fotos do Tripadvisor. Vai ser horrível, vamos gastar dinheiro à toa e voltar cansados.\"", profile: "Cínico" }
        ]
    },
    {
        id: 5,
        text: "Você está preso num engarrafamento monstro e o carro não anda há 20 minutos.",
        options: [
            { text: "Começo a cortar caminho pelo acostamento ou tento dar ré na contramão. As leis de trânsito são sugestões, e eu tenho pressa.", profile: "Rebelde" },
            { text: "Aumento o som no máximo e faço um show de karaokê sozinho dentro do carro. Aproveito para imaginar que estou num clipe musical.", profile: "Sonhador" },
            { text: "Abro o Waze, o Google Maps e o rádio de trânsito para analisar matematicamente qual rota alternativa economizaria 3 minutos.", profile: "Âncora" },
            { text: "\"Tudo bem, respira. É uma oportunidade de ouvir aquele podcast atrasado. Não vou buzinar para não estressar os outros motoristas.\"", profile: "Inocente" }
        ]
    },
    {
        id: 6,
        text: "Chegou a hora de cozinhar o jantar, mas faltam ingredientes.",
        options: [
            { text: "\"Sem problemas! Vou inventar um prato novo: Macarrão com doce de leite e azeitona. Vai ser uma experiência gastronômica sensorial!\"", profile: "Excêntrico" },
            { text: "\"Sabia. Ninguém faz compras nessa casa. Vou pedir pizza, que nem da outra vez, e reclamar que chegou fria.\"", profile: "Cínico" },
            { text: "\"Isso não pode acontecer! A receita exige manjericão fresco e só temos orégano seco! O sabor vai ficar desequilibrado! O jantar está arruinado!\"", profile: "Neurótico" },
            { text: "\"Alô? Mãe? Posso ir jantar aí hoje? Tô levando uns amigos.\" (Resolve o problema terceirizando para os outros).", profile: "Jogador" }
        ]
    },
    {
        id: 7,
        text: "Um amigo termina o namoro e está chorando no sofá.",
        options: [
            { text: "\"Nossa, que chato. Mas olha, você viu meu corte de cabelo novo? Ficou ótimo, né? Enfim, supera isso aí que hoje tem balada.\"", profile: "Narcisista" },
            { text: "\"Vamos lá agora quebrar o carro dele(a)! Eu dirijo! Ninguém mexe com amigo meu e sai impune!\"", profile: "Rebelde" },
            { text: "\"Oh, meu anjo... chora tudo o que tem pra chorar. Fiz chocolate quente e trouxe cobertor. Vou ficar abraçadinho com você até passar.\"", profile: "Inocente" },
            { text: "\"Logicamente, o relacionamento já não tinha futuro. Fiz uma lista dos prós e contras do seu ex. Estatisticamente, você vai encontrar alguém melhor em 3 meses.\"", profile: "Âncora" }
        ]
    },
    {
        id: 8,
        text: "Dia de faxina geral na casa.",
        options: [
            { text: "Começo a limpar, acho um álbum de fotos antigo, sento no chão e fico 4 horas vendo fotos e lembrando do passado. A casa continua suja.", profile: "Sonhador" },
            { text: "Limpo o rodapé com escova de dente. Desinfeto as maçanetas três vezes. Se alguém pisar no meu chão molhado, eu cometo um crime.", profile: "Neurótico" },
            { text: "\"Vou colocar uma música alta, dançar com a vassoura e limpar só o que a visita vê. O que os olhos não veem, a sujeira não existe!\"", profile: "Bufão" },
            { text: "Contrato alguém para limpar ou simplesmente decido que a bagunça é meu \"estilo de vida\" e vou para o bar.", profile: "Rebelde" }
        ]
    },
    {
        id: 9,
        text: "Você precisa reclamar com o vizinho que está fazendo barulho às 2 da manhã.",
        options: [
            { text: "Fico na cama acordado, sofrendo, com medo de ir lá e ele ficar bravo. Coloco um travesseiro na cabeça e rezo para ele parar.", profile: "Inocente" },
            { text: "Vou lá, toco a campainha e, quando ele atende, peço uma cerveja e entro na festa. Se não pode vencê-los, junte-se a eles.", profile: "Jogador" },
            { text: "Desço com o Regulamento Interno do Condomínio impresso, grifado na página da \"Lei do Silêncio\", e ameaço formalmente com multa administrativa.", profile: "Âncora" },
            { text: "Desligo a chave geral de energia do prédio inteiro. Se eu não durmo, ninguém tem luz. Problema resolvido.", profile: "Rebelde" }
        ]
    },
    {
        id: 10,
        text: "O caixa do supermercado passou um item duas vezes por engano (R$ 2,00 a mais).",
        options: [
            { text: "Faço um escândalo. \"Você sabe quem eu sou? Isso é um roubo! Quero falar com o gerente agora!\"", profile: "Narcisista" },
            { text: "\"Típico. O sistema é feito para enganar o consumidor. Vou pagar, mas vou postar uma review de 1 estrela no Google chegando em casa.\"", profile: "Cínico" },
            { text: "Percebo o erro, mas tenho vergonha de travar a fila. Pago os 2 reais a mais e vou embora triste, mas evito o confronto.", profile: "Inocente" },
            { text: "Confiro a nota fiscal na saída, volto, entro na fila de novo, preencho o formulário de estorno e aguardo os 15 minutos necessários para reaver meus R$ 2,00. É uma questão de princípio contábil.", profile: "Neurótico" }
        ]
    }
];

// Descrições dos perfis - Versão Cotidiano
const profiles = {
    "Âncora": {
        name: "🌳 A Âncora (O Chato da Lógica)",
        description: "Você é a pessoa que lê o manual de instruções e divide a conta do bar na calculadora. Seus amigos te acham meio rígido, mas sempre te ligam quando precisam resolver um B.O. burocrático.",
        disc: "C (Conformidade)",
        priority: "Manter a ordem e a lógica em tudo"
    },
    "Sonhador": {
        name: "🌈 O Sonhador (A Cabeça nas Nuvens)",
        description: "Você vive numa realidade paralela onde tudo vai dar certo, mesmo sem planejamento. Você esquece de pagar a conta de luz, mas faz ótimas playlists para jantar à luz de velas.",
        disc: "I (Influência)",
        priority: "Ver beleza e possibilidade em tudo"
    },
    "Neurótico": {
        name: "🍃 O Neurótico (O Fiscal da Ansiedade)",
        description: "Você tem um plano A, B e C para tudo. Seu maior passatempo é se preocupar com coisas que nunca vão acontecer. Sua casa é limpa, mas sua mente é um caos de \"e se?\".",
        disc: "C (Conformidade)",
        priority: "Prevenir todos os desastres possíveis"
    },
    "Rebelde": {
        name: "🔥 O Rebelde (O \"Dono\" da Rua)",
        description: "Regras? Que regras? Você estaciona em vaga proibida e acha que fila é para os outros. Você resolve problemas na força bruta e odeia que te digam o que fazer.",
        disc: "D (Dominância)",
        priority: "Viver sem amarras ou limitações"
    },
    "Inocente": {
        name: "🌸 O Inocente (O \"Deixa Disso\")",
        description: "Você pede desculpas até quando a culpa não é sua. Sua missão na Terra é evitar conflitos e garantir que todos estejam confortáveis, mesmo que você tenha que se sacrificar.",
        disc: "S (Estabilidade)",
        priority: "Cultivar harmonia e paz acima de tudo"
    },
    "Excêntrico": {
        name: "🎪 O Excêntrico (O Aleatório)",
        description: "Você é a pessoa que compra uma lhama de pelúcia numa terça-feira. Ninguém sabe qual será seu próximo passo. Você torna a vida divertida, mas é péssimo para organizar compromissos.",
        disc: "I (Influência)",
        priority: "Surpreender e divertir a todos"
    },
    "Bufão": {
        name: "🌞 O Bufão (O \"Inimigo do Fim\")",
        description: "Para você, tudo é piada. Responsabilidade é alergia. Você é a alma da festa, mas seus amigos sabem que não podem contar com você para ajudar na mudança de casa.",
        disc: "I (Influência)",
        priority: "Viver o momento com alegria e despreocupação"
    },
    "Cínico": {
        name: "🦉 O Cínico (O Reclamão Profissional)",
        description: "Você já sai de casa sabendo que vai dar errado. E quando dá errado, você sente um prazer mórbido em dizer \"Eu avisei\". Você é inteligente, mas cansativo.",
        disc: "C (Conformidade)",
        priority: "Prever e apontar todos os problemas"
    },
    "Narcisista": {
        name: "🌺 O Narcisista (O Alecrim Dourado)",
        description: "O mundo é o seu palco e os outros são figurantes. Você não tem defeitos, apenas \"características intensas\". Se algo deu errado, a culpa é óbvia e exclusivamente dos outros.",
        disc: "D (Dominância)",
        priority: "Ser o centro das atenções sempre"
    },
    "Jogador": {
        name: "🕊️ O Jogador (O \"Jeitinho Brasileiro\")",
        description: "Você navega pela vida na base da lábia. Resolve problemas com charme, contatos e improviso. Regras são obstáculos que você pula com um sorriso no rosto.",
        disc: "I (Influência) com traços D (Dominância)",
        priority: "Resolver tudo com criatividade e charme"
    }
};

// Frases de carregamento - Versão Cotidiano
const loadingMessages = [
    "Calculando quantos parafusos sobraram na montagem do móvel...",
    "Consultando o horóscopo para ver se a culpa é de Mercúrio Retrógrado...",
    "Analisando se você divide a conta ou esquece a carteira...",
    "Verificando se você é do tipo que manda áudio de 5 minutos...",
    "Contando quantas vezes você revirou os olhos hoje...",
    "Simulando uma briga no grupo da família...",
    "Procurando a Nota Fiscal do seu comportamento...",
    "Calibrando seu nível de paciência no trânsito...",
    "Tentando entender por que você comprou aquilo na promoção...",
    "Julgando suas escolhas de vida... (brincadeira, ou não)..."
];

// Mapeamento de perfis para categorias
const profileCategories = {
    "Âncora": "Analíticos",
    "Sonhador": "Criativos", 
    "Neurótico": "Analíticos",
    "Rebelde": "Líderes",
    "Inocente": "Estáveis",
    "Excêntrico": "Criativos",
    "Bufão": "Criativos",
    "Cínico": "Analíticos",
    "Narcisista": "Líderes",
    "Jogador": "Líderes"
};

// Variáveis de estado
let currentQuestion = 0;
let answers = [];
let profileCounts = {};
let loadingInterval;

// Elementos DOM
const quizContainer = document.getElementById('quiz-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const resultsContainer = document.getElementById('results-container');
const loadingContainer = document.getElementById('loading-container');
const loadingText = document.getElementById('loading-text');
const profileName = document.getElementById('profile-name');
const profileDescription = document.getElementById('profile-description');
const totalQuestions = document.getElementById('total-questions');
const profileCount = document.getElementById('profile-count');
const restartBtn = document.getElementById('restart-btn');

// Inicializar o quiz
function initQuiz() {
    showQuestion();
    updateProgress();
    
    // Event listeners
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
}

// Mostrar a pergunta atual
function showQuestion() {
    const question = questions[currentQuestion];
    
    let optionsHTML = '';
    question.options.forEach((option, index) => {
        const isSelected = answers[currentQuestion] === index;
        optionsHTML += `
            <div class="option ${isSelected ? 'selected' : ''}" data-index="${index}">
                ${option.text}
            </div>
        `;
    });
    
    quizContainer.innerHTML = `
        <div class="question-container">
            <div class="question-number">🌱 Pergunta ${currentQuestion + 1} de ${questions.length}</div>
            <div class="question-text">${question.text}</div>
            <div class="options">${optionsHTML}</div>
        </div>
    `;
    
    // Adicionar event listeners às opções
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            selectOption(parseInt(option.dataset.index));
        });
    });
    
    // Atualizar estado dos botões
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? '🌿 Ver Resultados' : 'Próxima ➡️';
}

// Selecionar uma opção
function selectOption(optionIndex) {
    answers[currentQuestion] = optionIndex;
    showQuestion();
}

// Atualizar barra de progresso
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Ir para a próxima pergunta
function goToNextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
        updateProgress();
    } else {
        showLoading();
    }
}

// Ir para a pergunta anterior
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateProgress();
    }
}

// Mostrar tela de carregamento
function showLoading() {
    quizContainer.classList.add('hidden');
    document.querySelector('.navigation').classList.add('hidden');
    loadingContainer.classList.remove('hidden');
    
    // Calcular perfil predominante
    profileCounts = {};
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== undefined) {
            const profile = questions[questionIndex].options[answerIndex].profile;
            profileCounts[profile] = (profileCounts[profile] || 0) + 1;
        }
    });
    
    // Encontrar perfil com mais respostas
    let predominantProfile = '';
    let maxCount = 0;
    
    for (const [profile, count] of Object.entries(profileCounts)) {
        if (count > maxCount) {
            maxCount = count;
            predominantProfile = profile;
        }
    }
    
    // Mostrar mensagens de carregamento aleatórias
    let messageIndex = 0;
    const usedMessages = new Set();
    
    loadingInterval = setInterval(() => {
        // Selecionar uma mensagem aleatória que ainda não foi usada
        let randomMessage;
        do {
            randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
        } while (usedMessages.has(randomMessage) && usedMessages.size < loadingMessages.length);
        
        usedMessages.add(randomMessage);
        loadingText.innerHTML = randomMessage + '<span class="loading-dots"></span>';
        messageIndex++;
        
        if (messageIndex >= 3) { // Mostrar 3 mensagens antes dos resultados
            clearInterval(loadingInterval);
            // Mostrar resultados após 3 segundos
            setTimeout(showResults, 3000);
        }
    }, 4000); // 4 segundos por mensagem
}

// Mostrar resultados
function showResults() {
    loadingContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // Encontrar perfil com mais respostas (já calculado)
    let predominantProfile = '';
    let maxCount = 0;
    
    for (const [profile, count] of Object.entries(profileCounts)) {
        if (count > maxCount) {
            maxCount = count;
            predominantProfile = profile;
        }
    }
    
    const profileInfo = profiles[predominantProfile];
    profileName.textContent = profileInfo.name;
    profileDescription.innerHTML = `
        <p><strong>🌿 Seu Estilo:</strong> ${profileInfo.name}</p>
        <p><strong>📊 Perfil DISC:</strong> ${profileInfo.disc}</p>
        <p><strong>🎯 Sua Missão:</strong> ${profileInfo.priority}</p>
        <p><strong>📖 Sua História:</strong> ${profileInfo.description}</p>
    `;
    
    totalQuestions.textContent = answers.filter(a => a !== undefined).length;
    profileCount.textContent = predominantProfile;
}

// Reiniciar o quiz
function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    profileCounts = {};
    
    if (loadingInterval) {
        clearInterval(loadingInterval);
    }
    
    quizContainer.classList.remove('hidden');
    document.querySelector('.navigation').classList.remove('hidden');
    loadingContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    
    showQuestion();
    updateProgress();
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', initQuiz);