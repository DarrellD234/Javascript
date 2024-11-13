//Method Chaining: Calling one method after another in one continuous
// line of code
const myText1 = document.getElementById(`myText1`);
const myText2 = document.getElementById(`myText2`);
let username = window.prompt(`Enter your username`);

/*
// ----- NO METHOD CHAINING -----
username = username.trim();
//Take first letter and make it uppercase
let letter = username.charAt(0);
letter = letter.toUpperCase();

//Make other letters lower case
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

//Display username
myText1.textContent = username;
*/


// ----- METHOD CHAINING -----
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
myText1.textContent = username;