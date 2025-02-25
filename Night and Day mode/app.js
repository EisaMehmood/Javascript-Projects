let button = document.querySelector("input");
let body = document.querySelector("body");
button.addEventListener('click',()=>
{
    if(button.checked===true){
    body.style.backgroundColor ="white";
}
else
{
    body.style.backgroundColor ="black";
}

})
