const mobileMenu = () => {
    const burger = document.querySelector('.burger');
    const headerMobile = document.querySelector('.header__right--mobile');

    burger.addEventListener('click', () => {
        headerMobile.classList.toggle('mobile-active');
    });
}

mobileMenu();