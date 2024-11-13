//Logical Operators: AND && OR || NOT !
const myText1 = document.getElementById(`myText1`);
const myText2 = document.getElementById(`myText2`);
const temp = 25

if(temp > 0 && temp <= 30){
    myText1.textContent = `The weather is good`;
}
else if(temp <= 0 || temp > 30){
    myText1.textContent = `The weather is bad`;
}
else{
    myText1.textContent = `The weather is bad`;
}

const isSunny = false;
if(!isSunny){
    myText2.textContent = `It is CLOUDY`;
}
else{
    myText2.textContent = `It is SUNNY`;
}
