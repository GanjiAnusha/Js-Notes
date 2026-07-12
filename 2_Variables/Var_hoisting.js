/** 
 *
 *Declaration---->Initialization/Assignment---->usage
 *var a(undefined)        a=100                 a+30

 ⭐typeof variable; //return datatype of a variable

 *  
 ⭐Hoisting is not a term in ES,It refers to the process where by interpreter appears to move declaration of functions variables or classes to top of their scopes,prior to execution of code

    | Item                        | Declaration Hoisted | Initialized During Hoisting | Can Use Before Declaration?        |
    | --------------------------- | ------------------- | --------------------------- | ---------------------------------- |
    | `var`                       | ✅ Yes               | ✅ `undefined`               | ✅ Yes (value is `undefined`)       |
    | `let`                       | ✅ Yes               | ❌ No (TDZ)                  | ❌ No (`ReferenceError`)            |
    | `const`                     | ✅ Yes               | ❌ No (TDZ)                  | ❌ No (`ReferenceError`)            |
    | Function declaration        | ✅ Yes               | ✅ Entire function           | ✅ Yes                              |
    | Function expression (`var`) | ✅ Variable only     | ✅ `undefined`               | ❌ No (not callable until assigned) |

    ⭐Variables can be declared-----> intialized -------> usage,but hoisting move declaration into memory before execution,initialization and actual usage happen during the execution phase.i.e.., var a; a=100; a+30;

    ⭐Hoisting include function,function *,async function*.It also consider as var declarations as well in a different way 
    1️⃣using variable values before scope-value hoisting ("Value hoisting").
    2️⃣using variable before scope declaration hoisting without Reference Error and value-undefined("Declaration hoisting"). 
    3️⃣ Declaration of variables causes behavior changes in scope before line which declared. 
    4️⃣Side effects of declaration are produced before evaluating rest of code

    The four function declarations above are hoisted with type 1 behavior; var declaration is hoisted with type 2 behavior; let, const, and class declarations (also collectively called lexical declarations) are hoisted with type 3 behavior; import declarations are hoisted with type 1 and type 4 behavior. 
*/

console.log(a)//undefined
var a=2
console.log(b)//reference error:undefined
const b=10

const x=1;{
console.log(x);
const x=2;//Reference Error
}


{
    var y=1   
}
console.log(y)//1

/**
            | Type | Hoisted? | Behavior Before Initialization |
            | --- | --- | --- |
            | Function | Yes | Can be called safely |
            | var | Yes | Returns ``undefined`` |
            | let | Yes | ReferenceError (TDZ) |
            | const | Yes | ReferenceError (TDZ) |
 */


function sumFunc(a,b){
    return a+b
}
var sumConst=(a,b)=>a+b//undefined
// const sumConst=(a,b)=>a+b
console.log(`sumFunc(1+2)=>${sumFunc(1,2)}`)//sumFunc(1+2)=>3
console.log(`sumConst(3+4)=>${sumConst(3,4)}`)//sumConst(3+4)=>7

//Functions are hoisted,but arrow fucntions are not hoisted beacause arrow functions uses const keyword(never hoist at all uncaught typeerror is not a function),only var uses hoisting

// Function declarations are hoisted.
// Arrow functions themselves are not special.
// Their behavior depends on how they are assigned:
// - const/let + arrow -> ReferenceError before declaration (TDZ)
// - var + arrow -> TypeError because the variable is hoisted as undefined

console.log(`sumFunc1(1+2)=>${sumFunc1(1,2)}`)//3
console.log(`sumConst1(3+4)=>${sumConst1(3,4)}`)//7
/** Undefined vs Reference Error */
const sumConst1=(a,b)=>a+b //ReferenceError
// var sumConst1=(a,b)=>a+b//undefined
function sumFunc1(a,b){
    return a+b
}



// https://www.youtube.com/watch?v=EvfRXyKa_GI


/**
 *  | Declaration                | Hoisted?                        | Can call before declaration? |
    | -------------------------- | ------------------------------  | ---------------------------- |
    | `function greet(){}`       | ✅ Yes (function + body)        | ✅ Yes                      |
    | `var greet = function(){}` | Variable hoisted as `undefined` | ❌ TypeError                 |
    | `var greet = () => {}`     | Variable hoisted as `undefined` | ❌ TypeError                 |
    | `let greet = () => {}`     | Variable hoisted but in TDZ     | ❌ ReferenceError            |
    | `const greet = () => {}`   | Variable hoisted but in TDZ     | ❌ ReferenceError            |

 */

function hoist(){
    k=20;//global
    var f = 10;
}
    hoist();
    console.log(k);//20
    console.log(f);//reference error not defined due to the scope

/**
 * 
    Es5 uses strict mode(careful about variables)
    🏹ELiminates sime client side js error by changing them to explict throw errors by interpreter
    🏹Fixes mistakes that makes difficult for engineers to perform optimizations
    🏹prohibits some syntax likely to be defined in future versions of js
*/

'use strict';

// OR
"use strict";
console.log(hoist1); // Output: ReferenceError: hoist1 is not defined
hoist1 = 'Hoisted'; 


/** ES6(ECMA6 2015)*/

//➡️let

let hoist2='The var is hoisted';//undefined unless we printed
console.log(hoist3);
hoist3='Hoisted';//hoisted

// ➡️const
const PI=3.14;
PI=22/7;//Uncaught TypeError: Assignment to constant variable.
console.log(PI);
console.log(hoist4);
hoist4='hoisted'//Reference Error can't use before declaration


/**Hoisting Functions*/

// 1️⃣Function declarations
hoisted();
function hoisted(){
    console.log('This function hoisted')
}

//2️⃣Function Expressions
expression();//if we move these line these will work
var expression=function(){
    console.log("Will these work?");//TypeError: expression is not a function
}

//Function declaration + Function Expression,Function expressions, however are not hoisted.
expression();
var expression=function hoisting(){
    console.log("Will these work?");//same type error
}

/** Order of Precedence */

// ▶️Variable assignment takes precedence over function declaration

var double=100;
function double(num){
    return (num*2);
}
console.log(typeof double);//number

// ▶️Function declarations takes precedence over variable declaration

var square;
function square(side){
    return (side *2);
}
console.log(typeof square);//function

// Fucntion declarations are hoisted over variable declarations but not over variable assignments

/**Hoisting classes */

//🎯Class declarations

var Frodo = new Hobbit();
Frodo.height=100;
Frodo.weight=200;
console.log(Frodo);//ReferenceError:Hobbit is not defined,if we move this block down the class it is valid

class Hobbit
{ //Hobbit was used before it is declared, which is illegal for class variables
    constructor(height,weight){
        this.height=height;
        this.weight=weight;
    }
}

//🎯class expressions
var Square=new Polygon();
Square.height=100;
Square.width=100;
console.log(Square);// Output: TypeError: Polygon is not a constructor,same here also move block down to class
var Polygon=class{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
};

//valid declaration
var Polygon = class Polygon {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  var Square = new Polygon();
  Square.height = 10;
  Square.width = 10;
  console.log(Square);

  //use variables before intialized,use strict mode to use undeclared variables

  /**
   * 
   * ES6 Vs ES5 
   * 
   * ➡️var----undefined,If we use vars upon hoisting in es5
   * ➡️In Es6 let and const --- Reference Error
   * 
   * */

