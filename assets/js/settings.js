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