//in this we will use promises for changine 7 html headings 
// before we were using callbacks to do it 
const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");
const h8 = document.querySelector(".heading8");
const h9 = document.querySelector(".heading9");
const h10 = document.querySelector(".heading10");


function fun(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           if(element){
            element.textContent = text;
            element.style.color= color;
            resolve("good");
            }
            else{
                reject("element not found");
            } 
        }, time);
    })
}

fun(h1,"one","red",1000)
.then(()=>fun(h2,"two","orange",1000))
.then(()=>fun(h3,"three","pink",1000))
.then(()=>fun(h4,"four","purple",1000))
.then(()=> fun(h5,"five","blue",1000))
.then(()=> fun(h6,"six","blue",1000))
.then(()=> fun(h7,"seven","blue",1000))
.then(()=> fun(h8,"eight","grey",1000))
.then(()=> fun(h9,"nine","black",1000))
.then(()=> fun(h10,"ten","brown",1000))
.catch((error)=>alert(error))
//catch mai reject vala part chlega , suppose bich mai khi bhi reject aayi toh vo saari
//then ko reject krega nd sidha catch ka block chlaaega .
//alert displays your text ;
