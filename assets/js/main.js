// To activate Info modal using javascript vanila
function openModal() {
  document.getElementById("qz-modal--bg").style.display = "block";//display bg as block
  document.getElementById("qz-Modal").style.display = "block";//display modal as a block
  document.getElementById("qz-Modal").classList.add("show");//add class to show the modal
}
function closeModal() {
  document.getElementById("qz-modal--bg").style.display = "none";
  document.getElementById("qz-Modal").style.display = "none";
  document.getElementById("qz-Modal").classList.remove("show");// to close the modal remove show class
}
// Get the modal
var infoModal = document.getElementById('qz-Modal');

// Click outside the function close the modal
window.onclick = (e) => {
  if (e.target == infoModal) {
    closeModal()
  }
};

// toggle sound icon on
const iconOn = document.querySelector("#off");

 function switcher() {

  iconOn.classList.toggle("fa-volume-up");
 };


iconOn.addEventListener('click', switcher);
// Click Sound when volume on
const click = document.querySelector("#btnClick");
const allAudio = document.querySelectorAll(".btn")


function clickBtn() {
  if (document.querySelector(".fa-volume-up")) {
    click.play();
  }
};
Array.from(allAudio).forEach( (a) =>{
  a.addEventListener('click', clickBtn);
});

