// questions and game quiz
const question = document.querySelector("#question");
const currentScore = document.querySelector("#current-score");
const progressBar = document.querySelector(".qz-progress-bar");

let displayedQuestion = {};
let acceptAnswer = false; //set to false so user can't answer before new question loaded
let score = 0;
let counterQuestion = 0;
let availableQuestions = [];

let questions = [];

const EASY = "easy", MEDIUM = "medium", HARD = "hard";
const MAX_QUESTIONS = 10;

// Bonus point will depend on the level of quiz difficulty the player will chose
let bonus;
startGame = () => {
    counterQuestion = 0;
    score = 0;
    possibleAnswers = []
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
    console.log(difficultyLevel);
    console.log(categoryId);

    availableQuestions.forEach((question => {
        possibleAnswers = question.possible_answers;
    }));


    possibleAnswers.forEach((answer, index) => {
        const possibleAnswer = answer;
        const alphabet = ["A", "B", "C", "D"];
        answers.innerHTML += `
        <div class="answers-container">
                        <p class="answer-prefix ">${alphabet[index]}</p>
                        <p class="answer-choice " data-number=1>${possibleAnswer}</p>
                    </div>`
    });

    if (availableQuestions.length === 0) {
        $('#finalModal').modal('show');
        setHighScore();
    }
    counterQuestion++;
    if (counterQuestion <= 10) {
        progressBar.innerText = `${counterQuestion}/${MAX_QUESTIONS}`;
    }


    //sync counter Question with progress bar
    progressBar.style.width = `${(counterQuestion / MAX_QUESTIONS) * 100}%`;

    const indexQuestion = Math.floor(Math.random() * availableQuestions.length); //to get random number depending on number questions available
    displayedQuestion = availableQuestions[indexQuestion]; // displaying random order question
    if (displayedQuestion !== undefined) { question.innerText = displayedQuestion.question }; //displaying question by calling question property


    console.log(displayedQuestion);

    console.log(availableQuestions);

    // const buttonsToHide = Array.from(document.querySelectorAll(".hide"));
    // console.log(buttonsToHide);

    //

    // if (displayedQuestion.possible_answers.length<3) {
    //     buttonsToHide.forEach((btn) => {
    //         btn.classList.add("hideBtn");
    //     });
    //     choices.forEach((choice) => {
    //         const number = choice.dataset["number"];
    //         choice.innerText = displayedQuestion["choice" + number];
    //     });
    // } else {
    //     buttonsToHide.forEach((btn) => {
    //         btn.classList.remove("hideBtn");
    //     });
    //     choices.forEach((choice) => {
    //         const number = choice.dataset["number"];
    //         choice.innerText = displayedQuestion["choice" + number];
    //     });
    // }

    availableQuestions.splice(indexQuestion, 1); //to remove old question and make space for new question
    acceptAnswer = true;
};

choices.forEach(choice => {
    console.log(number);
    const number = choice.dataset["number"];
    choice.innerText = displayedQuestion["choice" + number];
})

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        console.log(selectedChoice);
        const selectedChoiceNumber = Number(selectedChoice.dataset["number"]); //to get change to number

        console.log(selectedChoiceNumber === displayedQuestion.answer); //to compare selected answer number with correct choice

        //decalring variable using tenary operator(allowed becouse it's gives an expression)
        const answerClass =
            selectedChoiceNumber === displayedQuestion.answer
                ? "correct"
                : "incorrect";
        if (answerClass === "correct") {
            score += bonus;
            currentScore.innerText = `${score} points`;
        }
        selectedChoice.parentElement.classList.add(answerClass); //targetting parent element to get background colour change
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(answerClass);
            answers.innerHTML = "";
            getNextQuestion();
        }, 500);
    });
});

