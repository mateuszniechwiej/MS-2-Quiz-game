// questions and game quiz
const question = document.querySelector("#question");
const currentScore = document.querySelector("#current-score");
const progressBar = document.querySelector(".qz-progress-bar");

let displayedQuestion = [];
let acceptAnswer = false; //set to false so user can't answer before new question loaded
let score = 0;
let counterQuestion = 0;

let questions = [];

const EASY = "easy", MEDIUM = "medium", HARD = "hard";
const MAX_QUESTIONS = 10;
// sounds
const incorrectSound = document.querySelector("#incorrect");
const correctSound = document.querySelector("#correct");
const finalSound = document.querySelector("#finalSound");


// Bonus point will depend on the level of quiz difficulty the player will chose
let bonus;
startGame = () => {
    disableButtons();
    counterQuestion = 0;
    score = 0;
    availableQuestions = [...questions]; // creating full copy of questions
    const answers = document.querySelector("#answers")

    console.log(difficultyLevel)
    console.log(categoryId)
    if (difficultyLevel === EASY) {
        bonus = 10;
    } else if (difficultyLevel === MEDIUM) {
        bonus = 12;
    } else if (difficultyLevel === HARD) {
        bonus = 15;
    };
    if (!difficultyLevel || !categoryId) {
        $('#settingsModal').modal('show');
    } else {
        answers.innerHTML = "";
        getNextQuestion();

    }

};

getNextQuestion = () => {
    //temprorary setting quiz after questions finish to refresh page so game starts again
    if (availableQuestions.length === 0) {
        question.innerHTML = "";
        if (document.querySelector(".fa-volume-up")) {
            finalSound.play();
        }
        $('#finalModal').modal('show');
        setHighScore();
        return

    }
    counterQuestion++;
    if (counterQuestion <= 10) {
        progressBar.innerText = `${counterQuestion}/${MAX_QUESTIONS}`;
    }
    console.log(difficultyLevel);
    console.log(categoryId);

    const indexQuestion = Math.floor(Math.random() * availableQuestions.length); //to get random number depending on number questions available
    console.log(availableQuestions);
    displayedQuestion = availableQuestions[indexQuestion]; // displaying random order question
    question.innerText = displayedQuestion.question; //displaying question by calling question property

    console.log(displayedQuestion);


    const possibleAnswers = displayedQuestion.possible_answers;
    console.log(possibleAnswers);

    possibleAnswers.forEach((answer, index) => {
        const alphabet = ["A", "B", "C", "D"];
        answer = answers.innerHTML += `
        <div class="answers-container">
                        <p class="answer-prefix ">${alphabet[index]}</p>
                        <p class="answer-choice " data-number=${index + 1}></p>
                    </div>`
    });

    const choices = document.querySelectorAll(".answer-choice");
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = displayedQuestion["choice" + number];
    })

    console.log(answers.innerHTML)
    //sync counter Question with progress bar
    progressBar.style.width = `${(counterQuestion / MAX_QUESTIONS) * 100}%`;

    console.log(displayedQuestion);

    console.log(availableQuestions);

    availableQuestions.splice(indexQuestion, 1); //to remove old question and make space for new question
    acceptAnswer = true;
    selectingChoice();
};

selectingChoice = () => {
    const choices = document.querySelectorAll(".answer-choice");
    choices.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            if (!acceptAnswer) return;

            acceptingAnswer = false;
            const selectedChoice = e.target;
            console.log(selectedChoice);
            // const selectedChoice = Number(selectedChoice.dataset["number"]); //to get change to number

            console.log(selectedChoice.textContent === displayedQuestion.correct_answer); //to compare selected answer with correct answer

            //decalring variable using tenary operator(allowed becouse it's gives an expression)
            const answerClass =
                selectedChoice.textContent === displayedQuestion.correct_answer
                    ? "correct"
                    : "incorrect";
            if (answerClass === "correct") {
                score += bonus;
                currentScore.innerText = `${score} points`;
                if (document.querySelector(".fa-volume-up")) {
                    correctSound.play();
                }
            } else {
                if (document.querySelector(".fa-volume-up")) {
                    incorrectSound.play();
                }
            }
            selectedChoice.parentElement.classList.add(answerClass); //targetting parent element to get background colour change
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(answerClass);
                answers.innerHTML = "";
                getNextQuestion();
            }, 800);
        });
    });
}

disableButtons = () => {
    document.querySelector("#categories").disabled = true;
    document.querySelector("#difficulty").disabled = true;
}