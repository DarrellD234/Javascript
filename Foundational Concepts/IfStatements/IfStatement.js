//IF Statements
/*
let age = 25;
if(age >= 18){
    console.log(`You are old enough to enter this site`)
}
else{
    console.log(`You must be 18+ to enter this site`)
}
*/

/*
let time = 9;
if(time < 12){
    console.log(`Good Morning!`);
}
else{
    console.log(`Good Afternoon!`)
}*/

/*
let isStudent = true;
if(isStudent){
    console.log(`You are a student`);
}
else{
    console.log(`You are not a student`);
}
*/

/*Nested IF statements*/
/*
let age = 18;
let hasLicense = false;

if(age >= 18){
    console.log(`You are old enough to drive`);

    if(hasLicense){
        console.log(`You have your license`)
    }
    else{
        console.log(`You do not have your license`)
    }
}
else{
    console.log(`You must be 18+ to have a drivers license`)
}
*/

/*ELIF statements, remember the order of the clauses are important*/
const myText = document.getElementById(`myText`);
const mySubmit = document.getElementById(`mySubmit`);
const resultElement = document.getElementById(`resultElement`);
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age >= 100){
        resultElement.textContent = `You are too old to enter this site`
    }
    else if(age == 0){
        resultElement.textContent = `Your age cannot be 0`
    }
    else if(age < 0){
        resultElement.textContent = `Your age cannot be below 0`
    }    
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`
    }
    else{
        resultElement.textContent = `You are not old enough to enter this site`
    }
}