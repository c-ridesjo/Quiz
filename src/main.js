import './style/style.scss';

const category = [
  {
    categoryText: 'Välj kategori:',
    categoryOptions: [
      'choice1',
      'choice2',
      'choice3'
    ],
    userCategory: ' ',  
  }  
]

const categoryDiv = document.querySelector('#categoryText');      // Skapar hållare för kategorier
const choice1Btn = document.querySelector('#choice1');        // Skapar knappar för kategorier
const choice2Btn = document.querySelector('#choice2');
const choice3Btn = document.querySelector('#choice3');
const questionText = document.querySelector('#questionText');

choice1Btn.addEventListener('click', checkChoice);      // Lägger till click-event till knapparna
choice2Btn.addEventListener('click', checkChoice);
choice3Btn.addEventListener('click', checkChoice);

let currentTarget = 0;   
let currentQuestion = 0;   

function checkChoice(e) {       // Skapar funktion för val av kategori
  const userCategory = e.currentTarget.innerHTML;

  const userChoice = category[currentTarget].userChoice;
  if (userCategory === 'Film') {
    console.log('Film');        // Skriv ut vilken kategori som valts 
  }
  if (userCategory === 'Musik') {
    console.log('Musik');
  }
  if (userCategory === 'Familj') {
   console.log('Familj');      
  }
  document.querySelector('#categoryContainer').style.display = 'none';    // Kategorierna döljs    ???
}
    
let player = 0;

document.querySelector('#startGameBtn').addEventListener('click', startGame);

function startGame() {
  console.log('startGame');

  player = document.querySelector('#playerInput').value;    // Sparar spelarens namn

  document.querySelector('#player').style.display = 'none'; // Namnet döljs

  nextQuestion();
}

const questionsChoice1 = [           // Frågor för kategori 1 (film)
  {
    questionText: 'Vem hissades upp i flaggstången i Lönneberga?',
    answerOptions: [
      'Karl-Alfred',
      'Emils mamma',
      'Ida'
    ],
    correctAnswer: 'Ida',
  },
  {
    questionText: 'Vad heter Ronja Rövardotters vän?',
    answerOptions: [
      'Birk',
      'Bark',
      'Burk'
    ],
    correctAnswer: 'Birk',
  },
  {
    questionText: 'Vad heter årets julkalender?',
    answerOptions: [
      'Prinskorven som försvann',
      'Kronprinsen som försvann',
      'Kronan som försvann'
    ],
    correctAnswer: 'Kronprinsen som försvann',
  },
  {
    questionText: 'Vad bor Svampbob Fyrkant i?',
    answerOptions: [
      'En ubåt',
      'En ananas',
      'En snäcka'
    ],
    correctAnswer: 'En ananas',
  },
  {
    questionText: 'Vad förvandlas Chihiros föräldrar till i början av Spirited away?',
    answerOptions: [
      'Grisar',
      'Kor',
      'Getter'
    ],
    correctAnswer: 'Grisar',
  },
  {
    questionText: 'Vilken färg har huvudpersonen i Megamind?',
    answerOptions: [
      'Röd',
      'Grön',
      'Blå'
    ],
    correctAnswer: 'Blå',
  },
  {
    questionText: 'Vilket djur är bussen i Totoro?',
    answerOptions: [
      'Kanin',
      'Hund',
      'Katt'
    ],
    correctAnswer: 'Katt',
  },
  {
    questionText: 'Vilket spöke är hungrigast i Spookys?',
    answerOptions: [
      'Gulp',
      'Freezy',
      'Splash'
    ],
    correctAnswer: 'Gulp',
  },
  {
    questionText: 'Vad har Harry Potter för husdjur?',
    answerOptions: [
      'En orange katt',
      'En grön orm',
      'En vit uggla'
    ],
    correctAnswer: 'En vit uggla',
  },
  {
    questionText: 'Vad heter det gröna trollet?',
    answerOptions: [
      'Booba',
      'Shrek',
      'Trolle'
    ],
    correctAnswer: 'Shrek',
  }
];

const questionsChoice2 = [        // Frågor för kategori 2 (musik)
  {
    questionText: 'Vem sjunger "Dans och håll igång"',
    answerOptions: [
      'Hasse Andersson',
      'Lasse Alfredsson',
      'Hasse Albertsson'
    ],
    correctAnswer: 'Hasse Andersson',
  }
]

const questionsChoice3 = [        // Frågor för kategori 3 (familj)
  {
    questionText: 'Vem är hungrigast av spökena?',
    answerOptions: [
      'Freezy',
      'William',
      'Gulp'
    ],
    correctAnswer: 'Gulp',
  }
]

const questionDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');

answer1Btn.addEventListener('click', checkAnswer);
answer2Btn.addEventListener('click', checkAnswer);
answer3Btn.addEventListener('click', checkAnswer);

let points = 0;

function checkAnswer(e) {
  const userAnswer = e.currentTarget.innerHTML;     // Vilket svarsalternativ spelaren väljer

  const correctAnswer = questionsChoice1[currentQuestion - 1].correctAnswer;    // -1 för att få rätt svar innan nästa fråga
  if (userAnswer === correctAnswer) {     // Jämför spelarens svar med det rätta svaret
    points++;     // Ger 1 poäng vid rätt svar
  } 
  else {
    points--;     // Ger -1 poäng vid fel svar
  }
  nextQuestion();
}

document.querySelector('#nextQuestBtn').addEventListener('click', startGame);

function nextQuestion() {
  if (currentQuestion >= questionsChoice1.length) {
    gameOver();
    return;
  }

  questionText.innerHTML = questionsChoice1[currentQuestion].questionText;
  answer1Btn.innerHTML = questionsChoice1[currentQuestion].answerOptions[0];
  answer2Btn.innerHTML = questionsChoice1[currentQuestion].answerOptions[1];
  answer3Btn.innerHTML = questionsChoice1[currentQuestion].answerOptions[2];

  currentQuestion++;      // currentQuestion + 1 (går vidare till nästa fråga)
}

document.querySelector('#restartGameBtn').addEventListener('click', restartGame);

function restartGame() {
  document.querySelector('#gameOver').style.display = 'none';
  document.querySelector('#questionContainer').classList.remove('hidden');
  currentQuestion = 0;
  points = 0;
  nextQuestion();
}

function gameOver() {
  document.querySelector('#gameOver').style.display = 'block';
  document.querySelector('#questionsContainer').classList.add('hidden');
  document.querySelector('#pointsContainer').innerHTML = `Du fick ${points} poäng!`;
}