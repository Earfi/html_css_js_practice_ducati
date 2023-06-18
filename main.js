let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('ri-close-fill');
    navbar.classList.toggle('active');
}

