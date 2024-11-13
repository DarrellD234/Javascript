//String slicing: Creating a substring from a portion of another string
// string.slice(start index, end index+1)

const myText1 = document.getElementById(`myText1`);
const myText2 = document.getElementById(`myText2`);
const fullName = `Darrell Devlin`

//Extracting first and last name from full name
//firstName = fullName.slice(0, 7);
//lastName = fullName.slice(8);
/*let firstName = fullName.slice(0, fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ") + 1)
myText1.textContent = firstName;
myText2.textContent = lastName;*/

//Extracting first and last character from full name
firstChar = fullName.slice(0, 1);
lastChar = fullName.slice (-1);

const email = `darrelldevlin234@gmail.com`
let username = email.slice(0, email.indexOf(`@`));
let extension = email.slice(email.indexOf(`@`)+1);
myText1.textContent = username;
myText2.textContent = extension;
