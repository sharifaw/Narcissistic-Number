let number = +(prompt("Enter a number between 100 and 999",))||0;

let number1= number.toString(0,1);
let number2= number.toString(1,1);
let number3= number.toString(2,1);

if (number >= 100 && number <= 999) {
 
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
