// Switches: Efficient replacement of many IF statements
const myText = document.getElementById(`myText`);
let day = "pizza";

switch(day){
    case 1:
        myText.textContent = `It's Monday`
        break; // To break out of the switch once the case has been executed
    case 2:
        myText.textContent = `It's Tuesday`
        break;
    case 3:
        myText.textContent = `It's Wednesday`
        break;
    case 4:
        myText.textContent = `It's Thursday`
        break;
    case 5:
        myText.textContent = `It's Friday`
        break;
    case 6:
        myText.textContent = `It's Saturday`
        break;
    case 7:
        myText.textContent = `It's Sunday`
        break;
    default:
        myText.textContent = `Your variable is not a valid day`

}