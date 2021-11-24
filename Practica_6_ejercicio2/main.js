/**
 * Genera un array dado una cantidad de datos x y un rango de estos. 
 * A continuación, lo muestra por pantalla
 */

function main() {
    var datos = [];
    var cantidad = simple_user_input("¿Cuantos datos quieres generar?");
    var min = simple_user_input("Escribe el valor mínimo de esos datos");
    var max = simple_user_input("Escribe el valor máximo de esos datos");

    insertar_datos(datos, cantidad, parseInt(min), parseInt(max));
    alert(datos);
}
main()