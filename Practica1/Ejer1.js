/*Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
resultado en un objeto.
let obj = miFuncion(“euforia”)
console.log(obj); { a: 1, e: 1, i: 1, o: 1, u: 1 } */

function miFuncion(palabra) {
    let resultado = {a:0,e:0,i:0,o:0,u:0};
    for (let i=0;i<palabra.length; i++) {
        let letra=palabra[i];
        if (letra==="a") resultado.a += 1;
        else if (letra==="e") 
            resultado.e += 1;
        else if (letra==="i") 
            resultado.i += 1;
        else if (letra==="o") 
            resultado.o += 1;
        else if (letra==="u") 
            resultado.u += 1;
    }
    return resultado;
}
let obj = miFuncion("euforia");
console.log(obj); 
