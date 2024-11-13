//Const = A variable like structure that holds more than one value;

let fruits = [`apple`, `orange`, `kiwi`];

fruits[0] = `coconut`;

//Push a new element at the end of the array
fruits.push(`apple`);

//Remove the last element of the array
fruits.pop();

//Add and remove an element from the beginning of the array
fruits.unshift('mango'); // Add
fruits.shift(); // Remove

//Get length of the array
let numOfFruits = fruits.length;

//Get index number of certain value in array
let index = fruits.indexOf(`apple`) // If index is -1 it means the array doesn't contain the element

//Sort array in alphabetical order
fruits.sort();

//Sort array in reverse alphabetical order
fruits.sort().reverse();

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}



