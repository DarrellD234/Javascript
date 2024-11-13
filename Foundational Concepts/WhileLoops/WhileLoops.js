// WHILE LOOPS = Repetition of code WHILE condition is true
/*
const myText1 = document.getElementById(`myText1`);
let username = ``;

while(username === `` || username === null){
    username = window.prompt(`Enter your name:`)
}

//Execute the code first and then goes through the while loop
do{
    username = window.prompt(`Enter your name:`)
}while(username === `` || username === null)

myText1.textContent = `Hello ${username}!`;
*/
let loggedIn = true;
const myText1 = document.getElementById(`myText1`);
let username;
let password;

/*
while(!loggedIn){
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`)

    if(username === `DarrellD234` && password === `12345678`){
        loggedIn = true;
        myText1.textContent = `You are logged in!`
    }
    else{
        myText1.textContent = `Invalid credentials, please try again!`
    }
}
*/
do{
    username = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`)

    if(username === `DarrellD234` && password === `12345678`){
        loggedIn = true;
        myText1.textContent = `You are logged in!`
    }
    else{
        myText1.textContent = `Invalid credentials, please try again!`
    }
}while(!loggedIn)