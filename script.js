// Dados das perguntas e perfis - Versão Atualizada
const questions = [
    {
        id: 1,
        text: "O sistema interno cai no último dia útil do mês. Sua reação?",
        options: [
            { text: "🤷‍♂️ 'Bem, eu avisei que isso ia acontecer! Agora é torcer para o TI resolver...'", profile: "Cínico" },
            { text: "😄 'Opa, hora do café extra! Enquanto o sistema volta, bora tomar um expresso?'", profile: "Bufão" },
            { text: "😤 'Alguém me explica COMO isso aconteceu? Quero respostas e relatórios na minha mesa JÁ!'", profile: "Narcisista" },
            { text: "🥺 'Gente, os colegas vão ficar tão chateados! Vou ligar para todos pedindo desculpas...'", profile: "Inocente" }
        ]
    },
    {
        id: 2,
        text: "Você vai apresentar o planejamento anual da equipe. Qual será seu tema?",
        options: [
            { text: "📊 'A Matemática Não Mente: Por que seu projeto favorito não cabe no orçamento' (com 50 gráficos)", profile: "Âncora" },
            { text: "🌈 'Equipe dos Sonhos: Vamos implementar 10 projetos inovadores!' (orçamento? depois a gente vê)", profile: "Sonhador" },
            { text: "🔥 'Quebrando as Regras: Como fazer mais gastando menos (e irritando o controle interno)'", profile: "Rebelde" },
            { text: "😰 Preparei 7 versões diferentes e não sei qual usar. Alguém me ajuda a escolher?", profile: "Neurótico" }
        ]
    },
    {
        id: 3,
        text: "O coordenador de outro setor chega dizendo que o orçamento acabou... de novo!",
        options: [
            { text: "🙄 'Problema dele, não meu. Next!'", profile: "Narcisista" },
            { text: "😏 'Senta aqui, amigo... vamos fazer uma troquinha. Me apoia naquele projeto que eu te ajudo'", profile: "Jogador" },
            { text: "😢 'Puxa, o time precisa de recursos! Vou ver se consigo ajudar, mesmo que me custe o almoço'", profile: "Inocente" },
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
        text: "O que você acha das reuniões de distribuição de tarefas?",
        options: [
            { text: "📚 'É minha missão sagrada ensinar os procedimentos para quem não quer aprender'", profile: "Âncora" },
            { text: "❤️ 'Adoro! É quando a gente se ajuda e ninguém fica sobrecarregado. Tudo pelo time!'", profile: "Inocente" },
            { text: "👑 'São necessárias para que todos confirmem que minhas decisões são as melhores'", profile: "Narcisista" },
            { text: "💡 'Melhor parte do dia! Bora criar um sistema de rodízio de funções? Ou um bingo de tarefas?'", profile: "Excêntrico" }
        ]
    },
    {
        id: 6,
        text: "Apareceu verba extra no departamento! E agora?",
        options: [
            { text: "🎉 'Festa! Hora de fazer aqueles projetos que estavam engavetados!'", profile: "Jogador" },
            { text: "🤫 'Shhh! Vou guardar isso para uma emergência... ou para quando o diretor pedir um milagre'", profile: "Rebelde" },
            { text: "🏗️ 'Finalmente! Dá para começar aquele projeto inovador! (pelo menos a fase inicial)'", profile: "Sonhador" },
            { text: "😫 'Ai, que ansiedade! Isso vai desequilibrar todas minhas planilhas! E a auditoria?'", profile: "Neurótico" }
        ]
    },
    {
        id: 7,
        text: "O orçamento caiu e precisamos redistribuir recursos. Seu plano?",
        options: [
            { text: "😔 'Vou cortar 1,5% de todo mundo, assim ninguém fica bravo comigo'", profile: "Inocente" },
            { text: "📋 'Já tenho aqui a lista dos gastos desnecessários que vocês insistem em manter'", profile: "Âncora" },
            { text: "😜 'É só 'esquecer' de liberar algumas verbas. Problema resolvido! Quem café?'", profile: "Bufão" },
            { text: "💅 'Setores menos importantes que se virem. Minha área está blindada, obviamente'", profile: "Narcisista" }
        ]
    },
    {
        id: 8,
        text: "Ouvir falar que podem redistribuir os cargos comissionados. Sua reação?",
        options: [
            { text: "😟 'Será que fiz algo errado? Todo mundo ainda gosta de mim?'", profile: "Inocente" },
            { text: "🎪 'Uhuu! Novos ares! Novos desafios! Já estou pensando em ideias malucas!'", profile: "Excêntrico" },
            { text: "🃏 'Hmm, interessante... Vou espalhar um boato ainda melhor para ver o circo pegar fogo'", profile: "Jogador" },
            { text: "🤨 'Anotado. Mais uma prova de que a administração não sabe o que faz'", profile: "Cínico" }
        ]
    },
    {
        id: 9,
        text: "A diretoria tem uma ideia... criativa (e talvez fora do regulamento). Você:",
        options: [
            { text: "🚫 'Diretoria, com todo respeito, isso é irregular e eu não vou assinar. Ponto.'", profile: "Rebelde" },
            { text: "😶 'Melhor ficar quieto... eles são a chefia, devem saber o que fazem'", profile: "Inocente" },
            { text: "⚖️ 'Excelente ideia, mas o artigo 42 do regulamento diz que... (30 minutos de explicação técnica)'", profile: "Âncora" },
            { text: "👏 'Genial, chefia! Brilhante! (ps: alguém avisa o compliance?)'", profile: "Bufão" }
        ]
    },
    {
        id: 10,
        text: "O que mais te assusta no fechamento do balanço mensal?",
        options: [
            { text: "😴 'O tédio de ficar conferindo números. Prefiro estar na área operacional!'", profile: "Excêntrico" },
            { text: "💔 'Ver que não conseguimos realizar aquele projeto dos meus sonhos'", profile: "Sonhador" },
            { text: "😱 'Um centavo fora do lugar! E se a auditoria achar um erro de R$ 0,50?'", profile: "Neurótico" },
            { text: "🎭 'Que usem meus relatórios impecáveis para justificar decisões questionáveis'", profile: "Cínico" }
        ]
    }
];

// Descrições dos perfis - Versão Descontraída
const profiles = {
    "Âncora": {
        name: "🌳 O Guardião das Regras",
        description: "Você é a pessoa que mantém tudo nos eixos! Enquanto todos correm desesperados, você já tem a planilha pronta, o regulamento citado e a solução na ponta da língua. Seu superpoder? Transformar caos em processos organizados!",
        disc: "C (Conformidade)",
        priority: "Manter a harmonia através da organização"
    },
    "Sonhador": {
        name: "🌈 O Visionário Criativo",
        description: "Você vê possibilidades onde outros veem problemas! Seu planejamento tem cores e inovações, e você genuinamente acredita que criatividade pode superar qualquer obstáculo. 'Limites? Isso é detalhe!' é seu lema favorito.",
        disc: "I (Influência)",
        priority: "Inspirar a equipe com novas ideias"
    },
    "Neurótico": {
        name: "🍃 O Protetor Preventivo",
        description: "Você já previu 157 formas diferentes dos projetos darem errado... só nesta semana! Enquanto todos comemoram, você já está preparando o plano B, C e D. Seu lema: 'Melhor prevenir do que remediar, sempre!'",
        disc: "C (Conformidade)",
        priority: "Garantir que tudo funcione perfeitamente"
    },
    "Rebelde": {
        name: "🔥 O Agente de Mudanças",
        description: "Regras? Limites? São apenas convites para pensar diferente! Você vê burocracia como oportunidade para inovar e adora encontrar 'soluções criativas'. Seu espaço deveria ter uma placa: 'Cuidado: transformação em progresso'.",
        disc: "D (Dominância)",
        priority: "Evoluir os processos constantemente"
    },
    "Inocente": {
        name: "🌸 O Cultivador de Harmonia",
        description: "Você é tão harmonioso que até as planilhas sorriem para você! Seu maior talento é fazer todo mundo se sentir acolhido e importante. Se o trabalho fosse um jardim, você seria o jardineiro que cuida de cada flor.",
        disc: "S (Estabilidade)",
        priority: "Cultivar um ambiente positivo para todos"
    },
    "Excêntrico": {
        name: "🎪 O Semeador de Ideias",
        description: "Sua mente é um viveiro de ideias inovadoras! Enquanto todos discutem processos, você está pensando em como revolucionar a forma de trabalhar. Seu espaço reflete sua criatividade - sempre cheio de vida e inspiração!",
        disc: "I (Influência)",
        priority: "Oxigenar a equipe com novas perspectivas"
    },
    "Bufão": {
        name: "🌞 O Iluminador de Ambientes",
        description: "Você resolve problemas com leveza e bom humor! Seu lema é: 'Por que fazer pesado se podemos fazer com alegria?' Especialista em encontrar soluções descomplicadas e espalhar energia positiva pelo ambiente.",
        disc: "I (Influência)",
        priority: "Manter o clima leve e produtivo"
    },
    "Cínico": {
        name: "🦉 O Observador Realista",
        description: "Você tem o dom de enxergar os desafios antes deles aparecerem! Enquanto todos se empolgam com novidades, você já está avaliando os riscos. Seu talento? Antecipar problemas e preparar a equipe.",
        disc: "C (Conformidade)",
        priority: "Manter os pés no chão com sabedoria"
    },
    "Narcisista": {
        name: "🌺 O Florescer de Talentos",
        description: "Você traz confiança e determinação para a equipe! Acredita firmemente no seu potencial e no da sua equipe. Seu departamento é seu jardim particular - cuida com dedicação para que tudo floresça lindamente.",
        disc: "D (Dominância)",
        priority: "Fazer brilhar os talentos da equipe"
    },
    "Jogador": {
        name: "🕊️ O Diplomata Natural",
        description: "Você vê a equipe como um ecossistema onde cada um tem seu papel! Sua especialidade é criar sinergias e conectar pessoas. 'Vamos trabalhar juntos?' é sua frase favorita para construir pontes.",
        disc: "I (Influência) com traços D (Dominância)",
        priority: "Harmonizar diferentes talentos e visões"
    }
};

// Frases de carregamento por categoria de perfil - Versão Reduzida
const loadingMessages = {
    "Líderes": [
        "Analisando seu estilo de liderança natural...",
        "Mapeando suas habilidades de influência...", 
        "Finalizando seu perfil de guia da equipe..."
    ],
    "Criativos": [
        "Explorando sua criatividade e inovação...",
        "Mapeando suas ideias revolucionárias...",
        "Preparando suas soluções criativas..."
    ],
    "Estáveis": [
        "Analisando seu talento para harmonia...",
        "Mapeando suas habilidades de apoio...",
        "Finalizando seu perfil de estabilidade..."
    ],
    "Analíticos": [
        "Processando sua atenção aos detalhes...",
        "Analisando seu método organizacional...",
        "Finalizando seu perfil de precisão..."
    ],
    "Geral": [
        "Conectando suas respostas aos arquétipos...",
        "Processando seu estilo único de trabalho...",
        "Preparando sua análise personalizada..."
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
            // Mostrar resultados após 3 segundos (aumentado)
            setTimeout(showResults, 3000);
        }
    }, 4000); // Aumentado para 4 segundos por mensagem
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