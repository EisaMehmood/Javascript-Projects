let button = document.querySelector("button");
let body = document.querySelector("body");
let code = document.querySelector(".code");
let color ="#";
function random()
{
    let num = "0123456789ABCDEF"
    for(let i = 0; i<6 ; i++)
    {
       color += num[Math.floor(Math.random()*16)];
    }
}
button.addEventListener("click", ()=>
{
  random();
  code.innerHTML =  color;
  body.style.backgroundColor = color;
  console.log(color);
  color ="#";
})