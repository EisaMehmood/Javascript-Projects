let path = document.documentElement
path.addEventListener("mousemove",
    (e)=>
    {
        path.style.setProperty("--1", e.clientX+"px");
        path.style.setProperty("--2", e.clientY+"px");
    }
)