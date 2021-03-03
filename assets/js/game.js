// questions and game quiz
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".answer-choice"));
const currentScore = document.querySelector("#current_score");
const progressBarText = document.querySelector(".qz-progress-bar");
console.log(choices);

let displayedQuestion = {};
let acceptAnswer = false;//set to false so user can't answer before new question loaded
let score = 0;
let counterQuestion = 0;
let availableQuestions = [];

let questions = [];

const MAX_QUESTIONS = 10;

// Bonus point will depend on the level of quiz difficulty the player will chose

let bonus;
startGame = () => {

    counterQuestion = 0;
    score = 0;
    availableQuestions = [...questions]; // creating full copy of questions
    console.log(availableQuestions);

    if (difficultyLevel === "easy") {
        bonus = 10;
    } else if (difficultyLevel === "medium") {
        bonus = 12;
    } else {
        bonus = 15;
    }
    console.log(bonus);
    getNextQuestion();
};

getNextQuestion = () => {
    //temprorary setting quiz after questions finish to refresh page so game starts again
    if (availableQuestions.length === 0) {
        return window.location.assign("index.html");
    }
    counterQuestion++;
    
    progressBarText.innerText = `${counterQuestion}/${MAX_QUESTIONS}`;
    

    const indexQuestion = Math.floor(Math.random() * availableQuestions.length); //to get random number depending on number questions available
    displayedQuestion = availableQuestions[indexQuestion]; // displaying random order question
    question.innerText = displayedQuestion.question; //displaying question by calling question property

    const buttonsToHide = Array.from(document.querySelectorAll(".hide"));
    console.log(buttonsToHide);

    const booleanQuestion = !displayedQuestion.choice3; //varaible for when question has only 2 answers,

    if (booleanQuestion) {
        buttonsToHide.forEach((btn) => {
            btn.classList.add("hideBtn");
        });
        choices.forEach((choice) => {
            const number = choice.dataset["number"];
            choice.innerText = displayedQuestion["choice" + number];
        });
    } else {
        buttonsToHide.forEach((btn) => {
            btn.classList.remove("hideBtn");
        });
        choices.forEach((choice) => {
            const number = choice.dataset["number"];
            choice.innerText = displayedQuestion["choice" + number];
        });
    }

    availableQuestions.splice(indexQuestion, 1); //to remove old question and make space for new question
    acceptAnswer = true;
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        console.log(selectedChoice);
        const selectedChoiceNumber = Number(selectedChoice.dataset["number"]);//to get change to number

        console.log(selectedChoiceNumber === displayedQuestion.answer);//to compare selected answer number with correct choice

        //decalring variable using tenary operator(allowed becouse it's gives an expression)
        const answerClass = selectedChoiceNumber === displayedQuestion.answer ? "correct" : "incorrect";
        
        if (answerClass === "correct") {
            score += bonus;
            currentScore.innerText = `${score} points`;
        }

        selectedChoice.parentElement.classList.add(answerClass);//targetting parent element to get background colour change
        setTimeout(() => {

            selectedChoice.parentElement.classList.remove(answerClass);
            getNextQuestion();
        }, 500);


    });
});
