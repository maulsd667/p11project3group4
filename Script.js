let queryStrings = new URLSearchParams(window.location.search);
let parametrosGet = Object.fromEntries(queryStrings.entries());
console.log(parametrosGet);

const fetchButton = document.querySelector('button.solicitar');
const url = document.querySelector('input#link');
const respuesta = document.querySelector('#texto');

fetchButton.addEventListener('click', async () => {
    const apiUrl = url.value;
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} (${response.statusText})`);
        }

        const data = await response.json();
        respuesta.textContent = `Status Code: ${response.status}\n\n${JSON.stringify(data, null, 2)}`;
    } catch (error) {
        respuesta.textContent = `Status Code: ${error.message}\n"${apiUrl}"\n 404 Error al obtener datos. Asegúrate de que la URL de la API sea válida.`;
    }
})

const icon = document.getElementById('icon');

function cambiarImagen(codigo) {
  if (codigo === 404) {
    icon.src = 'iconos/bajo-nivel-de-bateria.png'; // Cambia la ruta a tu imagen B
    icon.alt = 'Icono B';  // Cambia el texto alternativo a tu imagen B
  } else if (codigo === 200) {
    icon.src = 'iconos/bateria-cargando.png';  // Restaura la imagen A si el código es 200
    icon.alt = 'Icono A';  // Cambia el texto alternativo a tu imagen A
  } else {
    console.error('iconos/bajo-nivel-de-bateria.png');
  }
}

// Simula una respuesta con código 200 (cambia a 404 para ver el cambio)
const codigoRespuesta = 404;

// Llama a la función para cambiar la imagen basada en el código de respuesta
cambiarImagen(codigoRespuesta);


