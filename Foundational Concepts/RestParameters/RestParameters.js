// Rest Parameters: Used to create functions that accept any number
// of arguments using the spread operator
// Spread = Unpack an array into separate elements
// Rest = Bundles separate elements into an array

//Foods Example
function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = `pizza`;
const food2 = `hamburger`;
const food3 = `hotdog`;
const food4 = `sushi`;
const food5 = `ramen`;


//openFridge(food1, food2, food3, food4, food5);
//Make separate elements into an array
const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

//Dollars Example
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result = result + number
    }
    return result;
}

const total = sum(1,2,3,43,4,5,56);
console.log(`Your total is $${total}`);

//Average Example
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result = result + number
    }
    return Math.round(result / numbers.length);
}

const average = getAverage(1,2,3,43,4,5,56);

console.log(`The average test score is ${average}`);

//Combine String Example
function combineString(...strings){
    return strings.join(` `);
}
const fullName = combineString(`Mr.`, `Darrell`, `Devlin`)
console.log(fullName);