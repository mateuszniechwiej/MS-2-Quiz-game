const username = document.querySelector("#userName");
const userHighScore = document.querySelector("#highScore");


const topScore = localStorage.getItem("topScore");
userHighScore.innerText = topScore;
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
    userHighScore.innerHTML = `${highScore} points`;
};

let subitName = document.querySelector("#submitName");
subitName.addEventListener("click", userNameSubmit);
checkUserData();

