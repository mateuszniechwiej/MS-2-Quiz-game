fetchingData = () => {
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficultyLevel}&encode=url3986`;
    console.log(url);

    fetch(url).then(respond => {
        console.log(respond);// getting response
        return respond.json();
    }).then(importedQuestions => {
        console.log(importedQuestions.results);//getting object array out of response
        questions = importedQuestions.results.map(importedQuestion => {
            const formattedQuestion = {
                question: importedQuestion.question,
                possible_answers: [importedQuestion.correct_answer, ...importedQuestion.incorrect_answers],
                correct_answer: importedQuestion.correct_answer,
                incorrect_answers: [...importedQuestion.incorrect_answers]
            };

            const answerChoices = [...formattedQuestion.incorrect_answers];
            randomNumber = Math.floor(Math.random() * 3) + 1;//to get random index between 0-3
            answerChoices.splice(randomNumber - 1, 0, formattedQuestion.correct_answer);

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
                console.log(choice);
            });
            console.log(formattedQuestion);
            return formattedQuestion;//returning Array object with questions only to use in the quiz
        });
        startGame();
    })
        .catch(error => {
            console.error(error);
        })
};
const start = document.querySelector("#start");


start.addEventListener('click', fetchingData);