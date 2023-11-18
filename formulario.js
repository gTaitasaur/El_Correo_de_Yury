import { registrarDatos } from './seguridad/firebaseConfig.js';

window.addEventListener('DOMContentLoaded', () => {
    // Mostrar datos de Firestore si es necesario
});


// Recibe los datos del formulario de datos personales
const formDatosPersonales = document.getElementById('form-datos-personales');
const formDatosLaborales = document.getElementById('form-datos-laborales');


formDatosPersonales.addEventListener('submit', (e) => {
    e.preventDefault();

    // Recolecta los datos del formulario de datos personales
    const nombres = formDatosPersonales.querySelector('#nombres').value;
    const apellidos = formDatosPersonales.querySelector('#apellidos').value;
    const sexo = formDatosPersonales.querySelector('input[name="sexo"]:checked').value;
    const rut = formDatosPersonales.querySelector('#rut').value;
    const direccion = formDatosPersonales.querySelector('#direccion').value;
    const telefono = formDatosPersonales.querySelector('#telefono').value;
    const cargo = formDatosPersonales.querySelector('#cargo').value;
    const fechaIngreso = formDatosPersonales.querySelector('#fecha-ingreso').value;
    const area = formDatosPersonales.querySelector('#area').value;
    const departamento = formDatosPersonales.querySelector('#departamento').value;

    // Objeto con datos personales
    const datosPersonales = {
        nombres,
        apellidos,
        sexo,
        rut,
        direccion,
        telefono,
        cargo,
        fechaIngreso,
        area,
        departamento,
    };

    // Llama a la función para registrar los datos en Firestore
    registrarDatos(datosPersonales);
});

formDatosLaborales.addEventListener('submit', (e) => {
    e.preventDefault();

    // Recolecta los datos del formulario de datos laborales
    const contactoNombres = formDatosLaborales.querySelector('#contacto-nombres').value;
    const contactoApellidos = formDatosLaborales.querySelector('#contacto-apellidos').value;
    const relacion = formDatosLaborales.querySelector('#relacion').value;
    const contactoTelefono = formDatosLaborales.querySelector('#contacto-telefono').value;

    const cargasNombres = formDatosLaborales.querySelector('#carga-nombres').value;
    const cargasApellidos = formDatosLaborales.querySelector('#carga-apellidos').value;
    const cargasSexo = formDatosLaborales.querySelector('input[name="carga-sexo"]:checked').value;
    const cargasRut = formDatosLaborales.querySelector('#carga-rut').value;
    const parentesco = formDatosLaborales.querySelector('#parentesco').value;

    // Objeto con datos laborales
    const datosLaborales = {
        contactos: [
            {
                nombres: contactoNombres,
                apellidos: contactoApellidos,
                relacion,
                telefono: contactoTelefono,
            },
        ],
        
        cargas: [
            {
                nombres: cargasNombres,
                apellidos: cargasApellidos,
                sexo: cargasSexo,
                rut: cargasRut,
                parentesco,
            },
            // Puedes agregar más objetos si hay múltiples cargas familiares
        ],
    };

    // Llama a la función para registrar los datos en Firestore
    registrarDatos(datosLaborales);
});





