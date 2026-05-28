document.getElementById("registroForm").addEventListener("submit",function (e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const password = document.getElementById("contraseña").value;
    // ===== Validación del formulario de contacto =====
  function validarEmail(correo) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(correo);
  }
  
  function validarPassword() {

  const password = document.getElementById("password").value;

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

  if (regex.test(password)) {
    alert("Contraseña segura ✅");
  } else {
    alert("La contraseña debe tener:\n\n- 8 caracteres mínimo\n- Mayúscula\n- Minúscula\n- Número\n- Carácter especial");
  }
}

  function validateContactForm(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('correo').value.trim();
    const direccion = document.getElementById('').value.trim();
    const password = document.getElementById('contraseña').value.trim();

    if (!nombre) {
      alert('Por favor ingresa tu nombre completo.');
      return;
    }

    const nombreValido = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!nombreValido.test(nombre)) {
      alert('El nombre sólo puede contener letras y espacios.');
      return;
    }

    if (!email || !validarEmail(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    const direccionValido = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!direccionValido.test(direccion)) {
      alert('la direccion sólo puede contener letras y espacios.');
      return;
    }

    function validarPassword() {

    const password = document.getElementById("password").value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;

    if (regex.test(password)) {

        alert("Contraseña válida y segura ✅");

    } else {

        alert("Contraseña inválida ❌");

    }
    }

    alert('Formulario enviado');
    form.reset();
  }

  document.addEventListener('DOMContentLoaded', function() {
    const cf = document.getElementById('contactForm');
    if (cf) cf.addEventListener('submit', validateContactForm);
  });



    if (nombre === ""|| correo === "" || direccion === "" || password === "") {
        document.getElementById("mensaje").textContent =
            "todos los campos son obligatorios.";
        return;
    }

    document.getElementById("mensaje").textContent =
        "formulario enviado correctamente.";
});