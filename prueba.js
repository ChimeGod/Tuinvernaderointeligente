let listElements = document.querySelectorAll('.list_botton--click');
let menuToggleButton = document.getElementById('menuToggle');
let navMenu = document.getElementById('navMenu');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        let arrow = listElement.querySelector('.list_arrow');
        arrow.classList.toggle('arrow');

        let menu = listElement.nextElementSibling;

        // Si el menú está cerrado, se expande
        if (menu.style.height === '0px' || menu.style.height === '') {
            menu.style.height = `${menu.scrollHeight}px`;
            menu.classList.add('open');
        } else {
            menu.style.height = '0px';
            menu.classList.remove('open');
        }
    });
});

// Abrir y cerrar el menú en pantallas pequeñas
menuToggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});
