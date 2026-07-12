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

/**string length is property not a function*/

console.log('my \n'.length);//4
let str="Hello";
console.log("string length:",str[str.length-1]);
console.log("last character:",str.at(-1));//access a character at certain postition -1 last character,0 first character

//at(pos) allow negative indexing.[],return -ve as undefined



/**Acessing characters*/

console.log("first character of 'Hello':", 'Hello'[0]); // "H"
console.log("second character of 'Hello':", 'Hello'[1]); // "e"
console.log("third character of 'Hello':", 'Hello'[2]); // "l"
console.log("fourth character of 'Hello':", 'Hello'[3]); // "l"
console.log("fifth character of 'Hello':", 'Hello'[4]); // "o"


/**strings are immutable in js */

let str1='Hi';
// str[0] ='n';
console.log(str1[0]);//doesn't work error why because strings are immmutable in js

/**changing case*/

console.log('Hello'.toUpperCase()); // "HELLO"
console.log('Hello'.toLowerCase()); // "hello"  
//Uses locale-specific case mappings based on the environment. like turkish,....
console.log('Hello'[0].toLocaleLowerCase());//h
console.log('Hello'[0].toLocaleUpperCase());//H
console.log('Hello'[2].toUpperCase());//L changes single char at specific pos



/**Searching substring.i.e.., str.indexOf(substr,pos),it returns -1 when match is found */

let str2='Widget with id';
console.log(str2.indexOf('Widget'))//0,because found at begining
console.log(str2.indexOf('widget'))//-1,because found at begining,but case-senstive
console.log(str2.indexOf("id"))//1,because found case at postition 1
console.log(str2.indexOf('id',2))//12 It will search for next occurence from position 2

let str3="As sly as a fox,as strong as an fox";
let target="as";//search

let pos=0;
while(true){
    let foundpos=str3.indexOf(target,pos);
    if(foundpos==-1)
    break;
    console.log(`found at ${foundpos}`);//found at 7,17,27
    pos=foundpos+1;
}


//same code as above but shorter version
let pos1 = -1;
while ((pos1 = str.indexOf(target, pos1 + 1)) != -1) {
    console.log(pos1);//7,17,27
}


/**Occurence in reverse order */

let s = "Widget with id";
if (s.indexOf("Widget")) //here 0 === false,because 0 is a falsy value
{
    console.log("We found it"); // doesn't work! because it is found at 0th position
}

console.log(str3.indexOf("widget"))//-1
if(str3.indexOf("widget"))
{
    console.log("We found it using index of");//match found at starting 
}

if (str3.lastIndexOf("widget") != -1) //here -1 === false,because 0 is a falsy value
{
    console.log("We found it");
}

/**Includes,startswith,endswith  */
console.log("Includes Widget with id".includes("Widget"));//true
console.log("includes:","Hello".includes("id"));//false
console.log("Widget".includes("id"));//true
console.log("Widget".includes("id",3));//false,because not included from pos 3
console.log("startswith","Widget".startsWith("Wid"));//true
console.log("endswith","Widget".endsWith("get"));//true


/**Getting a substring */

//🏹splice :  str.splice(start[,end]) ------- return a string from starting
let str4="Stringify";//from RHS the value of index may be 0,-1,-2,.......-8
console.log(str4.slice(0,4));//stri
console.log(str4.slice(0,1));//S
console.log(str4.slice(2));//ringify to till end
console.log(str4.slice(-4,-1));//gif

//🏹substring :  str.substring(start[,end]) ------- return a string from starting,here similar to slice no negative values are supported but treated as 0
console.log(str4.substring(2,6));//ring 
console.log(str4.substring(6,2));//ring
console.log(str4.substring(6,-2));//String

//same checking with slice
console.log(str4.slice(2,6));//ring 
console.log(str4.slice(6,2));//blank
console.log(str4.slice(6,-2));//i

//🏹Substr,only allowed in broswer enivornments may fail in non-broswer enivornments.substr() is deprecated because its parameter behavior is confusing and inconsistent compared to newer string methods.It allow negative values
console.log(str4.substr(2,6));//ringif
console.log(str4.substr(6,2));//if
console.log(str4.substr(6,-2));//blank
console.log(str4.substr(2,4));//ring
console.log(str4.substr(-4,2));//gi is counted from end


/**Comapring a string 
 * All modern broswers support International standard(ECMA-402)
 * str<str2 -ve
 * str>str2 +ve
 * str=str2 0
*/
console.log('a'>'Z');//lowercase greater than uppercase
console.log('österreich'>'zealand');//österreich it is word with diacritical marks are out of order,it leads to out of order results,usually zealand comes after österreich

/**special methods */
//📩 codePointAt(pos),return decimal at char postition 
console.log("Z".codePointAt('o'));//90,captialcase
console.log("z".codePointAt('o'));//122
console.log("z".codePointAt('0').toString(16));//7a


//📩fromcodepoint(code)
console.log(String.fromCodePoint(90));//Z
console.log(String.fromCodePoint((0x5A)));//Z
//char with code 65...220(latin alphabets and little bit extra)
let s1='';
for(let i=65;i<=220;i++){
    s1+=String.fromCodePoint(i);
}
console.log("latiin",s1);//ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

//📩 localecompare,right algo is more complex alphabet are different from language to language,so broswer need to languauge to compare
/**
| Result          | Meaning                                     |
| --------------- | ------------------------------------------- |
| Negative (`-1`) | First string comes **before** second string |
| `0`             | Both strings are considered equal           |
| Positive (`1`)  | First string comes **after** second string  |
 */
console.log('österreich'.localeCompare('zealand'));//-1




