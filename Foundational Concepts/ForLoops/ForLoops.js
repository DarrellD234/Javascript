// FOR LOOPS = Repeat some code a limited amount of times
/*
for(let i = 10; i > 0; i--){
    console.log(i);
}*/

for(let i = 1; i <= 20; i++){
    // If value is 13 skip the iteration of the loop
    if(i == 13){
        continue;
    }
    //If value is 5, break out of the loop
    else if(i == 5){
        break;
    }
    else{
        console.log(i);
    }
}
 