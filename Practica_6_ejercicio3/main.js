/** 
 * Rellena un array con x números aleatorios, los ordena de mayor a menor y a continuación los muestra.
 */

function main() {
    var datos = [];
    insertar_datos(datos);
    ordenarNumeros(datos);
    for (i of datos) {
        alert(i)
    }
}
main()