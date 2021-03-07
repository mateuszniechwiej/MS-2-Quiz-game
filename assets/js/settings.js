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

const difficulty = [
    document.querySelector("#easy"),
    document.querySelector("#medium"),
    document.querySelector("#hard"),
];

getDifficulty = () => {
    const checkDifficulty = difficulty.filter(element => element.checked);

    if (checkDifficulty.length === 1) {
        return checkDifficulty[0].id;
    } else {
        throw new Error('Please select a difficulty game level!');
    }
}

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