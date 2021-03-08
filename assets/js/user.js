const username = document.querySelector("#userName");
const userHighScore = document.querySelector("#highScore");

const topScore = localStorage.getItem("topScore");
userHighScore.innerText = topScore;
// Function to check if user in local Storage(if not open username modal)
let user = localStorage.getItem("user");
let highScore = 0;
checkUserData = () => {
    if (user === null || user === "") {
        localStorage.setItem("highScore", 0);
        userModalOn();
    } else {
        user = localStorage.getItem("user");
        highScore = localStorage.getItem("highScore");
        if (highScore === null) {
            highScore = 0;
        }
        displayUsernameInfo();
    }
};

setHighScore = () => {
    finalScore.innerText = currentScore.innerText;
    if (finalScore.innerText > userHighScore.innerText) {
        userHighScore.innerText = finalScore.innerText;
        localStorage.setItem("highScore", finalScore.innerText);
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
    finalScore.innerText = topScore;
    username.innerHTML = `${user}`;
    userHighScore.innerHTML = `${highScore} `;
};

let submitName = document.querySelector("#submitName");
submitName.addEventListener("click", userNameSubmit);

// const userInput = document.querySelector("#user");

// userInput.addEventListener('keyup', function (e) {
//     if (e.keyCode === 13) {
//         submitName.click();
//     }
// });
window.onload = checkUserData();
