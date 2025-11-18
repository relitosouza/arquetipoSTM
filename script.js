// Dados das perguntas e perfis - Versão Descontraída
const questions = [
    {
        id: 1,
        text: "O sistema de pagamentos cai no último dia útil do mês. Sua reação?",
        options: [
            { text: "🤷‍♂️ 'Bem, eu avisei que isso ia acontecer! Agora é torcer para o TI resolver...'", profile: "Cínico" },
            { text: "😄 'Opa, hora do café extra! Enquanto o sistema volta, bora tomar um expresso?'", profile: "Bufão" },
            { text: "😤 'Alguém me explica COMO isso aconteceu? Quero respostas e relatórios na minha mesa JÁ!'", profile: "Narcisista" },
            { text: "🥺 'Gente, os fornecedores vão ficar tão chateados! Vou ligar para todos pedindo desculpas...'", profile: "Inocente" }
        ]
    },
    {
        id: 2,
        text: "Você vai apresentar o Plano Plurianual. Qual será seu tema?",
        options: [
            { text: "📊 'A Matemática Não Mente: Por que seu projeto favorito não cabe no orçamento' (com 50 gráficos)", profile: "Âncora" },
            { text: "🌈 'Cidade dos Sonhos: Vamos construir 10 parques, 5 hospitais e um teleférico!' (orçamento? depois a gente vê)", profile: "Sonhador" },
            { text: "🔥 'Quebrando as Regras: Como fazer mais gastando menos (e irritando o Tribunal de Contas)'", profile: "Rebelde" },
            { text: "😰 Preparei 7 versões diferentes e não sei qual usar. Alguém me ajuda a escolher?", profile: "Neurótico" }
        ]
    },
    {
        id: 3,
        text: "O Secretário de Saúde chega dizendo que o orçamento acabou... de novo!",
        options: [
            { text: "🙄 'Problema dele, não meu. Next!'", profile: "Narcisista" },
            { text: "😏 'Senta aqui, amigo... vamos fazer uma troquinha. Me apoia no IPTU que eu te ajudo'", profile: "Jogador" },
            { text: "😢 'Puxa, as crianças precisam de remédios! Vou ver se consigo ajudar, mesmo que me custe o almoço'", profile: "Inocente" },
            { text: "🤦 'Todo mês a mesma novela! Já estou até decorando o script...'", profile: "Cínico" }
        ]
    },
    {
        id: 4,
        text: "Como está organizada sua mesa de trabalho?",
        options: [
            { text: "💻 Só o notebook. Papel é coisa do século passado!", profile: "Rebelde" },
            { text: "📐 Régua, esquadro e canetas por ordem de cor. Mexeu, morreu.", profile: "Neurótico" },
            { text: "🍪 Fotos da família, xícara personalizada e biscoitos para visitas. Casa da vovó style!", profile: "Inocente" },
            { text: "🎪 Parece que uma festa passou por aqui! Café, ideias soltas e lembranças de eventos.", profile: "Excêntrico" }
        ]
    },
    {
        id: 5,
        text: "O que você acha das reuniões de execução orçamentária?",
        options: [
            { text: "📚 'É minha missão sagrada ensinar Lei 4.320 para quem não quer aprender'", profile: "Âncora" },
            { text: "❤️ 'Adoro! É quando a gente se ajuda e ninguém fica sem recursos. Tudo pelo time!'", profile: "Inocente" },
            { text: "👑 'São necessárias para que todos confirmem que minhas decisões são as melhores'", profile: "Narcisista" },
            { text: "💡 'Melhor parte do dia! Bora criar um imposto sobre ar-condicionado? Ou um bingo municipal?'", profile: "Excêntrico" }
        ]
    },
    {
        id: 6,
        text: "Apareceu dinheiro extra no caixa! E agora?",
        options: [
            { text: "🎉 'Festa! Hora de fazer aquelas emendas parlamentares que estavam engavetadas!'", profile: "Jogador" },
            { text: "🤫 'Shhh! Vou guardar isso para uma emergência... ou para quando o prefeito pedir um milagre'", profile: "Rebelde" },
            { text: "🏗️ 'Finalmente! Dá para começar aquele centro cultural de 10 andares! (pelo menos a fundação)'", profile: "Sonhador" },
            { text: "😫 'Ai, que ansiedade! Isso vai desequilibrar todas minhas planilhas! E o Tribunal de Contas?'", profile: "Neurótico" }
        ]
    },
    {
        id: 7,
        text: "A arrecadação caiu e precisamos cortar gastos. Seu plano?",
        options: [
            { text: "😔 'Vou cortar 1,5% de todo mundo, assim ninguém fica bravo comigo'", profile: "Inocente" },
            { text: "📋 'Já tenho aqui a lista dos gastos desnecessários que vocês insistem em manter'", profile: "Âncora" },
            { text: "😜 'É só 'esquecer' de liberar algumas verbas. Problema resolvido! Quem café?'", profile: "Bufão" },
            { text: "💅 'Cultura e Esportes que se virem. Minha secretaria está blindada, obviamente'", profile: "Narcisista" }
        ]
    },
    {
        id: 8,
        text: "Ouvir falar que podem trocar você de cargo. Sua reação?",
        options: [
            { text: "😟 'Será que fiz algo errado? Todo mundo ainda gosta de mim?'", profile: "Inocente" },
            { text: "🎪 'Uhuu! Novos ares! Novos desafios! Já estou pensando em ideias malucas!'", profile: "Excêntrico" },
            { text: "🃏 'Hmm, interessante... Vou espalhar um boato ainda melhor para ver o circo pegar fogo'", profile: "Jogador" },
            { text: "🤨 'Anotado. Mais uma prova de que esse governo não sabe o que faz'", profile: "Cínico" }
        ]
    },
    {
        id: 9,
        text: "O Prefeito tem uma ideia... criativa (e talvez ilegal). Você:",
        options: [
            { text: "🚫 'Prefeito, com todo respeito, isso é ilegal e eu não vou assinar. Ponto.'", profile: "Rebelde" },
            { text: "😶 'Melhor ficar quieto... ele é o chefe, deve saber o que faz'", profile: "Inocente" },
            { text: "⚖️ 'Excelente ideia, mas o artigo 42 da LRF diz que... (30 minutos de explicação técnica)'", profile: "Âncora" },
            { text: "👏 'Genial, chefia! Brilhante! (ps: alguém avisa o controle interno?)'", profile: "Bufão" }
        ]
    },
    {
        id: 10,
        text: "O que mais te assusta no fechamento do balanço anual?",
        options: [
            { text: "😴 'O tédio de ficar conferindo números. Prefiro estar na rua vendo as obras!'", profile: "Excêntrico" },
            { text: "💔 'Ver que não conseguimos realizar aquele projeto social dos meus sonhos'", profile: "Sonhador" },
            { text: "😱 'Um centavo fora do lugar! E se o Tribunal achar um erro de R$ 0,50?'", profile: "Neurótico" },
            { text: "🎭 'Que usem meus relatórios impecáveis para fazer propaganda enganosa'", profile: "Cínico" }
        ]
    }
];

// Descrições dos perfis - Versão Descontraída
const profiles = {
    "Âncora": {
        name: "🦸‍♂️ O Super-Herói das Planilhas",
        description: "Você é a pessoa que salva o dia com gráficos e leis! Enquanto todos correm desesperados, você já tem a planilha pronta, o artigo da lei citado e a solução na ponta da língua. Seu superpoder? Transformar caos em colunas organizadas!",
        disc: "C (Conformidade)",
        priority: "Salvar o mundo, uma planilha de cada vez"
    },
    "Sonhador": {
        name: "🌈 O Mestre dos Sonhos Coloridos",
        description: "Você vê possibilidades onde outros veem problemas! Seu orçamento tem arco-íris e unicórnios, e você genuinamente acredita que otimismo pode cobrir qualquer rombo. 'Dinheiro? Isso é detalhe!' é seu lema favorito.",
        disc: "I (Influência)",
        priority: "Espalhar alegria e projetos impossíveis"
    },
    "Neurótico": {
        name: "😰 O Detetive do Apocalipse",
        description: "Você já previu 157 formas diferentes do mundo acabar... só nesta semana! Enquanto todos comemoram, você já está preparando o plano B, C e D para quando tudo der errado. Seu lema: 'Melhor prevenir do que... bem, você sabe.'",
        disc: "C (Conformidade)",
        priority: "Sobreviver ao próximo desastre iminente"
    },
    "Rebelde": {
        name: "🔥 O Justiceiro das Regras",
        description: "Regras? Limites? São apenas sugestões criativas para você! Você vê burocracia como um desafio pessoal e adora encontrar 'atalhos criativos'. Seu escritório deveria ter uma placa: 'Cuidado: ideias revolucionárias em andamento'.",
        disc: "D (Dominância)",
        priority: "Mudar o sistema (com ou sem permissão)"
    },
    "Inocente": {
        name: "🐰 O Coelho da Harmonia",
        description: "Você é tão fofinho que até as planilhas sorriem para você! Seu maior medo é ver alguém triste, então sempre arruma um jeitinho de ajudar todo mundo. Se o orçamento fosse uma festa, você seria o anfitrião que garante que todos se divirtam.",
        disc: "S (Estabilidade)",
        priority: "Fazer todo mundo se sentir amado"
    },
    "Excêntrico": {
        name: "🎪 O Diretor de Circo Criativo",
        description: "Sua mente é um parque de diversões de ideias malucas! Enquanto todos discutem números, você está pensando em como financiar um teleférico ou criar um imposto sobre solidão. Sua mesa parece que uma festa passou por ali... e provavelmente passou mesmo!",
        disc: "I (Influência)",
        priority: "Transformar o tédio em diversão"
    },
    "Bufão": {
        name: "🃏 O Mágico do Jeitinho",
        description: "Você resolve problemas com um sorriso no rosto e uma piada na ponta da língua! Seu lema é: 'Por que fazer direito se podemos fazer divertido?' Especialista em encontrar atalhos criativos e distribuir cafezinhos durante as crises.",
        disc: "I (Influência)",
        priority: "Sobreviver rindo"
    },
    "Cínico": {
        name: "🦉 O Sábio do 'Eu Avisei'",
        description: "Você já sabe que tudo vai dar errado... e geralmente está certo! Enquanto todos se empolgam com novos projetos, você já está de prontidão para dizer 'eu avisei'. Seu superpoder? Ver o fracasso antes mesmo dele acontecer.",
        disc: "C (Conformidade)",
        priority: "Provocar o 'eu disse' com precisão cirúrgica"
    },
    "Narcisista": {
        name: "👑 A Estrela do Show",
        description: "O universo gira em torno de você - e que universo maravilhoso! Seus projetos são os melhores, suas ideias são brilhantes e, claro, seu departamento merece sempre o maior orçamento. Afinal, sem você, tudo desmoronaria!",
        disc: "D (Dominância)",
        priority: "Manter o trono bem aquecido"
    },
    "Jogador": {
        name: "🎲 O Mestre do Xadrez Social",
        description: "Você vê a secretaria como um grande tabuleiro de xadrez, e adora uma boa jogada! Sua especialidade é transformar problemas orçamentários em oportunidades políticas. 'Vamos fazer uma troquinha?' é sua frase favorita.",
        disc: "I (Influência) com traços D (Dominância)",
        priority: "Ganhar o jogo, sempre"
    }
};

// Frases de carregamento por categoria de perfil
const loadingMessages = {
    "Líderes": [
        "Os resultados do seu perfil estão a caminho, mais determinados que um herói numa missão para salvar o café da empresa. A ansiedade é o único vilão que enfrentaremos por agora!",
        "Relaxe, mestre estratégico! Sua análise está sendo preparada com a mesma precisão de um plano para dominar o mundo (ou pelo menos a próxima reunião).",
        "Aguardem, guerreiros! Seu perfil de Liderança está sendo forjado no mesmo aço que a espada do Rei Arthur. Prometo que valerá a pena a espera."
    ],
    "Criativos": [
        "A análise do seu perfil está em sua última aventura antes de chegar até você. Aparentemente, ela parou para tomar um café com um Mago e já volta!",
        "Calma, espírito livre! Sua análise está dando uma última volta pelo mundo para coletar inspirações. Ela volta cheia de histórias divertidas, assim como você!",
        "Pensem no seu relatório como um mapa do tesouro. Os nossos cartógrafos (aka sistemas) estão desenhando os últimos detalhes para que você não caia na armadilha dos 'prazos curtos'."
    ],
    "Estáveis": [
        "Fiquem tranquilos, queridos cuidadores. Sua análise está sendo preparada com todo o cuidado e atenção que vocês dedicam ao team. Nada de sustos ou surpresas desagradáveis!",
        "Assim como um bolo no forno, sua análise precisa do tempo exato para ficar perfeita. Estamos aqui, vigiando para que não queime. Tudo sairá deliciosamente preciso!",
        "Seu perfil de estabilidade e harmonia está quase pronto. Estamos dando os últimos retoques para garantir que a experiência seja tão tranquila quanto um domingo à tarde."
    ],
    "Analíticos": [
        "Os nossos sistemas estão compilando dados com a precisão de um relógio suíço e a sabedoria de um mago. Qualquer desvio de 0,01% será devidamente recalibrado. Aguardem.",
        "Relaxem, mentes analíticas! Estamos na fase de 'checagem dos checadores'. Garantindo que não haja nenhuma vírgula fora do lugar no seu perfil.",
        "Pensem no processo como uma fórmula complexa sendo resolvida pelo próprio Einstein. A resposta final está a caminho, e será impecável."
    ],
    "Geral": [
        "Os oráculos dos arquétipos estão alinhando os dados cósmicos com suas respostas. Parece que o Herói e o Sábio estão tendo um debate... mas logo chegam a um consenso!",
        "A máquina de análise está funcionando a todo vapor! Dizem que ela já identificou um 'Explorador' que quer fugir do relatório e um 'Cuidador' tentando acalmar todo mundo.",
        "Estamos na reta final! Seu perfil está vestindo a fantasia do seu arquétipo dominante. Alguém apostou no 'Mago', mas as cartas ainda estão na mesa.",
        "Calma, jovens padawans! O relatório da força está pronto, mas o arquétipo do Cavaleiro Jedi ainda está escolhendo o sabre de luz. Logo teremos novidades."
    ]
};

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
            <div class="question-number">🎯 Pergunta ${currentQuestion + 1} de ${questions.length}</div>
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
    nextBtn.textContent = currentQuestion === questions.length - 1 ? '🎊 Ver Resultados' : 'Próxima ➡️';
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
    
    // Selecionar categoria do perfil predominante
    const category = profileCategories[predominantProfile] || "Geral";
    const messages = loadingMessages[category];
    
    // Mostrar mensagens de carregamento sequenciais
    let messageIndex = 0;
    
    loadingInterval = setInterval(() => {
        loadingText.innerHTML = messages[messageIndex] + '<span class="loading-dots"></span>';
        messageIndex++;
        
        if (messageIndex >= messages.length) {
            clearInterval(loadingInterval);
            // Mostrar resultados após 2 segundos
            setTimeout(showResults, 2000);
        }
    }, 3000);
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
        <p><strong>🎭 Seu Estilo:</strong> ${profileInfo.name}</p>
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