//15. Proporcione un ejemplo para convertir un callback en una promesa
function obtenerDatoConCallback(callback) {
  setTimeout(() => {
    callback("Dato obtenido con callback");
  }, 1000);
}
function obtenerDatoConPromesa() {
  return new Promise((resolve) => {
    obtenerDatoConCallback((resultado) => {
      resolve(resultado);
    });
  });
}
obtenerDatoConPromesa().then((dato) => {
  console.log("Resultado:", dato);
});
