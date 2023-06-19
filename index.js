let hamburger = document.getElementById('hamMenu');
let menu = document.getElementById('menu');
let ul = document.querySelector('.menu-items');

hamburger.addEventListener('click', function () {
    menu.className == 'menu' ? menu.className = 'menu active' : menu.className = 'menu'
    menu.className == 'menu active' ? ul.className = 'flex menu-ul' : ul.className = 'flex menu-ul'
    hamburger.childNodes[1].src == "http://127.0.0.1:5500/Assets/cross.webp" ?
        hamburger.childNodes[1].src = "http://127.0.0.1:5500/Assets/hamburger.svg"
        :
        hamburger.childNodes[1].src = "http://127.0.0.1:5500/Assets/cross.webp"
    document.body.style.overflow = 'hidden';
});
