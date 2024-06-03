
const url = "https://jsonplaceholder.typicode.com/posts";

// this is callback helll
// xhr.open("GET",url);
// xhr.onload = ()=>{
//     if(xhr.status>=200 && xhr.status<300){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//         const id = data[3].id;
//        const url2 = `${url}/${id}`;
//        const xhr2 = new XMLHttpRequest();
//        xhr2.open("GET",url2);
//        xhr2.onload = ()=>{
//         if(xhr2.status>=200 && xhr2.status<300){
//             const data2 = JSON.parse(xhr2.response);
//              console.log(data2);

//     }
//     else{
//         console.log("something went wrong");
//     }
   
// }
// xhr2.send();
  
// }
// else{
//     console.log("something went wrong");
// }
// }

// xhr.onerror = ()=>{
//     console.log("network error");
// }

// xhr.send();




/// we will be doing it with promises; 

function sendRequest(method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{
            if(xhr.status>=200 && xhr.status<300){
              resolve(JSON.parse(xhr.response));
            }
            else{
                reject(new Error("something is wrong"));
;            }
        }
        xhr.onerror=()=>{console.log("something is wrong")}
        
        xhr.send();  
    })
}

sendRequest("GET",url).then((resolve)=>resolve)
.then((resolve)=> resolve[3].id)
.then((id)=>{
        const url2 = `${url}/${id}`;
        return sendRequest("GET",url2);
     })
.then((val)=>{ console.log(val) });