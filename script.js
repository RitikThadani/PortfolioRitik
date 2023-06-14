function validarFormulario() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        var errorElement = document.getElementById('error-message');
        errorElement.innerHTML = 'Por favor, introduce un correo electrónico válido.';
        return false;
    }

    return true;
}