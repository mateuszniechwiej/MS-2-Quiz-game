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
// Final Score Modal ***********************************************/

const finalScore = document.querySelector("#finalScore");

finalModalOn = () => {
  document.querySelector("#finalModal--bg").style.display = "block";
  document.querySelector("#finalModal").style.display = "block";
  document.querySelector("#finalModal").classList.add("show");

  //checking if game score is higeher that current score,if yes set new score to localStorage and display
  finalScore.innerText = currentScore.innerText;
  if (finalScore.innerText > userHighScore.innerText) {
    localStorage.setItem("topScore", highScore)
    userHighScore.innerText = finalScore.innerText;
    
  }
  
  
};
finalModalOff = () => {
  document.querySelector("#finalModal--bg").style.display = "none";
  document.querySelector("#finalModal").style.display = "none";
  document.querySelector("#finalModal").classList.remove("show");
  
};
const finalOff = document.querySelectorAll(".closeHighScore");

Array.from(finalOff).forEach((e) => {
  e.addEventListener("click", finalModalOff);
});
// closing high Score Modal by clicking outside the modal
window.onclick = (e) => {
  if (e.target == finalModal) {
    finalModalOff();
  }
};

// -------------------------------------Game Settings-------------------------------------------------
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





