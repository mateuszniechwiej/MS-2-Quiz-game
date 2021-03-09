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
        $('#playerModal').modal('show');
        // userModalOn();

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
    let gameScore = currentScore.innerText
    finalScore.innerText = `Your score  is ${gameScore}`;
    if (gameScore > userHighScore.innerText) {
        userHighScore.innerText = gameScore
        localStorage.setItem("highScore", gameScore);
    }
};
// function to store username in localstorage
userNameSubmit = () => {
    user = document.querySelector("#user").value;
    localStorage.setItem("user", user);
    console.log(user);

    if (user) $('#playerModal').modal('hide');//if there is some user input allow to close modal
    // userModalOff(); // close username modal
    displayUsernameInfo(); // function to display user data on dashboard
};

displayUsernameInfo = () => {
    finalScore.innerText = topScore;
    username.innerHTML = user
    userHighScore.innerHTML = highScore;
};

let submitName = document.querySelector("#submitName");
submitName.addEventListener("click", userNameSubmit);

// const userInput = document.querySelector("#user");

// userInput.addEventListener('keyup', function (e) {
//    if (e.keyCode === 13) {
//        console.log("Enter")
//   }
//  });
window.onload = checkUserData();

// const userOff = document.querySelectorAll(".closeUser");

// Array.from(userOff).forEach((e) => {
// e.addEventListener("click", $('#playerModal').modal('hide') );
//  });

const finalOff = document.querySelectorAll(".closeHighScore");

Array.from(finalOff).forEach((e) => {
    e.addEventListener("click", () => {
        $('#finalModal').modal('hide')
    });
});

const infoOn = document.querySelector("#openModal");
infoOn.addEventListener("click", () => {
    $('#qz-Modal').modal('show')
});

const infoOff = document.querySelectorAll(".close");

Array.from(infoOff).forEach((e) => {
    e.addEventListener("click", () => {
        $('#qz-Modal').modal('hide')
    });
});