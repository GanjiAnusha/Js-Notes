/**
➡️BigInt allows to work with arbitary size,created by n to int literal or using BigInt()
➡️unlike number type,which can accurately represent integers only range -+2^53,BigInt handles for beyond the limit
➡️It makes high precision with large numbers,such as cryptography scientific computations
➡️ Bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.
➡️Because coercing between Number values and BigInt values can lead to loss of precision, the following are recommended:
Only use a BigInt value when values greater than 2^53 are reasonably excepted
Don't coerce between BigInt values and Number values.

➡️It follows type conversion as number,it is converted to a Boolean: via the Boolean function;when used with logical operators ||, &&, and !; or ,within a conditional test like an if statement.
 */

const previouslyMaxSafeInteger = 9007199254740991n;
console.log("previous max safe Integer:"+previouslyMaxSafeInteger);
const alsoHuge = BigInt(9007199254740991);// 9007199254740991n
console.log("Also Huge:"+alsoHuge);
const hugeString = BigInt("9007199254740991");// 9007199254740991n
console.log("Huge string:"+hugeString);
const hugeHex = BigInt("0x1fffffffffffff");// 9007199254740991n
console.log("Huge Hex"+hugeHex);
const hugeOctal = BigInt("0o377777777777777777");// 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111",);// 9007199254740991n



//Most operators support BigInts, however most do not permit operands to be of mixed types 

console.log(typeof 1n === "bigint");//true
console.log(typeof BigInt("1") === "bigint");//true
const a = 10n;
const b = 5;

// console.log(a + b);
// TypeError: Cannot mix BigInt and other types
/**
    🔺Arithmetic operators: +, -, *, /, %, **
    🔺Bitwise operators: >>, <<, &, |, ^, ~
    🔺Unary negation (-)
    🔺Increment/decrement: ++, --

The boolean-returning operators allow mixing numbers and BigInts as operands:

    🔺Relational operators and equality operators: >, <, >=, <=, ==, !=, ===, !==
    🔺Logical operators only rely on the truthiness of operands

A couple of operators do not support BigInt at all:

    🔺Unary plus (+) cannot be supported due to conflicting usage in asm.js, so it has been left out in order to not break asm.js.
    🔺Unsigned right shift (>>>) is the only bitwise operator that's unsupported, as every BigInt value is signed.

special cases
    🔺Addition + involves a string and BigInt returns a string
    🔺Division / truncates fractional components towards 0,BigInt unable to represent fractional quantities
 */

const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
console.log("Previous max safe "+previousMaxSafe);
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
console.log("maxplus "+maxPlusOne);
const theFuture = previousMaxSafe + 2n; // 9007199254740993n, this works now!
console.log("the future "+theFuture);
const prod = previousMaxSafe * 2n; // 18014398509481982n
console.log("prod "+prod);
const diff = prod - 10n; // 18014398509481972n
console.log("diff "+diff);
const mod = prod % 10n; // 2n
console.log("mod "+mod);
const bigN = 2n ** 54n; // 18014398509481984n
console.log("bigN "+bigN);
bigN * -1n; // -18014398509481984n
console.log("bigN * -1n "+bigN * -1n);
const expected = 4n / 2n; // 2n
console.log("div "+expected);
const truncated = 5n / 2n; // 2n, not 2.5n
console.log("truncated div "+truncated)

//Comparisons--A BigInt value is not strictly equal to a Number value, but loosely 

console.log("bigInt vs number "+ (0n===0));//false
console.log("loosely bigInt vs num "+(0n==0));//true

console.log("greater than "+(2>1n));//true
console.log("less than "+(2n<1));//false
console.log("less than with same number "+(2n>2));//false
console.log("less than or equal to "+(2n>=2)+"greater than equal to "+(2n<=2));//true true

const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
console.log("mixed sort "+mixed.sort());//default sorting behaviour mixed sort -12,0,0,10,4,4,6
console.log((a,b)=>a-b);//[Function (anonymous)]

// console.log(mixed.sort((a, b) => a - b));
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value


//namely only 0n,falsy everything else is truthy
if(0n){
    console.log("Hello from the  if!");
}
else{
    console.log("Hello from else");
}
console.log(0n||12n,"\n",0n&&12n,"\n",0n,"\n",!12n,"\n",!0n);//12n 0n 0n false true

//using stringify() with it raises typeerror values are not serializable in json(defaultly) so,we tojson() ----------- it doesn't do so for any other primitive values

BigInt.prototype.toJSON=function(){
    return {$bigint:this.toString()};
};
console.log(JSON.stringify({a:1n}));//{"a":{"$bigint":"1"}}

const replacer=(key,value)=>//instead of BigInt prototype we can use replacer param for stringify
typeof value === "bigint"?{$bigint:value.toString()}:value;
const data={
    number:1,
    big: 18014398509481982n,
};
const stringified=JSON.stringify(data,replacer);
console.log(stringified);//{"number":1,"big":{"$bigint":"18014398509481982"}}

//reviver to parse json param
const reviver=(key,value)=>
value!==null && 
typeof value === "object" &&
"$bigint" in value && 
typeof value.$bigint === "string"
?BigInt(value.$bigint)
:value;

const payload='{"number":1,"big":{"$bigint":"18014398509481982"}}'
const parsed = JSON.parse(payload,reviver);

console.log(parsed);//{ number: 1, big: 18014398509481982n }

//shorter version of same code
const reviver1 = (k, v) =>
    v?.$bigint ? BigInt(v.$bigint) : v;

console.log(JSON.parse(payload, reviver1));//{ number: 1, big: 18014398509481982n }

//⚠️🚨JSON parse must be used with caution because serialization is irreversible:it is not possible to find $bigint and BigInt

/**
✅ JSON.stringify() can serialize BigInt.
⚠️ JSON.parse() can't always know whether {"$bigint":"123"} is a real serialized BigInt or just a normal object.
⚠️ Wrapping every BigInt in an object ({"$bigint":"..."}) makes the JSON larger.
✅ If you know which fields are BigInt (like id, balance, etc.), store them as strings and convert those specific fields back to BigInt after parsing.
*/

const str = '{"gross_gdp":12345678901234567890}';
const parsedData=JSON.parse(str,(key,value,context)=>{
if(key ==="gross_gdp")//or use constructor of your custom type
{
 return BigInt(context.source);
}
return value;
});
console.log(parsedData);//{ gross_gdp: 12345678901234567890n }
 

/**
JSON.rawJSON() writes raw JSON without adding quotes.
Large JSON numbers lose precision when JSON.parse() converts them to Number.
The new context.source gives you the original JSON text, allowing you to convert it to BigInt (or another high-precision type) without losing digits.
*/