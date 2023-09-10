function toggleNav(){
    const outer = document.querySelector(".outer-grid");
    outer.classList.toggle("outer-grid-expanded");

    const nav = document.querySelector("nav");
    nav.classList.toggle("hide-nav");
}