// script.js
window.addEventListener("scroll", function() {
    const header = document.getElementById("nav-head");
    const hero = document.querySelector(".hero");
    const heroUpper = hero.getBoundingClientRect().bottom;
    const headerBottom = header.getBoundingClientRect().bottom;
    console.log("scroll "+heroUpper);
    
    if (heroUpper <= 0) {
        // header.classList.add("fixed");
    } else {
        // header.classList.remove("fixed");
    }
});
