// // Reference and Primitive type
// // Primitive type 
// let b = null;
// let a = 6;
// b=a;
// console.log(a,b);
// a++;
// console.log(a,b);

// reference type 
//array is a reference type , 
//let arr = ['abc','anj','qwe','ert'];
// let p = arr;
// console.log(p,arr);
// //arr.push('sss');
// console.log(p,arr);

// //how to clone array 
// //similar but diffn 
// p = ['abc','anj','qwe','ert']; //1st this way is not good to clone 
// console.log(arr===p);
// arr.push('sss');
// console.log(p,arr);

// // 2nd way to clone an array
// let arr1= arr.slice(0);
// console.log(arr,arr1);
// console.log(arr===arr1);

// //3rd way to clone an array
// arr1=[].concat(arr);
// arr.push("cvb");
// console.log(arr,arr1);
// console.log(arr===arr1);

// //new way - spread operator 
// arr1 = [...arr];
// console.log(arr,arr1);
// console.log(arr===arr1);
// //slice operator is the fastest 

// //if we want to add extra elements while cloning with slice  
// // arr1 = arr.slice(0).concat(["new12","ahfk"]);
// // console.log(arr1);
// // console.log(arr1.length)

// //if we want to add extra elements while cloning with concat 
// arr1 = [].concat(arr,["new12","ahk"]);
// console.log(arr1);
// console.log(arr1.length)

// //if we want to add extra elements while cloning with spread 
// let p=["item1","item2"];
// arr1 = [...arr,...p];
// console.log(arr1);
// console.log(arr1.length);

///Use const for creating array 

const a = [1,2,3,4,5,6,7,8];
//in const array we can perform all the array opeations but we cannot assign another array to 'a' variable
a.push(9);
console.log(a);

// For of loop in array 
for(let i of a){
    console.log(i);
}

// for in loop in array 
const b = [];
for(let j in  a){
    b.push(a[j]);
}
console.log(b);

// Array Destructuring 
const arr =["abc","bcd","cde","def"]
// let[p,q]=arr;//these are normal variables
// 
// p="ab";
// console.log(p,q);
//we have to make a new array with last 2 elements of exisiting array 
let[p,q,...na]=arr // we can also used slice operator
console.log(p,q,na);
console.log(typeof na);