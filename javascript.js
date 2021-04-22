let number = prompt("Enter a number between 100 and 999",)||0;
let number1,number2,number3=0;

 
if (number >= 100 && number <= 999) {
   number1= parseInt(number.substr(0,1));
   number2= parseInt(number.substr(1,1));
   number3= parseInt(number.substr(2,1));
    //Narcissistic= number1.pow(3)+ number2.pow(3)+ number3.pow(3);
    Narcissistic= number1**3 + number2**3+number3**3;
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

 