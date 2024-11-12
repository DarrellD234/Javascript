// Random Number Generator (Returns between 0 - 1 floating point)
//let randomNum = Math.random();
//let randomNum = Math.random() * 6;

//Random Number between 1 -  100
//let randomNum = Math.floor(Math.random() * 100) + 1; 

/*Random Number between 50 -  100
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min)) + min; 
console.log(randomNum)*/

const myButton = document.getElementById(`myButton`);
const label1 = document.getElementById(`label1`);
const label2 = document.getElementById(`label2`);
const label3 = document.getElementById(`label3`);
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}