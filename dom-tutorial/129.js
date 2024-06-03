const todoform = document.querySelector(".form-todo");
//console.log(todoform);
const input = document.querySelector(".form-todo input[type='text']");
const ul = document.querySelector(".todo-list");
console.log(ul);

todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const val = input.value;
    const li = document.createElement("li");
   const li2 =  `
            <span class="text">${val}</span>
            <div class="todo-buttons">
               <button class="todo-btn done">Done</button>
               <button class="todo-btn remove">Remove</button>
    </div>`;
    li.innerHTML = li2;
    console.log(li);
    ul.append(li);
    input.value = " ";

});

ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
      const text = e.target.parentNode.previousElementSibling;
      text.style.textDecoration = "line-through";
  
    };

    if(e.target.classList.contains("remove")){
        const target = e.target.parentNode.parentNode;
        target.remove();s

    };
});