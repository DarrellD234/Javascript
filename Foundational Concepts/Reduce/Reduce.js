// .reduce(): Reduce the elements of an array to a single value
// the function for the callback function would be function(accumulator, element)
/* Example 1
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

//Goes through the function, 0 + 5, and then 5 + 30, and then 
//35 + 10, and so on
function sum(previous, next){
    return previous + next;
} */

const grades =[75, 50, 90,80, 65, 95];
const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

//Essentially iterating through the array, comparing the previous and next
// element to find the max / min value
function getMax(accumulator, element){
    return Math.max(accumulator, element)
}

function getMin(accumulator, element){
    return Math.min(accumulator, element)
}

console.log(max);
console.log(min);