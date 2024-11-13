//Function declarations: Executing a block of code by the declarement
// of a function

/*function hello(){
    console.log(`Hello!`);
}
*/
// Function Expressions = A way to define functions as 
// values or variables

/*----- EXAMPLE 1 -----
const hello = function(){
    console.log(`hello`);
}

hello();

//setTimeout(hello, 3000);
setTimeout(function(){
    console.log(`Hello after 3 seconds!`)
}, 3000);
*/

const numbers = [1,2,3,4,5];
//Applying the function to each of the elements and return as array
const squares = numbers.map(function(element){
    return Math.pow(element, 2)
});
console.log(squares)

const cubes = numbers.map(function(element){
    return Math.pow(element, 3)
});
console.log(cubes);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})
console.log(evenNums);

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})
console.log(oddNums);

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})
console.log(total);



