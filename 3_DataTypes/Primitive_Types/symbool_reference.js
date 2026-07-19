/**
===========================================================
                     SYMBOL (ES6)
===========================================================

➡️ Symbol is a primitive datatype introduced in ECMAScript 6 (ES6).

➡️ A Symbol creates a unique and immutable value.

➡️ Even if two Symbols have the same description,
   they are always different values.

Example:
*/

let s1 = Symbol("foo");
let s2 = Symbol("foo");

console.log(s1 === s2); // false


/**
===========================================================
                Symbol Characteristics
===========================================================

1. Unique:
   Every Symbol() call creates a new unique value.

2. Immutable:
   Once created, a Symbol value cannot be changed.

3. Primitive datatype:
*/

let id = Symbol("userId");

console.log(typeof id); // symbol


/**
===========================================================
                Symbol Description
===========================================================

➡️ The string passed inside Symbol() is only a description.
➡️ It is used for debugging purposes.
➡️ It does NOT determine uniqueness.

*/

let firstName = Symbol("firstname");
let anotherFirstName = Symbol("firstname");

console.log(firstName); 
// Symbol(firstname)

console.log(firstName === anotherFirstName);
// false


/**
===========================================================
              Symbol has no literal syntax
===========================================================

Unlike:

number  -> 100
string  -> "hello"
boolean -> true

Symbol has no literal form.

Only way:

*/

// let sym = Symbol("example");


/**
===========================================================
              Symbol cannot use new keyword
===========================================================

Symbol is not a constructor.

*/

let s = Symbol("test");

// let s1 = new Symbol("test");
// TypeError: Symbol is not a constructor


/**
===========================================================
          Why Symbol cannot use new?
===========================================================

➡️ Symbol is a primitive factory function.
➡️ It returns a primitive value directly.

However, we can create a wrapper object:

*/

const sym = Symbol("foo");

const symObj = Object(sym);

console.log(typeof symObj);
// object


/**
===========================================================
        Symbol as Object Property Keys
===========================================================

➡️ Symbols are mainly used to create unique object keys.

➡️ They prevent property name collisions.

*/

let userId = Symbol("id");

let user = {
    name: "John",
    [userId]: 101
};

console.log(user[userId]);
// 101


/**
===========================================================
          Symbol properties are hidden
===========================================================

➡️ Symbol properties are not shown in:

- Object.keys()
- for...in loop
- JSON.stringify()

This provides weak encapsulation.

*/

console.log(Object.keys(user));
// ["name"]

console.log(JSON.stringify(user));
// {"name":"John"}


/**
===========================================================
             Access Symbol Properties
===========================================================

Use:

Object.getOwnPropertySymbols()

*/

console.log(Object.getOwnPropertySymbols(user));
// [Symbol(id)]


/**
===========================================================
              Global Symbol Registry
===========================================================

Symbol.for()

➡️ Creates/retrieves a shared Symbol from global registry.

Syntax:

Symbol.for(key)

Steps:

1. Search key in registry
2. If found -> return existing Symbol
3. If not found -> create new Symbol and store it

*/

let ssn = Symbol.for("ssn");
let citizenID = Symbol.for("ssn");

console.log(ssn === citizenID);
// true


/**
Symbol.keyFor()

➡️ Returns registry key of global Symbol.
*/

console.log(Symbol.keyFor(citizenID));
// ssn


/**
Normal Symbol is not stored in registry
*/

let systemID = Symbol("sys");

console.log(Symbol.keyFor(systemID));
// undefined


/**
===========================================================
          Real World Example: Task Management
===========================================================

➡️ Symbol can be used for fixed constant states.

Advantages:

- Prevent accidental modification
- Avoid duplicate values
- Unique identifiers
*/

let statuses = {
    OPEN: Symbol("Open"),
    IN_PROGRESS: Symbol("In Progress"),
    COMPLETED: Symbol("Completed"),
    HOLD: Symbol("On Hold"),
    CANCELED: Symbol("Canceled")
};


class Task {

    constructor(title) {
        this.title = title;
        this.status = statuses.OPEN;
    }


    setStatus(status) {
        this.status = status;
    }


    getStatus() {
        return this.status;
    }

}


let task = new Task("Learn JavaScript");

task.setStatus(statuses.COMPLETED);


console.log(task.title);
// Learn JavaScript


console.log(task.getStatus() === statuses.COMPLETED);
// true


/**
===========================================================
                 Symbol Use Cases
===========================================================

1. Unique object property keys

2. Avoid naming collisions in libraries

3. Define constants/enums

4. Internal object metadata

5. Framework-level hidden properties


Example:

Library A:
obj[Symbol("id")]

Library B:
obj[Symbol("id")]

Both can coexist because Symbols are unique.

===========================================================
*/