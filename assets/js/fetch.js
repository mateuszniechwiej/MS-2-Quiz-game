fetchingData = () => {
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficultyLevel}`;
    console.log(url);
    
    fetch(url).then(respond => {
        console.log(respond);// getting response
        return respond.json();
    }).then(importedQuestions => {
        console.log(importedQuestions.results);//getting object array out of response
        questions = importedQuestions.results.map(importedQuestion => {
            const formattedQuestion = {
                question: importedQuestion.question,
            };

            const answerChoices = [...importedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;//to get random index between 0-3
            answerChoices.splice(formattedQuestion.answer - 1, 0, importedQuestion.correct_answer);

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
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