let queryStrings = new URLSearchParams(window.location.search);
let parametrosGet = Object.fromEntries(queryStrings.entries());
console.log(parametrosGet);

const fetchButton = document.querySelector('button.solicitar');
const url = document.querySelector('input#link');
const respuesta = document.querySelector('#texto');

fetchButton.addEventListener('click', async () =>{
    const apiUrl = url.value;
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        respuesta.textContent= `Status Code: ${response.status}\n\n${JSON.stringify(data, null, 2)}`;
    }catch(error){
        respuesta.textContent ='Error al obtener datos. Asegurate de que la URL de al API sea valida'
    }
})
