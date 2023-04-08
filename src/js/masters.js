window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger'),
    hamburgerMenu = document.querySelector('.hamburger__menu'),
    hamburgerClose = document.querySelector('.hamburger__menu-close');

    hamburger.addEventListener('click', () => {
        hamburgerMenu.classList.add('active')
    });

    hamburgerClose.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active')
    });
});