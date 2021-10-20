const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close');


function openMenu() {
    mobileMenu.classList.remove('d_none');
}

function closeMenu() {
    console.log('Funkcija je pokrenuta');
    mobileMenu.classList.add('d_none')
}


burgerMenu.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);