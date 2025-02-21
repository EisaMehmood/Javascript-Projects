let cont1 = document.querySelector(".container1");
let cont2 = document.querySelector(".container2");
let cont3 = document.querySelector(".container3");

// Add an event listener for when mouse enters cont1
cont3.addEventListener("mouseenter", () => {
    cont2.style.transform = "rotate(-290deg)";
    cont1.style.transform = "rotate(290deg)";
});

// Add an event listener for when mouse leaves cont1
cont3.addEventListener("mouseleave", () => {
    cont2.style.transform = "rotate(0deg)";
    cont1.style.transform = "rotate(0deg)";
    
});