//Creating a user input
//Method 1: Create Window Prompt (Easy Way)
/*
let username;
username = window.prompt(`What's your username?`)
console.log(username);
*/

//Method 2: HTML Textbox (Professional Way)
document.getElementById(`mySubmit`).onclick = function(){
    username = document.getElementById(`myText`).value;
    document.getElementById(`myh1`).textContent = `Hello ${username}`
    console.log(username);
}
/*Basically, on click it will run a function where the function
will assign the entered value to the variable */