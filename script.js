const questions = [
    {
        question: "Which CSS property is used to change the  background color of an element?",
        answers: [
            { text: "bgcolor", correct: false },
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "background", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the font size of text?",
        answers: [
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
            { text: "font-style", correct: false },
            { text: "none", correct: false },
        ]  
    },
    {
        question: "HTML stands for?",
        answers: [
            { text: "Hyper text markup language", correct: true },
            { text: "Hyper link and markup language", correct: false },
            { text: "Home tool markup language", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "How many sizes of headers are available in HTML by default?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
        ]
    },
    {
        question: "What is CSS?",
        answers: [
            { text: "CSS is a style sheet language", correct: false },
            { text: "CSS is designed to separate the presentation and content, including layout, colors, and fonts", correct: false },
            { text: "CSS is the language used to style the HTML documents", correct: false },
            { text: "All of the mentioned", correct: true },
        ] 
    },
    {
        question: "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "PHP", correct: false },
            { text: "Ajax", correct: false },
        ]
    },
    {
        question: "Javascript is an _______ language?",
        answers: [
            { text: "Object-Oriented", correct: true },
            { text: "Object-Based", correct: false },
            { text: "Procedural", correct: false },
            { text: "None of the above", correct: false },
        ]  
    },
    {
        question: "In HTML, which attribute is used to define the alternative text for scripts and applets?",
        answers: [
            { text: "title", correct: false },
            { text: "script", correct: false },
            { text: "alt", correct: true },
            { text: "None", correct: false },
        ]  
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        answers: [
            { text: "const", correct: true },
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "Constant", correct: false },
        ]
    },
    {
        question: "In HTML, which attribute is used to specify the URL of the linked resource?",
        answers: [
            { text: "scr", correct: false },
            { text: "href", correct: true },
            { text: "link", correct: false},
            { text: "url", correct: false },
        ]  
    },
];

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
     
    resetState();
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Quiz is finished
        questionElement.innerHTML = "Quiz Finished! Your score: " + score + "/" + questions.length;
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
    }
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();
