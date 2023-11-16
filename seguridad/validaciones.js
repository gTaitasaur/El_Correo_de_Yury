document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
      // Llama a las funciones de validación y evita el envío del formulario si es necesario
      if (!validarDatosPersonales() || !validarDatosLaborales() || !validarContactoEmergencia() || !validarCargasFamiliares()) {
        event.preventDefault();
      }
    });
  
    function validarDatosPersonales() {
      const nombres = document.getElementById("nombres").value.trim();
      const apellidos = document.getElementById("apellidos").value.trim();
      const sexo = document.querySelector('input[name="sexo"]:checked');
      const rut = document.getElementById("rut").value.trim();
      const direccion = document.getElementById("direccion").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
  
      // Verificación de campos obligatorios
      if (!nombres || !apellidos || !sexo || !rut || !direccion || !telefono) {
        alert("Todos los campos personales son obligatorios");
        return false;
      }
  
      // Validación de formato de Rut (utilizando una expresión regular básica)
      const rutRegex = /^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]$/;
      if (!rutRegex.test(rut)) {
        alert("Ingrese un Rut válido");
        return false;
      }
  
      // Validación de formato de teléfono
      const telefonoRegex = /^\+?(\d{2,4})?[.-]?\d{6,}$/;
      if (!telefonoRegex.test(telefono)) {
        alert("Ingrese un número de teléfono válido");
        return false;
      }
  
      return true;
    }
  
    function validarDatosLaborales() {
      // Agrega tus propias validaciones para los datos laborales
      return true;
    }
  
    function validarContactoEmergencia() {
      // Agrega tus propias validaciones para los contactos de emergencia
      return true;
    }
  
    function validarCargasFamiliares() {
      // Agrega tus propias validaciones para las cargas familiares
      return true;
    }
  });
  