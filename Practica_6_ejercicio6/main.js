/** 
 * Realiza funciones de agenda
 */
function main() {

    var agenda = []
    do {
        var respuesta = simple_user_input("¿Qué quieres hacer? \n1 - Crear perfil\n2 - Borrar perfil\n3 - Modificar perfil\n4 - Mostrar perfil\n5 - Mostrar todos los perfiles\n6 Salir");
        switch (respuesta) {
            case "1":
                var usuarioNuevo = crear_usuario()
                agenda.push(usuarioNuevo)
                console.log(agenda.length)
                break;
            case "3":

                break
            default:
                break;
        }

    } while (true);
}
main()


/** 
 * Modifica los datos del usuario
 */
function menuModificar() {
    do {
        var respuesta = simple_user_input("¿Cómo quieres modificar los datos del usuario? \n1 - Por índice\n2 - Por nombre");
        switch (respuesta) {
            case "1":
                var indice = simple_user_input("¿Qué índice?\n 1-5")
                break;
            case "2":
                var usuarioModificado = modificar_indice_usuario
                break
            default:
                break;
        }

    } while (true);
}
/** 
 * Busca los conctactos en la agenda
 */
function buscarUsuario(contactos, nombre) {
    for (var i = 0; i < contactos.length; i++) {
        var contacto = contactos[i]
        console.log("El " + contactos[i] + " es " + agenda[agenda.lenght])
        if (contacto.nombre == nombre) { }
    }
}
