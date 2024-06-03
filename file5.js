//Objects - they store key value pair 
const key = "email";
const person = {
    name:"Aditi",
    age:21,
    "ppl hobbies" : ["eating","singing","dancing"]

};
//console.log(person.name,person.hobbies)
//how to add key value pair in the object
//person.gender = "female";
//console.log(person)
//we can also use bracket notation 
// console.log(person["name"],person["age"]);
// //keys are always in string format 
// //so while using brackets , we have to write keys in "".

// //how to add key with bracket notation 
// person["gender"]="female";
// console.log(person);
// //////

// //diff bw dot and [] notation 
// //[]-it is used when we have multiple words in a key 
// console.log(person["ppl hobbies"]);
person[key]= "aditisharmamay22@gmail.com";
// console.log(person);

///////
//how to iterate over objects 
for(let i in person){
    console.log(person[i]);
}

console.log(Object.keys(person));
//Object.keys return an array 

//for of loop 
for(let j of Object.keys(person)){
    console.log(person[j])
}


//Computed properties 
const key1="obj1";
const key2="obj2";
const v1="a1";
const v2="a2";

// const obj={};
// obj[key1]=v1;
// obj[key2]=v2;
//console.log(obj);
// another way is 
const obj={
    [key1]:v1,
    [key2]:v2
};

/// spread operator string also get spread 
const arr=[..."abcdefghijklmnopqrstuvwxyz"]
console.log(arr);


