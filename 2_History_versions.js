/**
⭐Javascript was created by Brendan Eich by Netscape.It first press release in 1995.It is initially named **Mocha** by creator later renamed as **LiveScript** and finally settled on **JavaScript**(1996),netscape 2.0

⭐ECMA(European Computer Manufacturers Association) International is the organization that standardizes JavaScript. The official name for the language is ECMAScript(Es1) was standardized in 1997, named after the ECMA standard.ECMA2(1998),ECMA3(1999),ECMA4(2008).ECMA4 has compatibility issues in various browsers and it has some features like class modules,static typings,destructing,etc....Later compability issues are fixed in ECMA5 2009 but google,yahoo,ms used ES3 to get less ambugity

⭐ES6(2015)-TC39[TC the committee under ECMA international works to standardize ES] features class,modules,arrows,template strings,default and rest params,let and const generators,enhanched object literals,destructing,spread operator,Iterators,map and set,proxies and symbol,promises,math,number,string,array,object APIs,...

⭐ES7(2016) features exponentiation operator,Array.prototype.includes,etc....

⭐ES8(2017)/ESNext/ES2017 highlight addition of async functions.It includes features like object.values,string padding,object.entries i.e., string prototype,object.getownpropertydescriptors,string.prototype.padstart,string.prototype.end(),trailing commas in functions paramlist and calls,async functions

⭐How to run JS
- In a web browser: Include the JavaScript file in an HTML file using the `<script>` tag as external script.
- Run Js in broswer console  */


alert("Hello, World!");//alert in terminal raises an error

console.log("Hello, World!");


// Input

let name = prompt("What is your name?");//John is provided as input in prompt

console.log("Hello, " + name + "!"); //It will result like "Hello, John!" via string concatenation

console.log(34348.2342*4310.2140);


/**
 
- Using Node.js: Save the code in a `.js` file and run it using the `node` command in the terminal.

⭐Running in firefox developer mode(ctrl+shift+K in linux,mac and ctrl+shift+J in windows)
*/ 

let p=document.createElement("p");
let t=document.createTextNode("Hello, World!");
p.appendChild(t);
document.body.appendChild(p);//Hello, World!

let today =new Date(); //Date caps
console.log("Today's date is: " + today);
console.log(`<h1>Today's date is: ${today}</h1>`);
// console.log(<h1>"Today's date is: " + today</h1>);
document.body.style.backgroundColor = "lightgray";//It will change page bg color to lightgray
document.body.style.color="white";//It will change page text color to white

/**
    ⭐Developer mode in firefox-ctrl+shift+k(linux/mac),ctrl+shift+J(windows) to open console

    ⭐Other development tools like
        DOM -tree of objects
            Hirerachal view(Inspector panel in firefox)
            Elements panel-chrome
    
    ⭐Network-monitor and record network requirements.It optimize page load performance and debug request issues

    ⭐Responsive design tools for testing and optimizing web pages across different devices and screen sizes
 */


