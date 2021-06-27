const lines = document.querySelector('.lines');
const navLinks = document.querySelector('nav ul');
const links = document.querySelector('nav li');

lines.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});