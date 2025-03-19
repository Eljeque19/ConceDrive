document.addEventListener('DOMContentLoaded', function () {
    const menuCatalogo = document.querySelector('.menu-catalogo');
    const subMenu = menuCatalogo.querySelector('.submen');

        subMenu.style.display = 'none';

    menuCatalogo.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block';
    });

    menuCatalogo.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none'; 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuCatalogo = document.querySelector('.menu-catalogo');
    const subMenu = menuCatalogo.querySelector('.submen');

    subMenu.style.display = 'none';

    menuCatalogo.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block'; 
    });

    menuCatalogo.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none'; 
    });

    subMenu.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block'; 
    });

    subMenu.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none';

    console.log("Prueba")
        hdgfhgfh
    });
});
