// declare num as variable 
var num1 = 100;

console.log(num1);
console.log(typeof num1);

//declare number as an obj

var number1 = new Number (1000);
var number2 = new Number (1000);
var number3 = number1;

console.log(number1 == number2);  //false, bc they are two diff objects 
console.log(number1 === number2); //false s 
console.log(number3 == number1);  //True 
console.log(number3 === number1);  //True 

/**
 * == compares number obj not the values 
 * === compares object type and value
 */