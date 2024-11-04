//Data type conversion
/*
let age = window.prompt(`How old are you?`);
age = Number(age); // If not converted, will be concatonated instead of added
age += 1;
console.log(age);
console.log (age, typeof age);
*/

/*
let age2 = window.prompt(`How old are you?(String)`);
age2 += 1;
console.log(age2);
console.log (age2, typeof age2);
*/

let x = `pizza`;
let y = `pizza`;
let z = `pizza`;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log (x, typeof x); //String converted into NaN
console.log (y, typeof y);
console.log (z, typeof z); // String converted into true as long as there is value (0 is still value)