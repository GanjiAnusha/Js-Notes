/**
➡️Undefined is a placehholder before code is executed.It is not same as notdefined
➡️The variable is known, but it is empty,whereas,The variable is completely unknown or inaccessible is reference error
➡️code runs normally when variable is undefined,it is primitive datatype
 */
console.log(a);//undefined
var a=10;//undefined
console.log(a);//10
// console.log(x);//not defined -- reference error

var b;
console.log(b);//undefined
if(b===undefined){
    console.log("B is undefined");//B is undefined
}
else{
    console.log("B is not defined");
}


var c;
console.log(c);
c=10;
console.log(c);
c="test";
console.log(c);
