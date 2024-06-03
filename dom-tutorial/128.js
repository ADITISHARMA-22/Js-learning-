// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//capturing events
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
parent.addEventListener(
  "click",
  () => {
    console.log("capture !!!! parent");
  },
  true
);
// grandparent.addEventListener(
//   "mouseover",
//   () => {
//     console.log("capture !!!! mouseover grandparent");
//   },
//   false
// );
// grandparent.addEventListener(
//     "mouseleave",
//     () => {
//       console.log("capture !!!!  mouseleave grandparent");
//     },
//    false
//   );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

///// not capture

child.addEventListener("click", () => {
  console.log("bubble child");
},true);
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
//document.body.addEventListener("click", () => {
//  console.log("bubble document.body");
//});

// event delegation
// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });