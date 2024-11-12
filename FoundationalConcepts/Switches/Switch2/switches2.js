// Switches: Efficient replacement of many IF statements
const myText = document.getElementById(`myText`);
let score = 59;
let letterGrade;

switch(true){
    case score >= 90:
        letterGrade = `A`
        break; // To break out of the switch once the case has been executed
    case score >= 80:
        letterGrade = `B`
        break;
    case score >= 70:
        letterGrade = `C`
        break;
    case score >= 60:
        letterGrade = `D`
        break;
    default:
        letterGrade = `F`
}

myText.textContent = `Your Grade is ${letterGrade}`