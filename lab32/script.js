const questions = [
    {
        question: "Qual é o nome do criador original do kernel Linux?",
        answers: ["Richard Stallman", "Linus Torvalds", "Steve Jobs", "Bill Gates"],
        correctAnswer: 1
    },
    {
        question: "Qual é a primeira distribuição Linux amplamente reconhecida?",
        answers: ["Red Hat", "Debian", "Slackware", "Ubuntu"],
        correctAnswer: 2
    },
    {
        question: "Qual sistema de controle de versão foi criado por Linus Torvalds para gerenciar o código-fonte do kernel Linux?",
        answers: ["Git", "SVN", "Mercurial", "CVS"],
        correctAnswer: 0
    },
    {
        question: "Qual distribuição Linux é conhecida por sua estabilidade e é a base de outras populares, como Ubuntu?",
        answers: ["Fedora", "Debian", "Arch Linux", "Gentoo"],
        correctAnswer: 1
    },
    {
        question: "Qual comando do Linux é usado para alterar permissões de arquivos?",
        answers: ["chown", "chmod", "cp", "ls"],
        correctAnswer: 1
    },
    {
        question: "Qual empresa é a principal mantenedora da distribuição Fedora?",
        answers: ["Canonical", "Red Hat", "SUSE", "Google"],
        correctAnswer: 1
    },
    {
        question: "O que o kernel do Linux faz?",
        answers: ["Gerencia hardware e recursos do sistema", "Cria a interface gráfica do usuário", "Instala programas no sistema", "Gera logs do sistema"],
        correctAnswer: 0
    },
    {
        question: "Qual é a função do comando ‘grep’ no Linux?",
        answers: ["Listar diretórios", "Copiar arquivos", "Buscar padrões em arquivos", "Excluir arquivos"],
        correctAnswer: 2
    },
    {
        question: "Em que ano foi lançada a primeira versão do kernel Linux?",
        answers: ["1991", "1989", "1995", "2000"],
        correctAnswer: 0
    },
    {
        question: "Qual é a principal filosofia da comunidade de código aberto que envolve o Linux?",
        answers: ["Código fechado e pago", "Compartilhamento de conhecimento e colaboração", "Exclusividade e direitos autorais", "Dependência de empresas privadas"],
        correctAnswer: 1
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `Você acertou ${score} de ${questions.length}`;
}

window.onload = loadQuestions;
