const add = document.querySelector(".task-list");
const  input = document.querySelector(".newTask");
const btn = document.querySelector(".addTask");

btn.addEventListener("click",()=>
{
    const newli = document.createElement("li");
    const value =  input.value;
    newli.innerText = value;
    add.appendChild(newli);
    input.value ="";
})