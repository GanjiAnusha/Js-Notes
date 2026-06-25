/**
 
 *Global scope -Acessed from anywhere
 *Function scope - It can be acessed within a function
 *Block Scope -Variables with let or const inside a block accessible with a block 

 ⭐If a variable scope is not declared it automatically considered as global by default without strictmode.If we  declare a var with val automatically becomes global

 */

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
 * globalThis is object property in js,it points top-level global object.It is introduced in ECMA2020 provide a single,standard way to access the global scope,instead of using window or self(self is a read-only global property that references the current global execution context) node.js uses globalThis */

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
