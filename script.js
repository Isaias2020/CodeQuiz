const startButton = document.getElementById('start');
const questionsDiv = document.querySelector(".questionsDiv");
const startPage = document.querySelector(".startQuiz");
const pageQuestion = document.querySelector("#question");
const option1 = document.querySelector("#answer1");
const option2 = document.querySelector("#answer2");
const option3 = document.querySelector("#answer3");
const option4 = document.querySelector("#answer4");
const answsersDiv = document.querySelector(".multiple-choice");
const timer = document.querySelector(".time");
const endGame = document.querySelector(".gameOver");
const scoreEnd = document.querySelector(".score");
let index = 0;
let timeRemaining = 60;
let interval;
let score = 0;
startPage.style.display = "block";
questionsDiv.style.display = "none";
endGame.style.display = "none";

var myQuestions = [{
    question: "What does HTML stand for?",
    answers: {
        a: "Hyper Text Markup Language",
        b: "Casscading Style Sheet",
        c: "Programming language commonly used to create responsive, interactive elements for web pages",
        d: "None of the above"
    },
    correctAnswer: "Hyper Text Markup Language",
},
{
    question: "What is CSS used for?",
    answers: {
        a: "Computer Programming language commonly used to create interactive effects witin web browsers",
        b: "Used to format the layout of web pages",
        c: "Used to structure content on the web",
        d: "None of the above"
    },
    correctAnswer: "Used to format the layout of web pages",
},
{
    question: "What is meant by console.log?",
    answers: {
        a: "Displays discreetly to the debugger",
        b: "Displays a pop-up message to the user",
        c: "Displays a true/false pop-up",
        d: "None of the above"
    },
    correctAnswer: "Displays discreetly to the debugger"
},
{
    question: "What is a variable in Javascript?",
    answers: {
        a: "Nouns of programming (Numbers, strings, booleans, etc.)",
        b: "A quantity which during a calculation is assumed to vary or be capable of carrying a value",
        c: "All of the above",
        d: "None of the above"
    },
    correctAnswer: "Nouns of programming (Numbers, strings, booleans, etc.)"
},
{
    question: "What is the most popular framework for building responsive and mobile-first sites?",
    answers: {
        a: "Facebook",
        b: "Twitter",
        c: "Bootstrap",
        d: "Instagram"
    },
    correctAnswer: "Bootstrap"
},
];


startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", timeKeeper);
answsersDiv.addEventListener("click", nextQuestion);
function startQuiz() {
    startPage.style.display = "none";
    questionsDiv.style.display = "block";
    pageQuestion.innerHTML = myQuestions[index].question;
    option1.innerHTML = myQuestions[index].answers.a;
    option2.innerHTML = myQuestions[index].answers.b;
    option3.innerHTML = myQuestions[index].answers.c;
    option4.innerHTML = myQuestions[index].answers.d;

}
function timeKeeper() {
    interval = setInterval(function () {
        timeRemaining--;
        timer.innerHTML = "Time remaining : " + timeRemaining;
        if (timeRemaining <= 0 || index >= 5) {
            clearInterval(interval);
            gameOver();
        }

    }, 1000);


}
function gameOver() {
    questionsDiv.style.display = "none";
    endGame.style.display = "block";
}

function nextQuestion(event) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML === myQuestions[index].correctAnswer) {
        console.log("correct");
        score += 20;
    } else {
        timeRemaining = timeRemaining - 10;
    }

    if (index < myQuestions.length - 1) {
        index++;
        startQuiz();

    } else {
        grader();
        gameOver();
    }

}

function grader() {
    scoreEnd.innerHTML = "Your score : " + score;
}