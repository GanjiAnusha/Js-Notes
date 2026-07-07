/**
 * JS is loosely typed language,where as python is strictly typed language.It means intensionally designed to called as function,if we  use new operator with them causes TypeError special with symbool.
 * 
    ⭐No data types before declaration is not needed

    ⭐JavaScript is a dynamically typed language, meaning variables can hold values of any type.Js include various datatypes like numbers,objects,strings,booleans,etc...

    ⭐Number(int)-limit 30 numbers(2.456)

    ⭐Objects let={name:"John", age:30} can be accessed via dot notation (e.g., obj.name) or bracket notation (e.g., obj['name'])

    ⭐strings anything in quotes(single,double,backticks[template literals]).
        UTF-16 internal format for strings 

    ⭐Boolean true or false

    ⭐Array let arr=[1,2,3]; accessed via index (e.g., arr[0]),(x++, x) → comma operator expression

    ⭐Dynamic typing (conversion)
    
        

*/

//example for dynamic typing
let myno="500";
typeof myno; //string
console.log(typeof myno);
myno=500;
typeof myno; //number
console.log(typeof myno);

//where 0 is integer

null==0//false

null>0//false

null<0//false

null>=true//false

null!=0//true,!== non-Equality operator

typeof(null)//object

/**
    ⭐Snake case strategy(SCS),low letter separated by ___'s(underscores) and lower case (e.g., user_account_id).

    ⭐Screaming snake case strategy(SSCS),upper letter separated by ___'s(underscores) and upper case (e.g., USER_ACCOUNT_ID).
 */

//  ⭐Arrays 
    
let a=[10,15,20];
console.log(a[0]);     //accessing array of index


