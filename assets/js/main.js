// Function to check if user in local Storage
let user = localStorage.getItem("user");

function checkUserData() {
  if ( (user === null) || (user === "")) {
    console.log('there is no player')
    //
  } else {
    console.log('Welcome back')
    //
  }
}
checkUserData();

//Username Modal
function userModalOn() {
  document.querySelector("#usernameModal--bg").style.display = "block"; 
  document.querySelector("#playerModal").style.display = "block"; 
  document.querySelector("#playerModal").classList.add("show"); 
}
function userModalOff() {
  document.querySelector("#usernameModal--bg").style.display = "none";
  document.querySelector("#playerModal").style.display = "none";
  document.querySelector("#playerModal").classList.remove("show"); 
}
const userOn = document.querySelector("#openUser");
userOn.addEventListener("click", userModalOn);

const userOff = document.querySelectorAll(".closeUser")

Array.from(userOff).forEach((e) => {
  e.addEventListener('click', userModalOff);
});

// const userModal = document.querySelector("#playerModal");

// To activate Info modal using javascript vanila
function openModal() {
  document.querySelector("#qz-modal--bg").style.display = "block"; //display bg as block
  document.querySelector("#qz-Modal").style.display = "block"; //display modal as a block
  document.querySelector("#qz-Modal").classList.add("show"); //add class to show the modal
}
const infoOn = document.querySelector("#openModal");
infoOn.addEventListener("click", openModal);

function closeModal() {
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

function switcher() {
  iconOn.classList.toggle("fa-volume-up");
}

iconOn.addEventListener("click", switcher);
// Click Sound when volume on
const click = document.querySelector("#btnClick");
const allAudio = document.querySelectorAll(".btn");

function clickBtn() {
  if (document.querySelector(".fa-volume-up")) {
    click.play();
  }
}
Array.from(allAudio).forEach((a) => {
  a.addEventListener("click", clickBtn);
});
