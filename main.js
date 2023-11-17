let toTop = document.getElementById("arrow-up");

window.addEventListener("scroll", scrollTo);

function scrollTo() {
    if (window.scrollY > 200) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}
toTop.addEventListener('click', backToTop);

function backToTop() {
    window.scroll(0, 5);
}
