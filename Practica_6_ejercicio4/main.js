/**
 * Rellena un array vacío con 10 números aleatorios entre el 1 y el 100.
 * Ordena los numeros de mayor a menor y los introduce en 2 arrays distintos que muestra por pantalla 
 * 
 */


function main() {
    var datos = []
    var pares = []
    var impares = []

    insertar_datos(datos);
    parImpar(datos, pares, impares);

    alert("Datos: " + datos)
    alert("Pares: " + pares)
    alert("Impares: " + impares)
}
main()   
