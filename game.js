// input ---> Rock, paper, scissor 

// input1->

// rock -> rock --> T


// Rock - Paper -> Paper
// paper - rock -> paper 

// rock -> scissor -> rock
// scissor -> rock -> rock

// scissor -> paper -> scissor
// paper  - scissor - > scissor
// -----------------------------------------

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 3); // 0, 1, 2
    return randomNumber;
}

function getRandomOption(randomNumber) {
    let opponentOption;
    if (randomNumber == 0) {
        opponentOption = "rock";
    } else if (randomNumber == 1) {
        opponentOption = "scissor";
    } else if (randomNumber == 2) {
        opponentOption = "paper";
    }
    return opponentOption;
}


function validateOption(option) {
    if (option.toLowerCase() == "rock" || option.toLowerCase() == "scissor" || option.toLowerCase() == "paper") {
        return true
    } else {
        return false
    }
}

function whowon(user_input, random_input) {
    if (user_input == random_input) {
        return "It's a tie!"
    } else if ((user_input == "rock" && random_input == "scissor") || (user_input == "scissor" && random_input == "paper") || (user_input == "paper" && random_input == "rock")) {
        return "You Won!"
    } else {
        return "You Lost!"
    }
}



function skillsanta_game() {
    let user_value = document.getElementById("user_value").value; // sachin, rock, paper
    let status = validateOption(user_value) // true / false

    if (status == true) {
        console.log("valid input")
        let random_value = getRandomOption(generateRandomNumber()); // 
        console.log(random_value);
        let result = whowon(user_value, random_value);
        document.getElementById("result").innerText = result;

    } else {
        document.getElementById("result").innerText = "Invalid input!";
    }


}