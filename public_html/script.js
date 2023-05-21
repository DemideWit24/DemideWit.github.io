const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=> Math.random()-.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question ;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while ( answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    }else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }
    else{
        element.classList.add('wrong');
    }
    }

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'You go at red and stop at green. What am I?',
        answers: [
            { text: 'Traffic Light', correct: false },
            { text: 'Watermelon', correct: true },
            { text: 'Milkshake', correct: false },
            { text: 'Orange', correct: false }
        ]
    },
    {
        question: 'How many hearts does an octopus have?',
        answers: [
            { text: '1', correct: false },
            { text: '8', correct: false },
            { text: '5', correct: false },
            { text: '3', correct: true }
        ]
    },
    {
        question: 'What does "www" stand for in a website?',
        answers: [
            { text: 'what when where', correct: false },
            { text: 'huh?', correct: false },
            { text: 'World Wide Web', correct: true },
            { text: 'World wide something', correct: false }
        ]
    },
    {
        question: 'I am tall when I am young and short when I am old. What am I?',
        answers: [
            { text: 'Grandma', correct: false },
            { text: 'Tree', correct: false },
            { text: 'Candle', correct: true },
            { text: 'idk', correct: false }
        ]
    },
    {
        question: 'The unicorn is the national animal of which country?',
        answers: [
            { text: 'Scotland', correct: true },
            { text: 'Ireland', correct: false },
            { text: 'South Afica', correct: false },
            { text: 'Disney land', correct: false }
        ]
    },
    {
        question: 'How many colours are there in the rainbow?',
        answers: [
            { text: '3', correct: false },
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '7', correct: true }
        ]
    },
    {
        question: 'What type of fish is Nemo in the movie Finding Nemo?',
        answers: [
            { text: 'Goldfish', correct: false },
            { text: 'Clownfish', correct: true },
            { text: 'Shark', correct: false },
            { text: 'Jellyfish', correct: false }
        ]
    },
    {
        question: 'What marvel avenger uses a hammer in combat?',
        answers: [
            { text: 'Captain America', correct: false },
            { text: 'Thor', correct: true },
            { text: 'Black Widow', correct: false },
            { text: 'Hawkeye', correct: false }
        ]
    },
    {
        question: 'What colour is a giraffes tongue?',
        answers: [
            { text: 'yellow', correct: false },
            { text: 'red', correct: false },
            { text: 'black', correct: false },
            { text: 'purple', correct: true }
        ]
    },
    {
        question: 'Which one of these Formula 1 drivers has never won the title of World Champion?',
        answers: [
            { text: 'Max Verstappen', correct: false },
            { text: 'Lewis Hamilton', correct: false },
            { text: 'Lando Norris', correct: true },
            { text: 'Sebastian Vettel', correct: false }
        ]
    }
    
];


