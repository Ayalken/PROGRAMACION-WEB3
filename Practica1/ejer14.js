// 14. Ejemplo para convertir una promesa en un callback
function obtenerDatoPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let exito = Math.random() > 0.5;
      if (exito) {
        resolve("Dato obtenido con promesa");
      } else {
        reject("No se pudo obtener el dato");
      }
    }, 1000);
  });
}
function obtenerDatoCallback(callback) {
  obtenerDatoPromesa()
    .then((resultado) => callback(null, resultado)) 
    .catch((error) => callback(error, null)); 
}
obtenerDatoCallback((error, dato) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Resultado:", dato);
  }
});
