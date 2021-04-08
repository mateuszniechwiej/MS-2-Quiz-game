const username = document.querySelector("#userName");
const userHighScore = document.querySelector("#highScore");
const finalLabel = document.querySelector("#finalModalLabel");

const topScore = localStorage.getItem("topScore");
userHighScore.innerText = topScore;
// Function to check if user in local Storage(if not open username modal)
let user = localStorage.getItem("user");
let highScore = 0;
const checkUserData = () => {
    if (user === null || user === "") {
        localStorage.setItem("highScore", 0);
        $("#playerModal").modal("show");
        $("#playerModal").ready(function () {
            $('#user').focus();
        });
    } else {
        user = localStorage.getItem("user");
        highScore = localStorage.getItem("highScore");
        if (highScore === null) {
            highScore = 0;
        }
        displayUsernameInfo();
    }
};

const setHighScore = () => {
    let gameScore = parseInt(currentScore.innerText);
    console.log(gameScore);
    console.log(gameScore > parseInt(userHighScore.innerText));
    if (gameScore > userHighScore.innerText && gameScore !== undefined) {
        finalLabel.innerText = "CONGRATULATIONS!!!";
        finalScore.innerText = `NEW HIGH SCORE!!! You scored ${gameScore} points`;
        userHighScore.innerText = gameScore;
        localStorage.setItem("highScore", gameScore);
        if (document.querySelector(".fa-volume-up ")) {
            fanfare.play();

        }

    } else if (gameScore <= userHighScore.innerText && gameScore !== undefined) {
        finalLabel.innerText = "RESULT";
        finalScore.innerText = `Your scored ${gameScore} points`;
        if (document.querySelector(".fa-volume-up ")) {
            finalSound.play();
        }
    } else {
        finalLabel.innerText = "UNFORTUNATELY";
        finalScore.innerText = "No point this time.Try Again!";
        if (document.querySelector(".fa-volume-up ")) {
            noPoints.play();
        }
    }
};
// function to store username in localstorage
const userNameSubmit = () => {
    user = document.querySelector("#user").value;
    localStorage.setItem("user", user);

    if (user) $("#playerModal").modal("hide"); //if there is some user input allow to close modal
    displayUsernameInfo(); // function to display user data on dashboard
};

const displayUsernameInfo = () => {
    finalScore.innerText = topScore;
    username.innerHTML = user;
    userHighScore.innerHTML = highScore;
};

let submitName = document.querySelector("#submitName");
submitName.addEventListener("click", userNameSubmit);

window.onload = checkUserData();

const finalOff = document.querySelectorAll(".closeHighScore");

finalOff.forEach((e) => {
    e.addEventListener("click", () => {
        gameProgress.classList.add("hide");
        $("#finalModal").modal("hide");
        currentScore.innerText = "";
        progressBar.innerText = "";
        progressBar.style.width = "";
    });
});

const infoOn = document.querySelector("#openModal");
infoOn.addEventListener("click", () => {
    $("#qz-Modal").modal("show");

});

const infoOff = document.querySelectorAll(".close");

Array.from(infoOff).forEach((e) => {
    e.addEventListener("click", () => {
        $("#qz-Modal").modal("hide");
    });
});

const userInput = document.querySelector("#user");

// adding event listener to 'Enter' key to submit username input

userInput.addEventListener("keypress", (e) => {
    if (e.which === 13) {
        e.preventDefault(); //added to keep to behave the same as click event
        userNameSubmit();
    }
});


