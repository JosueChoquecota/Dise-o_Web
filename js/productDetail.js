
const params = new URLSearchParams(window.location.search);
const producId = params.get("id");

console.log("ID del producto: ", producId)