/** 
 * Crea un perfil de usuario
 */

function crearPerfil() {
    var Perfil = function () {
        this.nombre = "";
        this.apellidos = "";
        this.direccion = "";
        this.telefono = "";
        this.email = "";
        this.mostrarDatos = function () {
            alert("Nombre: " + this.nombre + "\nApellidos: " + this.apellidos + "\nDirección: " + this.direccion + "\nTelefono: " + this.telefono + "\nEmail: " + this.email);
        }
    }

    var perfil = new Perfil()
    return perfil
}

/** 
 * Crea un usuario de tipo perfil
 */
function crear_usuario() {

    var contacto = crearPerfil();
    contacto.nombre = simple_user_input("Nombre: ")
    contacto.apellidos = simple_user_input("Apellidos: ")
    contacto.direccion = simple_user_input("Dirección: ")
    contactou.telefono = simple_user_input("Teléfono: ")
    contacto.email = simple_user_input("E-mail: ")

    return usuario
}

/** 
 * Modifica un contacto
 */
function modificar_contacto(usuario) {

    usuario.nombre = simple_user_input("Nombre: ")
    usuario.apellidos = simple_user_input("Apellidos: ")
    usuario.direccion = simple_user_input("Dirección: ")
    usuario.telefono = simple_user_input("Teléfono: ")
    usuario.email = simple_user_input("E-mail: ")

    return contacto
}
