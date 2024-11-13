// Spread Operator: Allows an iterable (array or string) to be expanded into
// separate elements (unpacking the box and taking out all of the contents)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = `Darrell Devlin`;
//.join() is returning string with elements concatenated
let letters = [...username].join("-");
console.log(letters);

let fruits = [`apple`, `orange`, `banana`];
let vegetables = [`kale`, `carrots`, `potatoes`]
let foods = [...fruits, ...vegetables, `eggs`, `milk`]; // Essentially same like fruits since the elements are unpacked
console.log(foods);