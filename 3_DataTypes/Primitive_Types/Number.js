/**
➡️number represents floating numbers 37 or -9.25.It is constructor provides constants and methods to work with numbers and values of other types can be converted with number function

 */

// Internally, JavaScript uses IEEE 754 double-precision floating point for all these values.
let num=255;
console.log(typeof(num));//number
let num2=255.0;
console.log(typeof(num2));//number
let num3=(0xff);
console.log(typeof(num3));//number
let num4=0b11111111;
console.log(typeof(num4));//number
let num5=0.255e3;
console.log(typeof(num5));//number

//All of them will return true because there are same number
console.log(num===num2);
console.log(num===num3);
console.log(num===num4);
console.log(num===num5);
