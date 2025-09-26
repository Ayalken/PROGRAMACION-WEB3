//8. Realizar un código para ejecutar una función callback después 2 segundos.
function ejecutarCallback(callback) {
    setTimeout(callback, 2000);
}

function miFuncion() {
    console.log("¡Han pasado 2 segundos!");
}

ejecutarCallback(miFuncion);
