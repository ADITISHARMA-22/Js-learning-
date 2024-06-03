// //booleans & comparison operator 
// // ==,=>,<=,<,>,!=
// //== -> checks only value and not the datatype
// //  === -> checks both value and datatype 
// let a = "9";//string
// let b = 9;//number
// console.log(a===b);
// console.log(a!==b);
// //truthy and falsy values
// //false values ->  false, " ", null, undefined ,0
// // these all values are cosidered as false values . 
// let fn = -1;
// if(fn)
// {
//     console.log("true");
// }
// else {
//     console.log("false");
// }
// //true values consist -1 nd anyother number except 0,"abc",
// //Ternary Operators 
// let age = 18;
// let drink = age>=18?"can drink alcohol":"cannot drink alcohol";
// console.log(drink);
// //user input 
// // let num = + prompt("guess a no.");
// //prompt is string and so we have to convert it to number
// //console.log(num);
// //while loop
// // let i=0;
// // while(i<=3){
// //     console.log(i);
// //     i++;
// // }
// // //for loop
// // for( i = 0; i<=10; i++){
// //     console.log(i);
// // }
// // console.log(i);
// for( var i = 0; i<=10; i++) {
//          console.log(i);
//      }
//     console.log(i);

// //do while 
// let p =0;
// do{
//     console.log("aditi")
//     p++;
// }while(p<4)
// console.log(p);

//introduction to arrays 
//array is a reference type 
//it is a object in JS
let fruits = ['mango','banana','grapes'];
console.log(fruits[0])
//we can store multiple datatypes.
let mix = [1,2,'a','b',null,4.5]
console.log(mix)
mix[1]=4;
console.log(mix)
console.log(typeof mix)
//if i want to check array is an array then we use:
let a = Array.isArray(mix)
console.log(a)
//Push Pop Shift Unshift 
//arrays are mutable 
//push adds to last 
fruits.push('apple');
console.log(fruits)
//pop removes from last , it returns the value as well .
a = fruits.pop();
console.log(a);
//unshift is used to add element at front .
fruits.unshift("apple");
console.log(fruits);
//shift is used to remove from first 
a=fruits.shift();
console.log(a);
