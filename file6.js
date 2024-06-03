//spread operator in objects 
const obj1 = {
    key1:"val",
    key2:"val2",
   
};
const obj2={
    key3:"val3",
    key4:"val4",
    key1:"val1"
};
//cloning of objects
//const newobj= {...obj2,...obj1,key69:"val69"};
// const newobj= {..."abcdefghijklmnopqrstuvwxyz"};
const newobj= {...["a1","a2","a3"]};
console.log(newobj);
///object destructuring 
const band = {
    bandName:'led zepplin',
    fs:"stairway to heaven",
    year:1968,
    afs:"kashmir"
}
//by default same keys name ke hi variable bantey hai 
// const{bandName,fs}=band;
// console.log(bandName,fs);
//suppose if we have to change the name of the variables then:
const{bandName:v1,fs:v2,...rest}=band;
console.log(v1,v2,rest)
console.log(typeof bandName);
////////////////////////////////////////////

//Object inside array -important topic 
//nested destructuring 
const users=[
    {userId:1, name:"aditi",age:21},
    {userId:2,name:'surbhi',age:18},
    {userId:3,name:"parikshit",age:23}
]
console.log(users);
//iterate 
for(let i of users){
    console.log(i.userId,i["name"]);
}
///////////////////////////////////////////////////
//nested destructuring 
const[user1,user2,user3]=users;
console.log(user1,user2,user3);
//now if i want user1 name and user3 age then what we will do:
const[{name:fn,userId}, ,{age:old,name}]=users;
console.log(userId,fn,old,name);
