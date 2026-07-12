/**
➡️Symbol is unqiue and immutable primitive datatype,introduced in ECMAScript(Es6).It is creative unique property keys for objects,no property key collisions occur
➡️It doesn't have literals.It is hidden from most object and class iterations(weak Encapsulation/information hiding)
➡️It has distinct values even when we create with same description
 */

//usecase-------add hidden/special properties to objects that interfer with object properties or methods
let s=Symbol('foo');
console.log(Symbol()===Symbol());//Symbol() is a unique value,it returns false
