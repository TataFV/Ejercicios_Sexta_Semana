/**
 * Inserta en el Array vacío el número obtenido 
 * @param {*integer} datos - Nombre del array vacío
 * @param {*integer} cantidad - Cantidad de datos que quiere generar el usuario
 * @param {*integer} min - Valor mínimo del rango del número aleatorio que se genere en cada ocasión
 * @param {*integer} max - Valor máximo del rango del número aleatorio que se genere en cada ocasión
 */

function insertar_datos(datos, cantidad, min, max) {
    for (var i = 0; i < cantidad; i++) {
        var numero = getRandomArbitrary(min, max)
        datos.push(numero)
    }
}

/** 
Devuelve un número aleatorio del rango definido por el usuario 
* @param {*integer} min - Valor mínimo del rango del número aleatorio que se va a generar
* @param {*integer} max - Valor máximo del rango del número aleatorio que se va a generar
* @return {integer} - Resultado de la operación - número aleatorio 
*/
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

