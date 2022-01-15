// for example this code will close the navbar if we click on the other part of page.

document.addEventListener("click", e => {
    if (e.target.matches('.navigation')) return
    nav.classList.remove('nav-active')
    burger.classList.remove('toggle');
});