'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);
let currentScore = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber
const displayMessage = (message) => document.querySelector('.message').textContent = message;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess){
        displayMessage("🤨 Guess a Number?");
    }

    // when player wins
    else if (guess === secretNumber){
        displayMessage("🎉 You got it!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (currentScore > highScore){
            highScore = currentScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber){

        if (currentScore > 1){
        displayMessage((guess > secretNumber && guess <=20) ? "🤦‍♂️ Too High ":"🤦‍♂️ Too Low ");
        currentScore--;
        document.querySelector('.score').textContent = currentScore;
        }
        else {
            displayMessage("😑 You lost the game.");
            document.querySelector('.score').textContent = 0;
        }
    }
    //     else if (guess > secretNumber && guess <=20){

    //     if (currentScore > 1){
    //     document.querySelector('.message').textContent ="🤦‍♂️ Too High ";
    //     currentScore--;
    //     document.querySelector('.score').textContent = currentScore;
    //     }
    //     else {
    //         document.querySelector('.message').textContent ="😑 You lost the game.";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
        else if (guess > 20){
        displayMessage("😒 Guess between 1-20!");
    }
})

document.querySelector('.again').addEventListener('click', function() {
    currentScore = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = currentScore
    document.querySelector('body').style.backgroundColor = '#111';
    document.querySelector('.number').style.width = '15rem';
})