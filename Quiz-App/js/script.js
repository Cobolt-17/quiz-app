const categoryData = {
  mathematics: [
    { question: 'What is the derivative of x²?', options: ['2x', 'x²', 'x', '2'], answer: '2x' },
    { question: 'What is the value of π approximately?', options: ['3.14', '2.72', '1.62', '4.13'], answer: '3.14' },
    { question: 'Which shape has four equal sides and four right angles?', options: ['Rectangle', 'Square', 'Rhombus', 'Trapezoid'], answer: 'Square' },
    { question: 'What is 15% of 200?', options: ['25', '30', '35', '40'], answer: '30' },
    { question: 'What is the solution for 2x + 5 = 13?', options: ['4', '3', '6', '5'], answer: '4' },
    { question: 'What is the term for a polygon with 8 sides?', options: ['Hexagon', 'Octagon', 'Heptagon', 'Nonagon'], answer: 'Octagon' },
    { question: 'What is the area of a triangle with base 6 and height 4?', options: ['12', '24', '10', '15'], answer: '12' },
    { question: 'If a = 3 and b = 4, what is the value of a² + b²?', options: ['25', '12', '7', '10'], answer: '25' },
    { question: 'What is the next number in the sequence: 2, 4, 8, 16, ?', options: ['18', '24', '32', '20'], answer: '32' },
    { question: 'What is the square root of 81?', options: ['9', '8', '7', '6'], answer: '9' }
  ],
  web: [
    { question: 'Which tag creates a hyperlink in HTML?', options: ['<link>', '<a>', '<href>', '<nav>'], answer: '<a>' },
    { question: 'Which property changes the background color in CSS?', options: ['color', 'background-color', 'font-size', 'margin'], answer: 'background-color' },
    { question: 'Which language adds interactivity to web pages?', options: ['HTML', 'CSS', 'JavaScript', 'SQL'], answer: 'JavaScript' },
    { question: 'Which HTML element is used for the main heading?', options: ['<h1>', '<title>', '<header>', '<p>'], answer: '<h1>' },
    { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style System', 'Colorful Style Sheets'], answer: 'Cascading Style Sheets' },
    { question: 'How do you create a numbered list in HTML?', options: ['<ul>', '<ol>', '<li>', '<dl>'], answer: '<ol>' },
    { question: 'Which CSS property controls the space between elements?', options: ['padding', 'border', 'opacity', 'display'], answer: 'padding' },
    { question: 'What is the correct HTML element for inserting an image?', options: ['<img>', '<image>', '<src>', '<pic>'], answer: '<img>' },
    { question: 'Which HTML attribute provides alternative text for images?', options: ['alt', 'title', 'src', 'href'], answer: 'alt' },
    { question: 'Which CSS unit is relative to the font size of the element?', options: ['px', 'em', 'cm', 'vh'], answer: 'em' }
  ],
  java: [
    { question: 'Which keyword is used to create a class in Java?', options: ['class', 'struct', 'object', 'new'], answer: 'class' },
    { question: 'What is the size of int in Java?', options: ['8 bits', '16 bits', '32 bits', '64 bits'], answer: '32 bits' },
    { question: 'Which method runs when a Java program starts?', options: ['run()', 'main()', 'start()', 'execute()'], answer: 'main()' },
    { question: 'Which operator is used for string comparison?', options: ['==', 'equals()', '!=', 'compare()'], answer: 'equals()' },
    { question: 'Which keyword prevents method overriding?', options: ['static', 'final', 'private', 'volatile'], answer: 'final' },
    { question: 'Which is a valid Java identifier?', options: ['2ndValue', 'my-variable', 'myValue', 'class'], answer: 'myValue' },
    { question: 'What is inheritance in Java?', options: ['A way to store data', 'A way to organize files', 'A mechanism to reuse code', 'A type of loop'], answer: 'A mechanism to reuse code' },
    { question: 'Which keyword is used to handle exceptions?', options: ['try', 'catch', 'throw', 'finally'], answer: 'try' },
    { question: 'Which package contains the Scanner class?', options: ['java.io', 'java.util', 'java.net', 'java.lang'], answer: 'java.util' },
    { question: 'What is the output type of System.out.println?', options: ['int', 'void', 'String', 'boolean'], answer: 'void' }
  ],
  general: [
    { question: 'Who is known as the father of the computer?', options: ['Charles Babbage', 'Alan Turing', 'Ada Lovelace', 'Steve Jobs'], answer: 'Charles Babbage' },
    { question: 'What is the capital of Japan?', options: ['Tokyo', 'Seoul', 'Beijing', 'Bangkok'], answer: 'Tokyo' },
    { question: 'Which gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], answer: 'Carbon Dioxide' },
    { question: 'Which continent is the Sahara Desert located on?', options: ['Asia', 'Africa', 'Australia', 'South America'], answer: 'Africa' },
    { question: 'Which organ is responsible for pumping blood?', options: ['Lungs', 'Brain', 'Heart', 'Liver'], answer: 'Heart' },
    { question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Fe', 'Gd'], answer: 'Au' },
    { question: 'What is the largest ocean on Earth?', options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Arctic Ocean'], answer: 'Pacific Ocean' },
    { question: 'Who painted the Mona Lisa?', options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'], answer: 'Leonardo da Vinci' },
    { question: 'Which is the fastest land animal?', options: ['Lion', 'Cheetah', 'Horse', 'Tiger'], answer: 'Cheetah' },
    { question: 'What does UNESCO stand for?', options: ['United Nations Educational, Scientific and Cultural Organization', 'United Nations Economic and Social Council', 'Universal Network for Education, Science and Culture', 'United Nations Energy and Science Organization'], answer: 'United Nations Educational, Scientific and Cultural Organization' }
  ],
  computer: [
    { question: 'What does CPU stand for?', options: ['Central Processing Unit', 'Computer Program Unit', 'Central Performance Unit', 'Control Processing Unit'], answer: 'Central Processing Unit' },
    { question: 'What is the primary memory in a computer?', options: ['Hard Disk', 'RAM', 'Flash Drive', 'CD-ROM'], answer: 'RAM' },
    { question: 'Which device is used to display information?', options: ['Keyboard', 'Monitor', 'Printer', 'Mouse'], answer: 'Monitor' },
    { question: 'What does BIOS do?', options: ['Runs applications', 'Starts the computer and initializes hardware', 'Stores user files', 'Manages network connections'], answer: 'Starts the computer and initializes hardware' },
    { question: 'What is a binary digit?', options: ['Bit', 'Byte', 'Pixel', 'Node'], answer: 'Bit' },
    { question: 'Which component stores data permanently?', options: ['RAM', 'ROM', 'Hard Drive', 'Cache'], answer: 'Hard Drive' },
    { question: 'What is an operating system?', options: ['A software that manages hardware and software resources', 'A programming language', 'A type of processor', 'A data storage tool'], answer: 'A software that manages hardware and software resources' },
    { question: 'Which of the following is an input device?', options: ['Printer', 'Monitor', 'Scanner', 'Speaker'], answer: 'Scanner' },
    { question: 'What does GPU accelerate?', options: ['Network speed', 'Graphics rendering', 'File storage', 'Battery life'], answer: 'Graphics rendering' },
    { question: 'Which part is considered computer software?', options: ['Motherboard', 'Operating System', 'Keyboard', 'Monitor'], answer: 'Operating System' }
  ]
};

const categoryNames = {
  mathematics: 'Mathematics',
  web: 'Web Development',
  java: 'Java Programming',
  general: 'General Knowledge',
  computer: 'Computer Fundamentals'
};

const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');
const categoryLabel = document.getElementById('categoryLabel');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const progressBar = document.getElementById('progressBar');
const timerDisplay = document.getElementById('timer');
const nextBtn = document.getElementById('nextBtn');
const retakeBtn = document.getElementById('retakeBtn');
const homeBtn = document.getElementById('homeBtn');
const exitBtn = document.getElementById('exitBtn');
const totalQuestionsDisplay = document.getElementById('totalQuestions');
const correctAnswersDisplay = document.getElementById('correctAnswers');
const wrongAnswersDisplay = document.getElementById('wrongAnswers');
const scoreCircle = document.getElementById('scoreCircle');
const performanceMessage = document.getElementById('performanceMessage');

let currentCategory = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let isAnswered = false;
let timeLeft = 10;
let timerId = null;
let currentQuestions = [];

function getCurrentCategory() {
  const path = window.location.pathname.toLowerCase();
  const fileName = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');

  if (fileName === 'maths') {
    return 'mathematics';
  }

  if (fileName === 'general') {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('category') === 'computer' ? 'computer' : 'general';
  }

  return ['web', 'java'].includes(fileName) ? fileName : null;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prepareQuestionSet() {
  if (!currentCategory || !categoryData[currentCategory]) {
    return [];
  }

  return shuffleArray(categoryData[currentCategory]).map((item) => ({
    ...item,
    options: shuffleArray(item.options)
  }));
}

function resetTimer() {
  clearInterval(timerId);
  timeLeft = 10;
  if (timerDisplay) {
    timerDisplay.textContent = `${timeLeft}s`;
  }
}

function startTimer() {
  resetTimer();
  timerId = setInterval(() => {
    timeLeft -= 1;
    if (timerDisplay) {
      timerDisplay.textContent = `${timeLeft}s`;
    }

    if (timeLeft <= 0) {
      clearInterval(timerId);
      handleTimeExpired();
    }
  }, 1000);
}

function showScreen(screen) {
  [quizScreen, resultScreen].forEach((section) => {
    if (section) {
      section.classList.remove('active');
    }
  });

  if (screen) {
    screen.classList.add('active');
  }
}

function updateProgress() {
  if (!progressBar || !currentQuestions.length) {
    return;
  }

  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function renderQuestion() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  if (!currentQuestion) {
    return;
  }

  if (categoryLabel) {
    categoryLabel.textContent = categoryNames[currentCategory] || 'Quiz';
  }

  if (questionCounter) {
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  }

  if (questionText) {
    questionText.textContent = currentQuestion.question;
  }

  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.type = 'button';
      button.textContent = option;
      button.addEventListener('click', () => handleAnswer(option));
      optionsContainer.appendChild(button);
    });
  }

  isAnswered = false;
  nextBtn.disabled = true;
  updateProgress();
  startTimer();
}

function disableOptions() {
  const buttons = optionsContainer ? Array.from(optionsContainer.querySelectorAll('.option-btn')) : [];
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function showCorrectAnswer() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  if (!currentQuestion || !optionsContainer) {
    return;
  }

  const buttons = Array.from(optionsContainer.querySelectorAll('.option-btn'));
  buttons.forEach((button) => {
    if (button.textContent === currentQuestion.answer) {
      button.classList.add('correct');
    }
  });
}

function handleAnswer(selectedOption) {
  if (isAnswered) {
    return;
  }

  clearInterval(timerId);
  isAnswered = true;
  disableOptions();
  showCorrectAnswer();

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const buttons = optionsContainer ? Array.from(optionsContainer.querySelectorAll('.option-btn')) : [];
  buttons.forEach((button) => {
    if (button.textContent === selectedOption && selectedOption !== currentQuestion.answer) {
      button.classList.add('wrong');
    }
  });

  if (selectedOption === currentQuestion.answer) {
    correctAnswers += 1;
  } else {
    wrongAnswers += 1;
  }

  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function handleTimeExpired() {
  if (isAnswered) {
    return;
  }

  isAnswered = true;
  wrongAnswers += 1;
  disableOptions();
  showCorrectAnswer();
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function proceedToNextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timerId);
  if (!scoreCircle || !totalQuestionsDisplay || !correctAnswersDisplay || !wrongAnswersDisplay || !performanceMessage) {
    return;
  }

  const total = currentQuestions.length;
  const percentage = total ? Math.round((correctAnswers / total) * 100) : 0;

  scoreCircle.textContent = `${percentage}%`;
  totalQuestionsDisplay.textContent = total;
  correctAnswersDisplay.textContent = correctAnswers;
  wrongAnswersDisplay.textContent = wrongAnswers;

  let message = 'Needs Improvement';
  if (percentage >= 90) {
    message = 'Excellent';
  } else if (percentage >= 75) {
    message = 'Very Good';
  } else if (percentage >= 60) {
    message = 'Good';
  }

  performanceMessage.textContent = message;
  showScreen(resultScreen);
}

function startQuiz() {
  currentCategory = getCurrentCategory();
  if (!currentCategory || !categoryData[currentCategory]) {
    return;
  }

  currentQuestions = prepareQuestionSet();
  currentQuestionIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function createExitModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-card">
      <h3>Exit Quiz</h3>
      <p>Are you sure you want to exit the quiz? Your current progress will be lost.</p>
      <div class="modal-actions">
        <button class="secondary-btn" type="button" id="continueQuizBtn">Continue Quiz</button>
        <button class="primary-btn" type="button" id="confirmExitBtn">Exit to Home</button>
      </div>
    </div>
  `;

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeExitModal();
    }
  });

  const continueBtn = overlay.querySelector('#continueQuizBtn');
  const confirmExitBtn = overlay.querySelector('#confirmExitBtn');

  if (continueBtn) {
    continueBtn.addEventListener('click', closeExitModal);
  }

  if (confirmExitBtn) {
    confirmExitBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  document.body.appendChild(overlay);
  return overlay;
}

function openExitModal() {
  if (!document.body) {
    return;
  }

  if (!window.exitModalOverlay) {
    window.exitModalOverlay = createExitModal();
  }

  const overlay = window.exitModalOverlay;
  overlay.classList.add('active');
}

function closeExitModal() {
  if (!window.exitModalOverlay) {
    return;
  }

  window.exitModalOverlay.classList.remove('active');
}

if (exitBtn) {
  exitBtn.addEventListener('click', openExitModal);
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    proceedToNextQuestion();
  });
}

if (retakeBtn) {
  retakeBtn.addEventListener('click', startQuiz);
}

if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    if (window.location.pathname.toLowerCase().includes('/html/')) {
      window.location.href = 'index.html';
    }
  });
}

if (getCurrentCategory() && quizScreen) {
  startQuiz();
}
