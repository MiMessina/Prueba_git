const usuario = document.getElementById('username');
const password = document.getElementById('password')
const btn = document.getElementById('submit');

btn.addEventListener('click', () => {

            if (usuario.value == '') { 

                usuario.setCustomValidity('Ingresa un e-mail')

            } else if (usuario.value.indexOf('@')==-1) { 

                usuario.setCustomValidity('Debe contener un @')

            } else if (password.value == '') { 

                usuario.setCustomValidity('');
                password.setCustomValidity('Ingresa la contraseña')

            } else { 

                usuario.setCustomValidity('');
                password.setCustomValidity('');
                
            }
        }
    