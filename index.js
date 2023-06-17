let hamburger = document.getElementById('hamMenu');
let menu = document.getElementById('menu');
let cross = document.getElementById('cross');
let ul = document.querySelector('.menu-items');

hamburger.addEventListener('click', function () {
    menu.className == 'menu' ? menu.className = 'menu active' : ''

    menu.className == 'menu active' ? ul.className = 'flex menu-ul' : ul.className = 'flex menu-ul'

    hamburger.style.display = 'none';

    cross.style.display = 'flex'
});

cross.addEventListener('click', function () {
    menu.className == 'menu active' ? menu.className = 'menu' : ''
    hamburger.style.display = 'flex';
    cross.style.display = 'none'
});