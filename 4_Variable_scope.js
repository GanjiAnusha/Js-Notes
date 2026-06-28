/**
 
 *Global scope -Acessed from anywhere
 *Function scope - It can be acessed within a function
 *Block Scope -Variables with let or const inside a block accessible with a block 

 ⭐If a variable scope is not declared it automatically considered as global by default without strictmode.If we  declare a var with val automatically becomes global

 */

//scope var vs let 
function varTest(){
  var x=1;{
    var x=2;
    console.log(x);//2
  }
  console.log(x);//1
}

/***
    ┌──────────────────────┐
    │ var x = 1            │
    │ {                    │
    │    var x = 2;        │ ← Same variable
    │ }                    │
    │ console.log(x); // 2 │
    └──────────────────────┘
*/

function letTest(){
  let x=1;{
    let x=2;
    console.log(x);//2
  }
  console.log(x);//1
}
/**
Function Scope
  ┌─────────────────────────┐
  │ let x = 1               │
  │                         │
  │  Block Scope            │
  │  ┌───────────────────┐  │
  │  │ let x = 2         │  │ ← Different variable
  │  └───────────────────┘  │
  │                         │
  │ console.log(x); // 1    │
  └─────────────────────────┘
 */

//At the top level of your programs let unlike var does not create a property on the global object
var x="global";
let y="global";
console.log(this.x);//global
console.log(this.y);//undefined

//declaration with destructing RegExp.prototype.exec(),So whenever you use destructuring with exec(), remember that index 0 is always the entire matched string, and the capturing groups start at index 1
const res=/(a+)(b+)(c+)/.exec("aaabbbccc");
let [a, b, c, d] = res;
console.log(a,b,c, d);//aaabbbccc aaa bbb ccc


//Access only by var
var globalVar="I am global variable";
let globalLet="I am a global let variable";
const globalConst="I am a global const variable";

//all 3 globalVar,globalLet,globalConst are accessible anywhere in program because they are global variables

function testScope() 
{
    var functionVar="I am a function variable";
    let functionLet="I am a function let variable";
    const functionConst="I am a function const variable";
    if(true) 
    {
        let blockLet="I am a block let variable";
        const blockConst="I am a block const variable";
        var functionVar="I am a function scoped variable because var has function scope and block ignores block";
        console.log(functionVar);
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
}
testScope();
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// console.log(functionVar);//Reference error not defined
// console.log(functionLet);
// console.log(functionConst);

/**globalThis using let will cause undefined*/

let globalLet="I am a global using let function";
var globalvar="I am also global using global function";
function testgloballet(){
    console.log(globalLet);
    console.log(globalvar);
}
testgloballet();
console.log(window.globalLet);
console.log(window.globalvar);
console.log(globalThis.globalLet);
console.log(globalThis.globalvar);

/**
 * globalThis is object property in js,it points top-level global object.It is introduced in ECMA2020 provide a single,standard way to access the global scope,instead of using window or self(self is a read-only global property that references the current global execution context) node.js uses globalThis 
 * 
 * TypeScript fully supports globalThis because TypeScript is a superset of JavaScript. TypeScript provides built-in type definitions for globalThis so your code editor can autocomplete its properties.
 
*/

console.log(typeof globalThis); // Outputs: "object" (Not "function")

/**Before ES6 arrow functions were introduced, developers frequently ran into issues where nested callback functions (like setTimeout or event listeners) lost track of the parent object's this context. To bypass this, they captured this in a local variable named self (or sometimes that or _this) */

function Counter() {
  this.count = 0;
  var self = this; // Capturing 'this' in a closure

  setInterval(function() {
    // Inside this regular function, 'this' defaults to the window/undefined
    // 'self' safely remembers the Counter instance
    self.count++; 
    console.log(self.count);
  }, 1000);
}


//same code above in modern arrow functions

function counter1(){
  this.count=0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}

/**In web browsers, self is a read-only global property that references the current global execution context.In the Main Browser Window: self points directly to the window object. Therefore, window === self evaluates to true.In Web Workers: Web Workers do not have access to the window object. However, they do have access to self, which points to the WorkerGlobalScope. */
// This works perfectly in both a standard tab and a Web Worker
self.setTimeout(() => {
  console.log("Executed from the global scope!");
}, 1000);

/** 
 * 
 * Concept    What is it?   Scope     Primary Use Case
 * 
 * this     Built-in keyword.   Dynamic (changes depending on how a function is called).   Referencing the current object instance.
 * 
 * self (Global)    Built-in property.    Global Window or Worker context.    Writing unified scripts for browsers and Web Workers.
 * 
 * self (Variable)    Custom variable.    Local function scope / Closure.     Legacy workaround to maintain a this reference.
 */