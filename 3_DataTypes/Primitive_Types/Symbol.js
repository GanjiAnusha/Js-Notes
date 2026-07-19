/**
➡️Symbol is unqiue and immutable primitive datatype,introduced in ECMAScript(Es6).It is creative unique property keys for objects,no property key collisions occur
➡️It doesn't have literals.It is hidden from most object and class iterations(weak Encapsulation/information hiding)
➡️It has distinct values even when we create with same description
 */

//usecase-------add hidden/special properties to objects that interfer with object properties or methods
let s=Symbol('foo');
console.log(Symbol()===Symbol());//Symbol() is a unique value,it returns false

let firstName=Symbol('firstname');
let lastName=Symbol('lastname');
console.log(firstName);//symbol(firstname)
console.log(lastName);//symbol(lastname)
console.log(typeof(lastName));//symbol

// let s1=new Symbol();//error,Js doesn't support wrapper object with Symbol

/**
➡️confusing behavior,even it is true may cause result as true
➡️It doesn't support fully constructor(incomplete) like numbers and strings
➡️Modern strictness(Post Es6) strict distinuish between function and constructor
➡️Symbol and BigInt only called without new,others like Proxy and map must be called with it
 */

const sym=Symbol("foo");
const symObj=Object(sym);//to use wrapper object
console.log(typeof(symObj));//object


/**sharing Symbol */

let ssn = Symbol.for('ssn');//single parameter that can be used for symbol’s description
let citizenID = Symbol.for('ssn');
//Symbol for--search key in global symbol registry and return existing if exists else create a symbol with specific key and returns later
console.log(ssn === citizenID); // true
console.log(Symbol.keyFor(citizenID));//ssn

let systemID = Symbol('sys');
console.log(Symbol.keyFor(systemID)); // undefined

/**▶️Symbol as unqiue values,usage can be like managing task mgt applications */
let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};
class Task{
    constructor(title){
        this.title=title;
        this.status=statuses.OPEN;
    }
    setStatus(status){
        this.status=status;
    }
    getstatus(){
        return this.status;
    }
}
let task=new Task("Completed a task");
task.setStatus(statuses.COMPLETED);
console.log(task);//Task { title: 'Completed a task', status: Symbol(Completed) }
console.log(task.getstatus()===statuses.COMPLETED);//true

//get all enumerable properties of an object using ***object.keys()*** Only visible string keys
console.log(Object.keys(task));//[ 'title', 'status' ] i.e., description

//To get all properties of an object whether the properties are enumerable or not
console.log(Object.getOwnPropertyNames(task));//[ 'title', 'status' ]

//To get all property symbols of an object
console.log(Object.getOwnPropertyNames(task));//[ 'title', 'status' ]

//To get array of own property symbols from an object.
console.log(Object.getOwnPropertySymbols(task));//[]



/**▶️Symbol as computed property name of object */

let status1 = Symbol('status');
let task1 = {
    [status1]: statuses.OPEN,
    description: 'Learn ES6 Symbol'
};
console.log(task1);//{ description: 'Learn ES6 Symbol', Symbol(status): Symbol(Open) }
console.log(Object.keys(task1));//[ 'title', 'status' ] i.e., description
console.log(Object.getOwnPropertyNames(task1));//[ 'description' ]
console.log(Object.getOwnPropertyNames(task1));//[ 'description' ]
console.log(Object.getOwnPropertySymbols(task1));//[ Symbol(status) ]

/**🎯 Well known symbols ---- Built-in Symbols */

//⭐Symbol.hasInstance --------- determine instance of type object

class stack
{
    static [Symbol.hasInstance](obj){
        return Array.isArray(obj);//Arrray behaves like a stack Instance
    }
}
console.log([] instanceof stack);//true 


//⭐Symbol.iterator --- It returns iterator of an object,In ES6, all collection objects (Array, Set and Map) and strings are iterable objects

let arr=[1,2,3];
for(let n of arr)//make iteratable objects with for..of 
{
    console.log(n);//1 2 3
}
arr[Symbol.iterator]();//JS Engine internally uses
class List{
    constructor(){
        this.items=['A','B','C'];
    }
    *[Symbol.iterator](){
        for(let item of this.items){
            yield item;
        }
    }
}
let list=new List();
for(let x of list){
    console.log(x);//A B C
}

//⭐ Symbol.isconcatspreadable ----  resulting array contains the single elements of both arrays
let list2={
    0:'Js',
    1:'Symbol',
    length:2,
    [Symbol.isConcatSpreadable]:true
};
console.log(['Learn'].concat(list2));//[ 'Learn', 'Js', 'Symbol' ]
console.log("list2");
/**

{
  '0': 'Js',
  '1': 'Symbol',
  length: 2,
  Symbol(Symbol.isConcatSpreadable): true
}
 
*/
console.log(list2);

//⭐Symbol.toPrimitive --- determines what should happen when an object is converted into a primitive value,like converts string to nummber
let money={
    amount:500,
    [Symbol.toPrimitive](hint){
        if(hint === 'number'){
            return this.amount;
        }return '$'+this.amount;
    }
};
console.log(String(money));//$500
console.log(+money);//500

function Money(amount, currency) {
    this.amount = amount;
    this.currency = currency;
}
Money.prototype[Symbol.toPrimitive] = function(hint) {
    var result;
    switch (hint) {
        case 'string':
            result = this.amount + this.currency;
            break;
        case 'number':
            result = this.amount;
            break;
        case 'default':
            result = this.amount + this.currency;
            break;
    }
    return result;
}

var price = new Money(799, 'USD');

console.log('Price is ' + price); // Price is 799USD
console.log(+price + 1); // 800
console.log(String(price)); // 799USD