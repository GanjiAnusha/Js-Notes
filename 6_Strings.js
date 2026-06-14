/***
 * Strings are immutable in JavaScript
 * 

    ⭐Escaping characters
        - \n(new line)
        - \n\r-new break(in windows files it is combintion of 2 characters,in other systems it is just \n)
        - \t(tab)
        - \\(backslash)
        - \"(double quote)
        - \'(single quote)
*/

function sum(a, b) {
    return a + b;
}
// alert(`1 + 2 = ${sum(1, 2)}.`); 
console.log(`1 + 2 = ${sum(1, 2)}.`); //results like 1+2 =3
console.log(`backslash actually prints a backslash: \\`);
console.log(`double quote: \"`);
console.log( 'I\'m the Wardmart!' );
console.log("I'm the Wardmart!");

let guestList=`Guests:
* John
* Jane
* Bob`;
console.log(guestList);//allow multiple lines with backticks

//string length is property not a function

console.log('my \n'.length);//4
let str="Hello";
console.log("string length:",str[str.length-1]);
console.log("last character:",str.at(-1));//access a character at certain postition -1 last character,0 first character

//at(pos) allow negative indexing.[],return -ve as undefined



//Acessing characters

console.log("first character of 'Hello':", 'Hello'[0]); // "H"
console.log("second character of 'Hello':", 'Hello'[1]); // "e"
console.log("third character of 'Hello':", 'Hello'[2]); // "l"
console.log("fourth character of 'Hello':", 'Hello'[3]); // "l"
console.log("fifth character of 'Hello':", 'Hello'[4]); // "o"


let str1='Hi';
// str[0] ='n';
console.log(str1[0]);//doesn't work error why because strings are immmutable in js

//changing case

console.log('Hello'.toUpperCase()); // "HELLO"
console.log('Hello'.toLowerCase()); // "hello"  
console.log('Hello'[0].toLocaleLowerCase());//Uses locale-specific case mappings based on the environment. like turkish,....
console.log('Hello'[0].toLocaleUpperCase());


