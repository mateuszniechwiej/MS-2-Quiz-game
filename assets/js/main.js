// Function to check if user in local Storage(if not open username modal)
let user = localStorage.getItem("user");
let highScore = 0;

checkUserData = () => {
  if ( (user === null) || (user === "")) {
    //console.log('there is no player')
    localStorage.setItem(highScore, 0);
    userModalOn();
  } else {
    user = localStorage.getItem("user");
    highScore = localStorage.getItem("highScore");
    if (highScore === null) {
      highScore = 0;
    };
    displayUsernameInfo();
    return;
    
  }
}
checkUserData;
// function to store username in localstorage
userNameSubmit = () => {
  user = document.querySelector("#user").value;
  localStorage.setItem("user", user);
  console.log(user);
  userModalOff();// close username modal
  displayUsernameInfo();// function to display user data on dashboard
}

displayUsernameInfo = () => {
  document.querySelector(".userName").innerHTML = `${user}`;
  document.querySelector("#highScore").innerHTML = `${highScore} points`;
}

let subitName = document.querySelector("#submitName");
subitName.addEventListener('click', userNameSubmit);


//Username Modal
userModalOn = () => {
  document.querySelector("#usernameModal--bg").style.display = "block"; 
  document.querySelector("#playerModal").style.display = "block"; 
  document.querySelector("#playerModal").classList.add("show"); 
}
userModalOff = () => {
  document.querySelector("#usernameModal--bg").style.display = "none";
  document.querySelector("#playerModal").style.display = "none";
  document.querySelector("#playerModal").classList.remove("show"); 
}
// const userOn = document.querySelector("#openUser");
// userOn.addEventListener("click", userModalOn);

const userOff = document.querySelectorAll(".closeUser")

Array.from(userOff).forEach((e) => {
  e.addEventListener('click', userModalOff);
});

// const userModal = document.querySelector("#playerModal");

// To activate Info modal using javascript vanila
openModal = () => {
  document.querySelector("#qz-modal--bg").style.display = "block"; //display bg as block
  document.querySelector("#qz-Modal").style.display = "block"; //display modal as a block
  document.querySelector("#qz-Modal").classList.add("show"); //add class to show the modal
}
const infoOn = document.querySelector("#openModal");
infoOn.addEventListener("click", openModal);

closeModal = () => {
  document.querySelector("#qz-modal--bg").style.display = "none";
  document.querySelector("#qz-Modal").style.display = "none";
  document.querySelector("#qz-Modal").classList.remove("show"); // to close the modal remove show class
}

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
}

iconOn.addEventListener("click", switcher);
// Click Sound when volume on
const click = document.querySelector("#btnClick");
const allAudio = document.querySelectorAll(".btn");

clickBtn =  () => {
  if (document.querySelector(".fa-volume-up")) {
    click.play();
  }
}
Array.from(allAudio).forEach((a) => {
  a.addEventListener("click", clickBtn);
});


// questions and game quiz
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll('.answer-choice'));

let displayedQuestion = {};
let acceptAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
//selecting categories
const categories = Array.from(document.querySelectorAll(".category"));

// geting value of clicked cattegory button
categories.forEach(category => {
  category.addEventListener('click', e => {
    const categoryId = e.target.value;
    console.log(categoryId);
  });
});


// const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}`





// CONSTANST VARIABLES
// Bonus point will depend on the level of quiz difficulty the player will chose 
const EASY_BONUS = 10;
const MEDIUM_BONUS = 12;
const HARD_BONUS = 15;

// startGame = () => {
//   //
