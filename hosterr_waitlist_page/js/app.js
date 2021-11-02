const menu = document.getElementById('menu');
const navButtons = document.querySelector('.nav-buttons');
const ul = document.querySelector('.list');

menu.addEventListener('click', () => {
    navButtons.classList.toggle('show');
    ul.classList.toggle('show');
});