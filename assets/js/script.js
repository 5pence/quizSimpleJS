// import { questions } from './questions.js'

// getters
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const score = document.getElementById('score');
const playAgain = document.getElementById('playAgain');

let questionNumber = 0;
let scoreAmount = 0;

const questions = [
    {
        "question": "What year is it?",
        "answers": [
            "2021", "1834", "2024", "2025"
        ],
        "correct": 2
    },
    {
        "question": "What year is it next?",
        "answers": [
            "2021", "1834", "2024", "2025"
        ],
        "correct": 3
    },
    {
        "question": "What is the earliest year?",
        "answers": [
            "2021", "1834", "2024", "2025BC"
        ],
        "correct": 3
    }
]


const numberOfQuestions = questions.length;

function loadQuestion(questionNumber) {
    question.innerText = questions[questionNumber].question;
}

/**
 * This function loads the 4 buttons with the answer options
 * @param {number} questionNumber 
 */
function loadAnswers(questionNumber) {
    answer0.innerText = questions[questionNumber].answers[0];
    answer1.innerText = questions[questionNumber].answers[1];
    answer2.innerText = questions[questionNumber].answers[2];
    answer3.innerText = questions[questionNumber].answers[3];
}

/**
 * This function checks the answer from what the user selected
 * it also handles looping ot each question and calling the endGame
 * function if we reach the end of game
 * @param {number} answerSelected 
 */
function checkAnswer(answerSelected) {
    let correctAnswer = questions[questionNumber].correct;
    if (answerSelected === correctAnswer) {
        scoreAmount ++;
        score.innerText = scoreAmount;
    }
    
    questionNumber ++; // increment question number 

    // check to see if we are at the end of the quiz
    if (questionNumber != numberOfQuestions) {
        // we want to goto the next question..
        // load question and answers...
        loadQuestion(questionNumber);
        loadAnswers(questionNumber);
    } else {
        endGame();
    }
    return "yoohoo";
}

function endGameOption(optionSelected) {
    if (optionSelected === 0) {
        window.location.reload();
    } else {
        window.location.assign('https:///5pence.net');
    }
}

function endGame() {
    playAgain.style.visibility = 'visible';
}

function startQuiz() {
    playAgain.style.visibility = 'hidden';
    loadQuestion(questionNumber);
    loadAnswers(questionNumber);
}

startQuiz();

