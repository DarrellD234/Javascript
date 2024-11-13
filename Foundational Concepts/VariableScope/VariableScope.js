// Variable Scope: Local vs Global Variables
// Local variables only exist during the function's execution
// Global remain in memory for the duration of the program.

//Variable names can be reused as long as it's in a different scope
let x = 13

function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

function1();