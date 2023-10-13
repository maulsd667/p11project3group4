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
        respuesta.textContent = `Status Code: ${error.message}\n"${apiUrl}"\nError al obtener datos. Asegúrate de que la URL de la API sea válida.`;
    }
});
