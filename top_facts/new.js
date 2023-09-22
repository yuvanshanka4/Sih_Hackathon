document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu');
    const navMenu = document.getElementById('menubar');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('menubar');
    });
});