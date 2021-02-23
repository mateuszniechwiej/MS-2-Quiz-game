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

function soundON(e) {
  e.classList.toggle("fa-volume-up");
}

// click sound 
