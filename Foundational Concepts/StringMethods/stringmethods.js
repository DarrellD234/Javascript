//String Methods: Manipulate and work with text (strings)
const myText1 = document.getElementById(`myText1`)
const myText2 = document.getElementById(`myText2`)
let username = `DarrellD234`;

//Get the character of the string at the index (start is 0)
CharAt = username.charAt(0)
myText1.textContent = CharAt;

//Get the index of the first character 
index = username.indexOf("4")
//Get the index of the second character
// index = username.lastIndexOf("4")
myText2.textContent = index

//Get the length of the string
length = username.length

//Trim the string from white spaces
trim = username.trim();

//Change to Upper / Lower Case
upperCase = username.toUpperCase();
lowerCase = username.toLowerCase();

//Repeat the strings .repeat(number of times)
repeat = username.repeat(3);

//To determine whether the value starts with the argument (true or false)
result = username.startsWith(" ")
result = username.endsWith(" ")
result = username.includes(" ")

//Replace strings
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "")

//Determine the length of the string
phoneNumber = phoneNumber.padStart(15, "0") // IF not enough pad start with 0
phoneNumber = phoneNumber.padEnd(15, "0") // IF not enough pad end with 0