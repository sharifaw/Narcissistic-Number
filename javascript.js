let number = prompt("Enter a number between 100 and 999",)||0;
let number1,number2,number3=0;
if (number >= 100 && number <= 999) {
    number1= number.substr(0,1);
    number2= number.substr(1,1);
    number3= number.substr(2,1);

    //Narcissistic= number1**3 + number2**3 + number3**3;
    Narcissistic= Math.pow(number1,3) + Math.pow(number2,3) + Math.pow(number3,3);
     if (number == Narcissistic){
         alert("Narcissistic Number");
     }
     
     else{
         alert("Not Narcissistic");
     }
}
else {
    alert("The number must be between 100 and 999");
}