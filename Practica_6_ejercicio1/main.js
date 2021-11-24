/**
 * Menú que ofrece al usuario 3 opciones: añadir datos, ver datos o salir del programa  
 */


function main() {
    var datos = [];

    do {
        var respuesta = simple_user_input("¿Qué quieres hacer? \n1 - Añadir datos\n2 - Ver datos\n3 - Salir");
        if (respuesta == 1) {
            insertar_dato(datos);
        } else if (respuesta == 2) {
            mostrar_datos(datos);
        }


    } while (respuesta != 3);
}
main()