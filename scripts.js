// script.js
const heroButton = document.querySelector('#hero button');

heroButton.addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById('about').offsetTop,
        behavior: 'smooth'
    });
});
