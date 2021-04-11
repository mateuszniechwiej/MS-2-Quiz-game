// questions and game quiz
const question = document.querySelector("#question");
const currentScore = document.querySelector("#currentScore");
const progressBar = document.querySelector(".qz-progress-bar");
const gameDashboard = document.querySelector("#gameDashboard");

let displayedQuestion = [];
let acceptAnswer = false; //set to false so user can't answer before new question loaded
let score = 0;
let counterQuestion = 0;

let questions = [];

const EASY = "easy", MEDIUM = "medium", HARD = "hard";
const MAX_QUESTIONS = 10;

// Buttons
const categoryBtn = document.querySelector("#categories");
const difficultyBtn = document.querySelector("#difficulty");
// Sounds
const incorrectSound = document.querySelector("#incorrect");
const correctSound = document.querySelector("#correct");
const finalSound = document.querySelector("#finalSound");
const fanfare = document.querySelector('#fanfare');
const noPoints = document.querySelector('#noPoints');


// Bonus point will depend on the level of quiz difficulty the player will chose
let bonus;
const startGame = () => {
    counterQuestion = 0;
    score = 0;
    availableQuestions = [...questions]; // creating full copy of questions
    const answers = document.querySelector("#answers");

    if (difficultyLevel === EASY) {
        bonus = 10;
    } else if (difficultyLevel === MEDIUM) {
        bonus = 12;
    } else if (difficultyLevel === HARD) {
        bonus = 15;
    }

    if (!difficultyLevel || !categoryId) {
        $('#settingsModal').modal('show');
    } else {
        answers.innerHTML = "";
        location.href = "#start";
        gameProgress.classList.remove("hide");
        gameDashboard.classList.add("display");
        getNextQuestion();
    }

};

const getNextQuestion = () => {
    //temprorary setting quiz after questions finish to refresh page so game starts again
    if (availableQuestions.length === 0) {
        question.innerHTML = "";
        $('#finalModal').modal('show');        
        setHighScore();
        gameDashboard.classList.remove("display");
        return;
    }
    counterQuestion++;
    if (counterQuestion <= 10) {
        progressBar.innerText = `${counterQuestion}/${MAX_QUESTIONS}`;
    }

    const indexQuestion = Math.floor(Math.random() * availableQuestions.length); //to get random number depending on number questions available
    displayedQuestion = availableQuestions[indexQuestion]; // displaying random order question
    question.innerText =`${counterQuestion}. ${decodeURIComponent(displayedQuestion.question)}` ; //displaying question by calling question property

    const possibleAnswers = displayedQuestion.possible_answers;
    possibleAnswers.forEach((answer, index) => {
        const alphabet = ["A", "B", "C", "D"];
        answer = answers.innerHTML += `
        <div class="answers-container col-12 col-sm-5">
                        <p class="answer-prefix ">${alphabet[index]}</p>
                        <p class="answer-choice " data-number=${index + 1}></p>
                    </div>`;
    });

    const choices = document.querySelectorAll(".answer-choice");
    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = decodeURIComponent(displayedQuestion["choice" + number]);
        if (choice.innerText === decodeURIComponent(displayedQuestion.correct_answer))
            choice.setAttribute("id", "correct_answer")
    });

    //sync counter Question with progress bar
    progressBar.style.width = `${(counterQuestion / MAX_QUESTIONS) * 100}%`;

    availableQuestions.splice(indexQuestion, 1); //to remove old question and make space for new question
    acceptAnswer = true;
    selectingChoice();
};

const selectingChoice = () => {
    const choices = document.querySelectorAll(".answer-choice");
    choices.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            if (!acceptAnswer) return;

            acceptingAnswer = false;
            const selectedChoice = e.target;
            const correctAnswer = document.querySelector('#correct_answer');
            const answerClass =
                selectedChoice.textContent === decodeURIComponent(displayedQuestion.correct_answer) ? "correct" : "incorrect";

            if (answerClass === "correct") {
                score += bonus;
                currentScore.innerText = score;
                if (document.querySelector(".fa-volume-up ")) {
                    if (!incorrectSound || !correctSound) return;// stop sound going togheter
                    correctSound.currentTime = 0;
                    correctSound.play();
                }
            } else {
                correctAnswer.parentElement.classList.add('correct')
                if (document.querySelector(".fa-volume-up ")) {
                    if (!incorrectSound || !correctSound) return;
                    incorrectSound.currentTime = 0;
                    incorrectSound.play();
                }
            }
            selectedChoice.parentElement.classList.add(answerClass); //targetting parent element to get background colour change
            setTimeout(() => {
                correctAnswer.parentElement.classList.remove('correct')
                selectedChoice.parentElement.classList.remove(answerClass);
                answers.innerHTML = "";
                getNextQuestion();
            }, 700);
        });
    });
};


