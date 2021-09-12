const hamburgerBtn = document.querySelector('.hamburger-menu__img');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');


function openMobileMenu() {
    mobileNav.classList.remove('d_none_mobile');
    closeBtn.classList.remove('d_none_mobile');
}

function closeMobileMenu() {
    mobileNav.classList.add('d_none_mobile');
}


hamburgerBtn.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);