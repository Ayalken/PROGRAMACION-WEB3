//4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto.
//let obj = miFuncion([3,1,5,4,2])
//console.log(obj) // { mayor: 5, menor: 1 }
function miFuncion(arreglo) {
  let mayor=arreglo[0];
  let menor=arreglo[0];
  for (let i=1;i<arreglo.length; i++) {
    if (arreglo[i]>mayor) {
      mayor=arreglo[i];
    }
    if (arreglo[i]<menor) {
      menor=arreglo[i];
    }
  }
  return { mayor:mayor,menor:menor };
}

let obj = miFuncion([3,1,5,4,2]);
console.log(obj);
