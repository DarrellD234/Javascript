//Callback: A function that is used as an argument of another function
// Used to handle:  1. Reading a file
//                  2. Network Requests
//                  3. Interacting with databases

//Example 1
function hello(callBack){
    console.log(`Hello!`);
    callBack();
} 

function wait(){
    console.log(`Wait!`)
}

function leave(){
    console.log(`Leave!`)
}

function goodBye(){
    console.log(`goodBye!`)
} 

hello(wait);

//Example 2
function sum(callback, x, y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById(`myH1`).textContent = result;
}
sum(displayPage, 1, 2);
