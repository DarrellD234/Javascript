// Functions: A section of reusable code.
/*
function happyBirthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear ${username}!`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`)
}

happyBirthday(`Darrell Devlin`, 20);
*/

function add(x,y){
    return x + y; // Becoming whatever is returned
}

function subtract(x,y){
    return x - y; 
}

function multiply(x,y){
    return x * y; 
}

function divide(x,y){
    return x / y; 
}

function isEvenOrOdd(x){
    let a = x % 2;
    if(a == 0){
        console.log(`The number ${x} is an even number`)
    }
    else{
        console.log(`The number ${x} is an odd number`)
    }
    //return a == 0? true: false;
}

function isEmailValid(email){
    return email.includes(`@`)? true: false
}
console.log(isEmailValid(`darrelldevlin234@gmail.com`));