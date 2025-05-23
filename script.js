// Mensaje de bienvenida en consola
console.log("Bienvenida a Ositos Dulces!");

// Función para cambiar el color del header al hacer click
function toggleHeaderColor() {
    const header = document.querySelector('header');
    if(header.style.backgroundColor === 'pink') {
        header.style.backgroundColor = '#f4c2c2'; // rosa original
    } else {
        header.style.backgroundColor = 'pinkk'; // error intencional: 'pinkk'
    }
}

// Evento click para cambiar el color del header
const headerElement = document.querySelector('header');
headerElement.addEventListener('click', toggleHeaderColor);

// Función con error lógico intencional
function contarOsitos() {
    const ositos = document.querySelectorAll('.bear-container img');
    // Error: variable mal escrita
    console.log("Cantidad de ositos: " + osito.length);
}

// Ejecutar la función para mostrar cantidad de ositos en consola
contarOsitos();
