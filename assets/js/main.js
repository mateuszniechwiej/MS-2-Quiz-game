// Function to check if user in local Storage(if not open username modal)
let user = localStorage.getItem("user");
let highScore = 0;
checkUserData = () => {
  if (user === null || user === "") {
    localStorage.setItem(highScore, 0);
    userModalOn();
  } else {
    user = localStorage.getItem("user");
    highScore = localStorage.getItem("highScore");
    if (highScore === null) {
      highScore = 0;
    }
    displayUsernameInfo();
    return;
  }
};

// function to store username in localstorage
userNameSubmit = () => {
  user = document.querySelector("#user").value;
  localStorage.setItem("user", user);
  console.log(user);
  userModalOff(); // close username modal
  displayUsernameInfo(); // function to display user data on dashboard
};

displayUsernameInfo = () => {
  document.querySelector(".userName").innerHTML = `${user}`;
  document.querySelector("#highScore").innerHTML = `${highScore} points`;
};

let subitName = document.querySelector("#submitName");
subitName.addEventListener("click", userNameSubmit);
checkUserData();

//Username Modal
userModalOn = () => {
  document.querySelector("#usernameModal--bg").style.display = "block";
  document.querySelector("#playerModal").style.display = "block";
  document.querySelector("#playerModal").classList.add("show");
};
userModalOff = () => {
  document.querySelector("#usernameModal--bg").style.display = "none";
  document.querySelector("#playerModal").style.display = "none";
  document.querySelector("#playerModal").classList.remove("show");
};
// const userOn = document.querySelector("#openUser");
// userOn.addEventListener("click", userModalOn);

const userOff = document.querySelectorAll(".closeUser");

Array.from(userOff).forEach((e) => {
  e.addEventListener("click", userModalOff);
});

// const userModal = document.querySelector("#playerModal");

// To activate Info modal using javascript vanila
openModal = () => {
  document.querySelector("#qz-modal--bg").style.display = "block"; //display bg as block
  document.querySelector("#qz-Modal").style.display = "block"; //display modal as a block
  document.querySelector("#qz-Modal").classList.add("show"); //add class to show the modal
};
const infoOn = document.querySelector("#openModal");
infoOn.addEventListener("click", openModal);

closeModal = () => {
  document.querySelector("#qz-modal--bg").style.display = "none";
  document.querySelector("#qz-Modal").style.display = "none";
  document.querySelector("#qz-Modal").classList.remove("show"); // to close the modal remove show class
};

const infoOff = document.querySelectorAll(".close");

Array.from(infoOff).forEach((e) => {
  e.addEventListener("click", closeModal);
});

// Get the modal
var infoModal = document.querySelector("#qz-Modal");

// Click outside the function close the modal
window.onclick = (e) => {
  if (e.target == infoModal) {
    closeModal();
  }
};

// toggle sound icon on
const iconOn = document.querySelector("#off");

switcher = () => {
  iconOn.classList.toggle("fa-volume-up");
};

iconOn.addEventListener("click", switcher);
// Click Sound when volume on
const click = document.querySelector("#btnClick");
const allAudio = document.querySelectorAll(".btn");

clickBtn = () => {
  if (document.querySelector(".fa-volume-up")) {
    click.play();
  }
};
Array.from(allAudio).forEach((a) => {
  a.addEventListener("click", clickBtn);
});

// questions and game quiz
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".answer-choice"));
console.log(choices);

let displayedQuestion = {};
let acceptAnswer = false;//set to false so user can't answer before new question loaded
let score = 0;
let counterQuestion = 0;
let availableQuestions = [];

let questions = [];

// Bonus point will depend on the level of quiz difficulty the player will chose

let bonus;

// selecting and getting diffculty level and categories

const difficulty = document.querySelectorAll("#difficulty");// also without Arrayfrom and then p2
const categories = document.querySelectorAll("#categories");
let difficultyLevel;
let categoryId;

difficulty.forEach((level) => {
  level.addEventListener("click", (e) => {
    difficultyLevel = e.target.value
  });
});
//or 
categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    categoryId = e.target.value;
  });
});

//p2 or categories.forEach((category) {
// category.addEventListener('click', startGame);
// }) and p3//change categories values numbers by using const his_category etc

//after this
settings = () => {
  const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficultyLevel}`;
  console.log(url);

  /*P4. startGame = (e) => {
  if (e.target.value) {
    if(e.target === (anyof the categories)) {
      categoryId = e.taget.value && e.target.value === any of difficulty)
    }
  }
  } 
  */
  if (difficultyLevel === "easy") {
    bonus = 10;
  } else if (difficultyLevel === "medium") {
    bonus = 12;
  } else {
    bonus = 15;
  }
  console.log(bonus);

  fetch(url).then(respond => {
    console.log(respond);// getting response
    return respond.json(); 
  }).then((importedQuestions) => {
    console.log(importedQuestions.results);//getting object array out of response
    questions = importedQuestions.results.map(importedQuestion => {
      const formattedQuestion = {
        question: importedQuestion.question,
      };

      const answerChoices = [... importedQuestion.incorrect_answers];
      formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;//to get random index between 0-3
      answerChoices.splice(formattedQuestion.answer - 1, 0, importedQuestion.correct_answer);
      
      answerChoices.forEach((choice, index) => {
        formattedQuestion['choice' + (index + 1)] = choice;
      });
      return formattedQuestion;//returning Array object with questions only to use in the quiz

    });
    startGame();
  })
    .catch(error => {
      console.error(error);
  })
};
const start = document.querySelector("#start");

start.addEventListener('click', settings);



startGame = () => {
  
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];// creating full copy of questions
  console.log(availableQuestions);
  getNextQuestion();
};

getNextQuestion = () => {
  //temprorary setting quiz after questions finish to refresh page so game starts again
  if (availableQuestions.length === 0) {
    return window.location.assign('index.html');
  }
  counterQuestion++;
  const indexQuestion = Math.floor(Math.random() * availableQuestions.length)//to get random number depending on number questions available
  displayedQuestion = availableQuestions[indexQuestion]; // displaying random order question 
  question.innerText = displayedQuestion.question;//displaying question by calling question property

  const buttonsToHide = Array.from(document.querySelectorAll(".hide"));
  console.log(buttonsToHide);

  const booleanQuestion = !displayedQuestion.choice3;//varaible for when question has only 2 answers,

  if (booleanQuestion) {

    buttonsToHide.forEach(btn => {
      btn.classList.add("hideBtn");
    });
    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = displayedQuestion["choice" + number];
    });
  } else {
    buttonsToHide.forEach(btn => {
      btn.classList.remove("hideBtn");
    });
    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerText = displayedQuestion["choice" + number];
    });
  }

  availableQuestions.splice(indexQuestion, 1);//to remove old question and make space for new question
  acceptAnswer = true;

}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptAnswer) return
    
    acceptingAnswer = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    getNextQuestion();
  })
})