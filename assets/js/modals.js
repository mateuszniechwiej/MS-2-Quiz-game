//***********************Username Modal*************************
// userModalOn = () => {
//   document.querySelector("#usernameModal--bg").style.display = "block";
//   document.querySelector("#playerModal").style.display = "block";
//   document.querySelector("#playerModal").classList.add("show");
// };
// userModalOff = () => {
//   document.querySelector("#usernameModal--bg").style.display = "none";
//   document.querySelector("#playerModal").style.display = "none";
//   document.querySelector("#playerModal").classList.remove("show");
// };




// ***********************Info Modal******************************
infoModalOn = () => {
  document.querySelector("#qz-modal--bg").style.display = "block"; //display bg as block
  document.querySelector("#qz-Modal").style.display = "block"; //display modal as a block
  document.querySelector("#qz-Modal").classList.add("show"); //add class to show the modal
};
const infoOn = document.querySelector("#openModal");
infoOn.addEventListener("click", infoModalOn);

infoModalOff = () => {
  document.querySelector("#qz-modal--bg").style.display = "none";
  document.querySelector("#qz-Modal").style.display = "none";
  document.querySelector("#qz-Modal").classList.remove("show"); // to close the modal remove show class
};

const infoOff = document.querySelectorAll(".close");

Array.from(infoOff).forEach((e) => {
  e.addEventListener("click", infoModalOff);
});

// Get the Info Modal
var infoModal = document.querySelector("#qz-Modal");

// Click outside the function close the  Info Modal
window.onclick = (e) => {
  if (e.target == infoModal) {
    infoModalOff();
  }
};
// *************************Final Score Modal *************************

const finalScore = document.querySelector("#finalScore");

// finalModalOn = () => {
//   document.querySelector("#finalModal--bg").style.display = "block";
//   document.querySelector("#finalModal").style.display = "block";
//   document.querySelector("#finalModal").classList.add("show");
  
// };
// finalModalOff = () => {
//   document.querySelector("#finalModal--bg").style.display = "none";
//   document.querySelector("#finalModal").style.display = "none";
//   document.querySelector("#finalModal").classList.remove("show");
//   return window.location.assign("index.html");
// };
// const finalOff = document.querySelectorAll(".closeHighScore");

// Array.from(finalOff).forEach((e) => {
//   e.addEventListener("click", finalModalOff);
// });
// // closing Final Modal by clicking outside the modal area
// window.onclick = (e) => {
//   if (e.target == finalModal) {
//     finalModalOff();
//   }
// };


