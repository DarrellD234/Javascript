//Checked Property: Property that determines the checked state of
// an HTML checkbox or radio button element
const myCheckbox = document.getElementById(`myCheckbox`);
const visaBtn = document.getElementById(`visaBtn`);
const mastercardBtn = document.getElementById(`mastercardBtn`);
const paypalBtn = document.getElementById(`paypalBtn`);
const mySubmit = document.getElementById(`mySubmit`);
const subResult = document.getElementById(`subResult`);
const paymentResult = document.getElementById(`paymentResult`);

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You have subscribed`;
    }
    else{
        subResult.textContent = `You are NOT subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You have chosen Visa as your payment method`;
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = `You have chosen Mastercard as your payment method`;
    }
    else{
        paymentResult.textContent = `You have chosen Paypal as your payment method`;
    }
}