// 
let cross =document.querySelector(".cross");
let img = document.querySelectorAll("img");
let modal = document.querySelector(".full");
let fullimage = document.querySelector(".full-img");
cross.addEventListener("click",()=>
{
   modal.style.display = "none";
})
img.forEach((img , index) => {
    img.addEventListener("click", ()=>{
        openmodal(`images/Img${index}.jpg`)
    })
});
// function for open
 function openmodal(pic)
 {
    modal.style.display="flex";
    fullimage.src = pic;
 }