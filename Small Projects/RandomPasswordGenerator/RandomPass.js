//Random Password Generator

const passwordLength = 12;
const incLowerCase = true;
const incUpperCase = true;
const incNumbers = true;
const incSymbols = true;

function generatePassword(passwordLength, 
                            incLowerCase, 
                            incUpperCase, 
                            incNumbers, 
                            incSymbols){
    const lowerCaseChar = `abcdefghijklmnopqrstuvwxyz`;
    const upperCaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberChars = `0123456789`;
    const symbolChars = `!@#$%^&*()_+`;

    let allowedChars = ``;
    let password = ``;

    //Are we including the following? if yes concatenate to the allowedChars
    allowedChars += incLowerCase? lowerCaseChar : ``;
    allowedChars += incUpperCase? upperCaseChars : ``;
    allowedChars += incNumbers? numberChars : ``;
    allowedChars += incSymbols? symbolChars : ``;

    if(passwordLength <= 0){
        return `Password length must be at least one`;
    }
    if(allowedChars === 0){
        return `You must choose at least 1 set of characters`;
    }
    for(let i = 0; i<= passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const password = generatePassword(passwordLength, 
                                    incLowerCase, 
                                    incUpperCase, 
                                    incNumbers, 
                                    incSymbols);

console.log(`Generated Password: ${password}`)