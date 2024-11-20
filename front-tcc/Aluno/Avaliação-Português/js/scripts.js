// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: '(Enem/2018) Certa vez minha mãe surrou-me com uma corda nodosa que me pintou as costas de manchas sangrentas. Moído, virando a cabeça com dificuldade, eu distinguia nas costelas grandes lanhos vermelhos. Deitaram-me, enrolaram-me em panos molhados com água de sal – e houve uma discussão na família. Minha avó, que nos visitava, condenou o procedimento da filha e esta afligiu-se. Irritada, ferira-me à toa, sem querer. Não guardei ódio a minha mãe: o culpado era o nó. Num texto narrativo, a sequência dos fatos contribui para a progressão temática. No fragmento, esse processo é indicado pela:',
    answers: [
      {
        answer: 'alternância das pessoas do discurso que determinam o foco narrativo.',
        correct: false,
      },
      {
        answer: 'utilização de formas verbais que marcam tempos narrativos variados.',
        correct: true,
      },
      {
        answer: 'indeterminação dos sujeitos de ações que caracterizam os eventos narrados.',
        correct: false,
      },
      {
        answer: 'justaposição de frases que relacionam semanticamente os acontecimentos narrados.',
        correct: false,
      },
      {
        answer: 'recorrência de expressões adverbiais que organizam temporalmente a narrativa.',
        correct: false,
      },
    ],
  },
  {
    question: '(Enem) O que é música? A pergunta “o que é música” tem sido alvo de discussão há décadas. Alguns autores defendem que música é a combinação de sons e silêncios de uma maneira organizada. Vamos explicar: um ruído de rádio emite sons, mas não de uma forma organizada, por isso não é classificado como música. Essa definição parece simples e completa, mas definir música não é algo tão óbvio assim. Podemos classificar um alarme de carro como música? Ele emite sons e silêncios de uma maneira organizada, mas garanto que a maioria das pessoas não chamaria esse som de música. O fragmento define o que é a música de forma simplificada. Como estratégia de construção do texto, o autor faz uso recorrente de:',
    answers: [
      {
        answer: 'enumerações para sustentar o ponto de vista apresentado.',
        correct: false,
      },
      {
        answer: 'exemplificações para ilustrar a distinção entre a música e outros sons cotidianos.',
        correct: true,
      },
      {
        answer: 'generalizações para sintetizar as diversas percepções sobre o que é a música.',
        correct: false,
      },
      {
        answer: 'adjetivações para descrever os tipos de música.',
        correct: false,
      },
      {
        answer: 'sinonímias para retomar as características das obras musicais.',
        correct: false,
      },
    ],
  },
  {
    question: '(Enem/2020) Chiquito tinha quase trinta quando conheceu Mariana num baile de casamento na Forquilha, onde moravam uns parentes dele. Por lá foi ficando, remanchando. Fez mal à moça, como costumavam dizer, tiveram de casar às pressas. Morou uns tempos com o sogro, descombinaram. Foi só conta de colher o milho e vender. Mudou pra casa do velho Chico Lourenço [seu pai]. Fumaça própria só viu subir um par de anos depois, quando o pai repartiu as terras. De tão parecidos, pai e filho nunca combinaram direito. Cada qual mais topetudo, muitas vezes dona Aparecida ouvia o marido reclamar da natureza forte do filho. Ela escutava com paciência e respondia dum jeito sempre igual: — “Quem herda, não rouba”. Vinha um brilho nos olhos, o velho se acalmava. Os ditados populares são frases de sabedoria criadas pelo povo, utilizadas em várias situações da vida. Nesse texto, a personagem emprega um ditado popular com a intenção de:',
    answers: [
      {
        answer: 'criticar a natureza forte do filho.',
        correct: false,
      },
      {
        answer: 'justificar o gênio difícil de Chiquito.',
        correct: true,
      },
      {
        answer: 'legitimar o direito do filho à herança.',
        correct: false,
      },
      {
        answer: 'conter o ânimo violento de Chico Lourenço',
        correct: false,
      },
      {
        answer: 'condenar a agressividade do marido contra o filho.',
        correct: false,
      },
    ],
  },{
    question: '(Enem) A namorada. Havia um muro alto entre nossas casas. Difícil de mandar recado para ela. Não havia e-mail. O pai era uma onça. A gente amarrava o bilhete numa pedra presa por um cordão. E pinchava a pedra no quintal da casa dela. Se a namorada respondesse pela mesma pedra era uma glória! Mas por vezes o bilhete enganchava nos galhos da goiabeira. E então era agonia. No tempo do onça era assim. Nesse texto, a mobilização do uso padrão das formas verbais:',
    answers: [
      {
        answer: 'está a serviço do projeto literário, auxiliando na distinção das ações de um e de outro personagem.',
        correct: false,
      },
      {
        answer: 'auxilia na caracterização do tempo, do espaço e dos personagens da narrativa.',
        correct: false,
      },
      {
        answer: 'alterna os tempos da narrativa, fazendo progredir as ideias do texto.',
        correct: false,
      },
      {
        answer: 'ajuda a localizar o enredo em um tempo ora mais, ora menos distante do presente.',
        correct: false,
      },
      {
        answer: 'traduz a reminiscência de fatos passados que ficaram registrados na vida íntima do narrador.',
        correct: true,
      },
    ],
  },{
    question: '(Enem) Esse infográfico revela que o BNDES se mobilizará em prol do cumprimento de um dos objetivos da Agenda 2030 da ONU: a universalização do saneamento básico. A leitura dessa representação visual de informações permite afirmar corretamente que, para essa meta ser atingida, é indispensável que:',
    answers: [
      {
        answer: 'o investimento em sistemas de abastecimento de água seja priorizado em relação à ampliação do esgotamento sanitário.',
        correct: false,
      },
      {
        answer: 'as pessoas desprovidas de água tratada e saneamento, de maneira geral, envolvam-se em projetos estruturados pelo BNDES.',
        correct: false,
      },
      {
        answer: 'os investimentos em saneamento básico sejam ampliados para que a meta do Plano Nacional de Saneamento Básico seja cumprida até 2030',
        correct: false,
      },
      {
        answer: 'a disponibilidade e a gestão sustentável de água e esgoto sejam ampliadas progressivamente em todos os estados brasileiros.',
        correct: true,
      },
      {
        answer: 'os brasileiros tomem consciência da importância do apoio de instituições bancárias para o acesso aos serviços de saneamento básico.',
        correct: false,
      },
    ],
  },{
    question: '(Enem 2020) "Hino à Bandeira Em teu seio formoso retratas Este céu de puríssimo azul, A verdura sem par destas matas, E o esplendor do Cruzeiro do Sul. Contemplando o teu vulto sagrado, Compreendemos o nosso dever, E o Brasil por seus filhos amado, Poderoso e feliz há de ser! Sobre a imensa Nação Brasileira, Nos momentos de festa ou de dor, Paira sempre sagrada bandeira Pavilhão da justiça e do amor!" No Hino à Bandeira, a descrição é um recurso utilizado para exaltar o símbolo nacional na medida em que:',
    answers: [
      {
        answer: 'remete a um momento futuro.',
        correct: false,
      },
      {
        answer: 'promove a união dos cidadãos.',
        correct: false,
      },
      {
        answer: 'valoriza os seus elementos.',
        correct: true,
      },
      {
        answer: 'emprega termos religiosos.',
        correct: false,
      },
      {
        answer: 'recorre à sua história.',
        correct: false,
      },
    ],
  },{
    question: 'O humor na charge é provocado porque a personagem comete um deslize referente a um dos fatores pragmáticos do texto, sendo ele:',
    answers: [
      {
        answer: 'a intencionalidade, considerando que o deslize cometido pela personagem foi proposital.',
        correct: false,
      },
      {
        answer: 'a informatividade, pois a personagem desconhece a figura de um pássaro, assim como desconhece o símbolo da rede social mencionada.',
        correct: false,
      },
      {
        answer: 'a situacionalidade, já que a situação comunicativa permite facilmente que um pássaro seja confundido com o símbolo de uma conhecida rede social.',
        correct: false,
      },
      {
        answer: 'a informatividade, uma vez que o humor decorre do fato de que ele não conhece o pássaro e faz referência ao símbolo do Twitter devido ao seu desconhecimento de mundo e conhecimento de mídias sociais.',
        correct: true,
      },
      {
        answer: 'a intertextualidade, visto que a personagem propositalmente menciona a rede social Twitter com a única intenção de que o diálogo entre os textos desperte o humor na narrativa.',
        correct: false,
      },
    ],
  },{
    question: '(Enem 2018) ABL lança novo concurso cultural: “Conte o conto sem aumentar um ponto” Em razão da grande repercussão do concurso de Microcontos do Twitter da ABL, o Abletras, a Academia Brasileira de Letras, lançou, no dia do seu aniversário de 113 anos, um novo concurso cultural intitulado “Conte o conto sem aumentar um ponto”, baseado na obra A cartomante, de Machado de Assis. “Conte o conto sem aumentar um ponto” tem como objetivo dar um final distinto do original ao conto A cartomante de Machado de Assis, utilizando-se o mesmo número de caracteres – ou inferior – que Machado concluiu seu trabalho, ou seja, 1 778 caracteres. Vale ressaltar que, para participar do concurso, o concorrente deverá ser seguidor do Twitter da ABL, o Abletras. O Twitter é reconhecido por promover o compartilhamento de textos. Nessa notícia, essa rede social foi utilizada como veículo/suporte para um concurso literário por causa do(a):',
    answers: [
      {
        answer: 'limite predeterminado de extensão do texto.',
        correct: true,
      },
      {
        answer: 'interesse pela participação de jovens.',
        correct: false,
      },
      {
        answer: 'atualidade do enredo proposto.',
        correct: false,
      },
      {
        answer: 'fidelidade a fatos cotidianos.',
        correct: false,
      },
      {
        answer: 'dinâmica da sequência narrativa.',
        correct: false,
      },
    ],
  },{
    question: 'Em sua conversa com o pai, Calvin busca persuadi-lo, recorrendo à estratégia argumentativa de:',
    answers: [
      {
        answer: 'mostrar que um bom trabalho como pai implica a valorização por parte do filho.',
        correct: false,
      },
      {
        answer: 'apelar para a necessidade que o pai demonstra de ser bem-visto pela família.',
        correct: false,
      },
      {
        answer: 'explorar a preocupação do pai com a própria imagem e popularidade.',
        correct: false,
      },
      {
        answer: 'atribuir seu ponto de vista a terceiros para respaldar suas intenções.',
        correct: true,
      },
      {
        answer: 'gerar um conflito entre a solicitação da mãe e os interesses do pai.',
        correct: false,
      },
    ],
  },{
    question: '(Enem) A internet proporcionou o surgimento de novos paradigmas sociais e impulsionou a modificação de outros já estabelecidos nas esferas da comunicação e da informação. A principal consequência criticada na tirinha sobre esse processo é a:',
    answers: [
      {
        answer: 'criação de memes.',
        correct: false,
      },
      {
        answer: 'ampliação da blogosfera.',
        correct: false,
      },
      {
        answer: 'supremacia das ideias cibernéticas.',
        correct: false,
      },
      {
        answer: 'comercialização de pontos de vista.',
        correct: true,
      },
      {
        answer: 'banalização do comércio eletrônico.',
        correct: false,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });
  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
