let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(event)
{
    mv(event.pageX , event.pageY);
    
});

function mv(pageX,pageY)
{
    cursor.style.left = pageX +"px";
    cursor.style.top = pageY +"px";
}
