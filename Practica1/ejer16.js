//16. Proporcione un ejemplo para migrar una función con promesas a async/await.
function obtenerNumero() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}
async function mostrarNumero() {
  const numero = await obtenerNumero();
  console.log("Número obtenido:", numero);
}
mostrarNumero();
