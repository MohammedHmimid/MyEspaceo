let navBar = document.querySelector("nav")

window.onscroll = function () {
    if (window.scrollY > 100) {
        navBar.classList.add('scrolled')
    } else {
        navBar.classList.remove('scrolled')
    }
}