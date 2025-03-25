document.addEventListener('DOMContentLoaded', function () {
    // Menú desplegable
    const menuCatalogo = document.querySelector('.menu-catalogo');
    if (menuCatalogo) {
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
        });
    }
});

// Validación del formulario de registro
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const email = document.getElementById('email').value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                event.preventDefault();
            } else {
                localStorage.setItem('usuario', email);
                alert('Registro exitoso. Ahora puedes iniciar sesión.');
                form.reset();
            }
        });
    }
});

// Botón para volver al inicio (Scroll-to-Top)
document.addEventListener('DOMContentLoaded', function () {
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = '↑';
    scrollBtn.id = 'scroll-top-btn';
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px';
    scrollBtn.style.right = '20px';
    scrollBtn.style.padding = '10px';
    scrollBtn.style.backgroundColor = '#333';
    scrollBtn.style.color = '#fff';
    scrollBtn.style.border = 'none';
    scrollBtn.style.borderRadius = '5px';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.display = 'none'; // oculto inicialmente
    scrollBtn.style.zIndex = '1000';

    document.body.appendChild(scrollBtn);

    // Mostrar botón al hacer scroll
    window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // Al hacer clic, vuelve al inicio de la página
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Mensaje de saludo dinámico según la hora del día
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    if (header) {
        const greeting = document.createElement('div');
        greeting.id = 'dynamic-greeting';
        greeting.style.padding = '10px';
        greeting.style.fontSize = '16px';
        greeting.style.textAlign = 'center';

        function actualizarSaludo() {
            const hora = new Date().getHours();
            let mensaje = '';
            if (hora < 12) {
                mensaje = '¡Buenos días!';
            } else if (hora < 18) {
                mensaje = '¡Buenas tardes!';
            } else {
                mensaje = '¡Buenas noches!';
            }
            greeting.textContent = mensaje;
        }

        actualizarSaludo();
        header.appendChild(greeting);
    }
});

// Botón para mostrar/ocultar contraseña en el formulario de registro
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    // Verificamos que existan los elementos
    if (passwordInput && confirmPasswordInput) {
        // Creamos el botón
        const togglePasswordButton = document.createElement('button');
        togglePasswordButton.type = 'button';
        togglePasswordButton.textContent = 'Mostrar Contraseña';
        // Estilos: mismo color que el botón de "Registrarse", tamaño reducido
        togglePasswordButton.style.backgroundColor = 'cadetblue';
        togglePasswordButton.style.color = '#fff';
        togglePasswordButton.style.padding = '6px 10px';
        togglePasswordButton.style.fontSize = '14px';
        togglePasswordButton.style.border = 'none';
        togglePasswordButton.style.borderRadius = '5px';
        togglePasswordButton.style.cursor = 'pointer';
        togglePasswordButton.style.display = 'block';
        togglePasswordButton.style.marginTop = '10px';
        
        // Insertamos el botón justo después del input de confirmación
        confirmPasswordInput.insertAdjacentElement('afterend', togglePasswordButton);
        
        // Evento para mostrar/ocultar contraseñas
        togglePasswordButton.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            confirmPasswordInput.setAttribute('type', type);
            togglePasswordButton.textContent = type === 'text' ? 'Ocultar Contraseña' : 'Mostrar Contraseña';
        });
    }
});