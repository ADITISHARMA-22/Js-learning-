//callsbacks asynchronous 
const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");
const h8 = document.querySelector(".heading8");
const h9 = document.querySelector(".heading9");
const h10 = document.querySelector(".heading10");


// setTimeout(()=>{
//     h1.textVontent = "Heading1";
//     h1.style.color = "pink";
// },1000)

// setTimeout(()=>{
//     h2.textVontent = "Heading2";
//     h2.style.color = "purple";
// },1000);

// dono headings same time pr ho rhi hai 
 // we want 1s ---- heading 1
 // 2s----heading 2 and so on and agr hum manually krey toh bht carefull rehna pdega


 // Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown


//callback hell  
setTimeout(()=>{
  h1.textContent = "one";
  h1.style.color = "violet";
  setTimeout(()=>{
    h2.textContent = "two";
    h2.style.color = "purple";
    setTimeout(()=>{
      h3.textContent = "three";
      h3.style.color = "red";
      setTimeout(()=>{
        h4.textContent = "four";
        h4.style.color = "pink";
        setTimeout(()=>{
          h5.textContent = "five";
          h5.style.color = "green";
        },2000)
        
      },1000)
      
    },2000)
    
  },2000)
  
},1000)
