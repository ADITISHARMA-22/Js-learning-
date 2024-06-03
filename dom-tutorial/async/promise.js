// const a = Promise.reject(5);
// console.log(a);
// const b = a.then(null,val=>console.log(val));

function myPromise(){
    return new Promise((resolve,reject)=>{
       resolve("foo");
    })
}
// we can do chaining like that as .then()method always return promises.
myPromise().then(val=>{
  console.log(val);
  val+="faa";
  return val;//internally return Promise.resolve(val);
}).then(val=>{
    console.log(val);
});

// and in line 4 if i don't return the val , then fr undefined return krdeti 