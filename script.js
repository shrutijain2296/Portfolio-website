document.addEventListener('DOMContentLoaded', function () {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});