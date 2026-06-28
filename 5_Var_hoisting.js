/** 
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