let queryStrings = new URLSearchParams(window.location.search);
let parametrosGet = Object.fromEntries(queryStrings.entries());
console.log(parametrosGet);