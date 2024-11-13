// Arrow functions = Concise way of writing function expressions
//                  Good for simple functions that are only used once
//                 format: (parameters) => {code}

//Normal
function hello1(){
    console.log(`Hello!`)
}

//Function Expressions
const hello2 = function(){
    console.log(`hello`);
}

//Arrow Functions Example 1
const hello3 = (name, age) => {console.log(`Hello ${name}!`)
                        console.log(`You are ${age} years old!`)};

hello3(`Darrell`, 20);

//Example 2
setTimeout(() => {console.log(`Hello there!`)}, 3000);

//Example 3
const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element)=> Math.pow(element, 2));
const cubes = numbers.map((element)=> Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(total);