/** 
 * Devuelve un número aleatorio entre 1 y 100
 */


function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

/** 
 * Introduce en el array tantos datos aleatorios como le indiquemos 
 * @param {integer} datos - Array vacío
 */

function insertar_datos(datos) {
    for (var i = 0; i < 10; i++) {
        var numero = numeroAleatorio()
        datos.push(numero)
    }
}

/** 
 * Ordena los números de mayor a menor
 * @param {string} datos - Array lleno con los números aleatorios
 */
function ordenarNumeros(datos) {
    datos.sort(function (a, b) {
        return b - a;
    })
}
