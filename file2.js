console.log(34+42);
console.log(12**2);
console.log(typeof(12**2));
console.log(12**0.5);
const pi= 3.14;

let a = "aditixcvy";
console.log(a.length);
console.log(a[7]);
let b = "   abcdef"
console.log(b.length);
let c = b.trim();
console.log(c);
console.log(c.length);
//string is immutable 
// trim(), uppercase(),lowercase(),slice() these func always create 
//new strings 
let d = "SURINDER KUMAR SHARMA";
let e = d.toLowerCase();
console.log(d,e);
//convet number to string 
let age = 21;
let fn = "aditi";
console.log(typeof age);
age = age+" ";
console.log(age);
console.log(typeof age);
//convert string to no
let str = "34";
str = +str;
console.log(typeof str);
//another way 
let n=18;
n=String(n);
console.log(typeof n);
//for string concatenation we us + operator 
let st1= "17";
let st2 = "45";
let newstring = st1 + st2;
console.log(newstring);
newstring = +st1 + +st2;
console.log(newstring);
//template string 
let ab = 22;
let me = `my name is ${fn} and my age is ${age}`;
// console.log(me);
// const m;
// m = 45;
// console.log(m);
//undefined and null 
//when we dont declare a variable with a value then undefined occurs .
let v;
console.log(v);
let abc = null;
console.log(abc);
abc = "people";
console.log(abc);
console.log(typeof null);
console.log(Number.MAX_SAFE_INTEGER);//itna bda no. save krsktey hai
//BIGINT 
let n1 = BigInt(12345678900000000000011111122);
console.log(typeof n1);
let n2 = 12n;
let n3 =  n1+n2;
console.log(n3);//bigint can be added wih bigint only  

