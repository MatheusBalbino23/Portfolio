// Adicionando funcionalidade de rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Obtém o elemento do rodapé
var footer = document.querySelector('.footer');

// Adiciona um evento de rolagem à janela
window.addEventListener('scroll', function () {
    // Verifica se a posição vertical da página é maior que 0
    if (window.scrollY > 0) {
        // Se sim, mostra o rodapé
        footer.style.display = 'block';
    } else {
        // Caso contrário, esconde o rodapé
        footer.style.display = 'none';
    }
});

// Obtém o elemento do botão "Início"
var btnInicio = document.querySelector('a[href="#inicio"]');

// Adiciona um evento de clique ao botão "Início"
btnInicio.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola a página até o topo suavemente
});

// Função para animar o texto em cascata
function animateText() {
    const text = document.getElementById('roleAnimation');
    const letters = text.textContent.split('');
    text.textContent = ''; // Limpa o texto original

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 100}ms`; // Atraso progressivo
        text.appendChild(span);
    });
}

// Chama a função de animação após o carregamento da página
window.onload = animateText;



// Defina uma variável global para armazenar o idioma atualmente selecionado
let currentLanguage = 'portuguese';

// Função para mudar o idioma do site
function changeLanguage(language) {
    console.log('Changing language to:', language);
    currentLanguage = language;
    updateContent(); // Atualiza o conteúdo após mudar o idioma
}

// Função para atualizar o conteúdo do site com base no idioma selecionado
function updateContent() {
    const elements = document.querySelectorAll('[data-translate]'); // Seleciona todos os elementos com atributo data-translate
    elements.forEach(element => {
        const key = element.getAttribute('data-translate'); // Obtém a chave de tradução do atributo
        element.innerText = translations[currentLanguage][key]; // Define o texto do elemento com a tradução correspondente
    });
}

// Objeto de traduções
const translations = {
    'portuguese': {
        'title': 'Meu Portfólio',
        'inicio': 'Início',
        'sobre': 'Sobre',
        'projetos': 'Projetos',
        'habilidades': 'Habilidades',
        'meu_contato': 'Meu Contato',
        'english': 'English',
        'portuguese': 'Português',
        'welcome': 'Olá, meu nome é',
        'and_i_am': 'e eu sou',
        'my_name': 'Matheus Balbino',
        'hello_my_name_is': 'e eu sou desenvolvedor Full Stack.',
        'role': 'desenvolvedor Full Stack',
        'sobre_mim': 'Sobre mim',
        'about_me': 'Sou um jovem apaixonado por tecnologia. Atualmente, estou cursando o primeiro semestre de Desenvolvimento de Sistemas, onde tenho a oportunidade de mergulhar ainda mais no mundo da programação e da tecnologia. Minha jornada no campo da tecnologia começou quando tive meu primeiro contato com programação e descobri minha paixão por criar soluções inovadoras e resolver problemas por meio do desenvolvimento de software. Ao longo da minha jornada, tive a incrível oportunidade de trabalhar como administrador de banco de dados por um ano. Essa experiência me proporcionou uma compreensão mais profunda dos sistemas de banco de dados e me ajudou a desenvolver habilidades essenciais de gerenciamento e organização. Estou constantemente buscando aprender e me aprimorar, seja por meio de cursos online, projetos pessoais ou experiências profissionais. Estou entusiasmado com as infinitas possibilidades que a tecnologia oferece e comprometido em fazer a diferença por meio do meu trabalho. Estou ansioso para enfrentar novos desafios, colaborar com colegas talentosos e contribuir para projetos inovadores no campo da tecnologia.',
        'project1_title': 'Projeto 1',
        'project1_description': 'Site de jogos desenvolvido em sala de aula para provarmos nosso conhecimento em HTML, CSS e Javascript.',
        'project2_title': 'Projeto 2',
        'project2_description': 'Desenvolvi uma versão digital do clássico jogo da velha utilizando linguagens de programação como HTML, CSS e JavaScript. Os jogadores podem competir entre si ou contra o computador em partidas divertidas e desafiadoras.',
        'project3_title': 'Projeto 3',
        'project3_description': 'Projetei e implementei um aplicativo web para ajudar os usuários a controlar suas finanças pessoais. O aplicativo permite que os usuários registrem suas despesas, categorizem-nas e visualizem gráficos e relatórios detalhados para uma melhor compreensão de seus hábitos de gastos.',
        'project4_title': 'Projeto 4',
        'project4_description': 'Desenvolvi uma calculadora simples e funcional utilizando HTML, CSS e JavaScript. A calculadora suporta operações básicas de matemática, como adição, subtração, multiplicação e divisão, proporcionando uma ferramenta útil para cálculos rápidos e precisos.',
        'skills_paragraph1': 'Sou proficiente em várias linguagens de programação, incluindo HTML, CSS, JavaScript, C++, e Java. Além disso, possuo conhecimento intermediário/avançado em SQL, o que me permite criar consultas complexas e gerenciar eficientemente bancos de dados. Tenho habilidades avançadas em Excel e Power BI, o que me permite analisar e visualizar dados de forma eficaz.',
        'skills_paragraph2': 'Em termos de comunicação, tenho um nível básico de proficiência em inglês para conversação e um nível intermediário para comunicação em ambientes técnicos e cotidianos. Além disso, sou hábil em trabalhar em equipe, colaborando efetivamente com colegas para alcançar objetivos comuns. Estou sempre buscando aprender e me atualizar nas últimas tecnologias e tendências do mercado, e estou comprometido em desenvolver minhas habilidades para me tornar um profissional mais completo e eficiente.',
        'contact_intro': 'Se você quiser entrar em contato comigo para oportunidades de colaboração, oportunidades de trabalho ou apenas para dizer olá, sinta-se à vontade para me enviar um e-mail ou me conectar através das minhas redes sociais:',
        'email_address': 'matheusbalbino9@gmail.com',
        'download_resume': 'Baixar meu currículo em PDF'
    },
    'english': {
        'title': 'My Portfolio',
        'inicio': 'Home',
        'sobre': 'About',
        'projetos': 'Projects',
        'habilidades': 'Skills',
        'meu_contato': 'Contact Me',
        'english': 'English',
        'portuguese': 'Portuguese',
        'welcome': 'Hello, my name is',
        'and_i_am': 'and I am',
        'my_name': 'Matheus Balbino',
        'hello_my_name_is': 'and I am a Full Stack developer.',
        'role': 'Full Stack Developer',
        'sobre_mim': 'About Me',
        'about_me': 'I am young man passionate about technology.I am currently studying the first semester of Systems Development, where I have the opportunity to delve even deeper into the world of programming and technology.My journey in the field of technology began when I had my first contact with programming and discovered my passion for creating innovative solutions and solving problems through software development.Along my journey, I had the incredible opportunity to work as a database administrator for a year.This experience gave me a deeper understanding of database systems and helped me develop essential management and organizational skills.I am constantly seeking to learn and improve myself, whether through online courses, personal projects or professional experiences.I am excited about the endless possibilities technology offers and committed to making a difference through my work. I look forward to taking on new challenges, collaborating with talented colleagues and contributing to innovative projects in the field of technology.',
        'project1_title': 'Project 1',
        'project1_description': 'Game site developed in the classroom to prove our knowledge of HTML, CSS and Javascript.',
        'project2_title': 'Project 2',
        'project2_description': 'I developed a digital version of the classic tic-tac-toe game using programming languages like HTML, CSS, and JavaScript. Players can compete against each other or against the computer in fun and challenging matches.',
        'project3_title': 'Project 3',
        'project3_description': 'I designed and implemented a web application to help users manage their personal finances. The application allows users to record their expenses, categorize them, and view detailed charts and reports for a better understanding of their spending habits.',
        'project4_title': 'Project 4',
        'project4_description': 'I developed a simple and functional calculator using HTML, CSS, and JavaScript. The calculator supports basic math operations such as addition, subtraction, multiplication, and division, providing a useful tool for quick and accurate calculations.',
        'skills_paragraph1': 'I am proficient in various programming languages, including HTML, CSS, JavaScript, C++, and Java. Additionally, I have intermediate/advanced knowledge in SQL, which allows me to create complex queries and efficiently manage databases. I have advanced skills in Excel and Power BI, which allows me to analyze and visualize data effectively.',
        'skills_paragraph2': 'In terms of communication, I have a basic level of proficiency in English for conversation and an intermediate level for communication in technical and everyday environments. Additionally, I am skilled in teamwork, collaborating effectively with colleagues to achieve common goals. I am always looking to learn and update myself on the latest technologies and market trends, and I am committed to developing my skills to become a more complete and efficient professional.',
        'contact_intro': 'If you would like to get in touch with me for collaboration opportunities, job opportunities, or just to say hello, feel free to send me an email or connect with me through my social networks:',
        'email_address': 'matheusbalbino9@gmail.com',
        'download_resume': 'Download my resume as PDF'
    }
};

// Função para traduzir o conteúdo para inglês
function translateToEnglish() {
    changeLanguage('english');
}

// Função para traduzir o conteúdo para português
function translateToPortuguese() {
    changeLanguage('portuguese');
}

// Adiciona os event listeners aos botões
document.getElementById('englishBtn').addEventListener('click', translateToEnglish);
document.getElementById('portugueseBtn').addEventListener('click', translateToPortuguese);

// Chama a função de atualização do conteúdo ao carregar a página
window.onload = updateContent;

// Função para animar o texto em cascata
function animateText() {
    const text = document.getElementById('roleAnimation');
    const letters = text.textContent.split('');
    text.textContent = ''; // Limpa o texto original

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 100}ms`; // Atraso progressivo
        text.appendChild(span);
    });
}
// Chama a função de animação após o carregamento da página
window.onload = animateText;

