// NUMBER GUESSING GAME
const min = 150;
const max = 200;
const answer = Math.floor(Math.random() * (max-min + 1) + min);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${min} - ${max}!`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a valid number!`)
    }
    else if(guess < min || guess > max){
        window.alert(`PLease enter a number within the range!`)
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert(`Too Low, try again!`)
        }
        else if (guess > answer){
            window.alert(`Too High try again!`);
        }
        else{
            window.alert(`Congratulations! The answer was ${answer}, it took you ${attempts} attempts.`)
            running = false;
        }
    }


}