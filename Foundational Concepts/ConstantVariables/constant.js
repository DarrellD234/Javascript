//Const = A variable that cannot be changed
const PI = 3.14159;
let radius;
let circumference;

// If enter another pi value, it will overwrite the value before. 
// For security measures, make it constant by 

document.getElementById(`mySubmit`).onclick = function(){
    radius = document.getElementById(`myText`).value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById(`paragraph1`).textContent = `The circumference is ${circumference} cm`;
}

/*
radius = window.prompt('Enter the radius of a circle:');

radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);
*/