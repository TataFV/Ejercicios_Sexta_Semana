/** 
 * Devuelve un número aleatorio entre 1 y 100
 * @return {integer} Resultado de la operación - Número aleatorio
 */

function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

/** 
 * Introduce 10 datos aleatorios en el array
 * @param {integer} datos - Array vacío 
 */

function insertar_datos(datos) {
    for (var i = 0; i < 10; i++) {
        var numero = numeroAleatorio()
        datos.push(numero)
    }
}

/** 
* Almacena los números pares e impares y los muestra por consola
* @param {integer} datos - Array vacío
* @param {integer} pares - Números pares del array
* @param {integer} impares - Número impares del array
*/
function parImpar(datos, pares, impares) {
    for (var i = 0; i < datos.length; i++) {
        if (datos[i] % 2 == 0) {
            console.log(datos[i] + " es par ")
            pares.push(datos[i])
        } else {
            console.log(datos[i] + " no es par ")
            impares.push(datos[i])
        }
    }
}
parImpar()