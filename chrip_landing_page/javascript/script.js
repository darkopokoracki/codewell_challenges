//Selectors
const hamburgerMenu = document.querySelector('.hamburger-menu img');
const mobileMenu = document.querySelector('.mobile');
const closeButton = document.querySelector('.close');


//Functions
function openHamburgerMenu() {
    mobileMenu.classList.remove('d_none');
    mobileMenu.classList.add('mobile-menu');
}

function closeHamburgerMenu() {
    mobileMenu.classList.add('d_none');
}


//Events
hamburgerMenu.addEventListener('click', openHamburgerMenu);
closeButton.addEventListener('click', closeHamburgerMenu);


