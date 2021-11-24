/**
 * Inserta los datos que recibimos del usuario en el Array 
 * @param {integer} datos - Dato que introduce el usuario
 */

function insertar_dato(datos){
    var dato = simple_user_input("Inserta un dato");
    datos.push(dato);
}

/**
 * Muestra en que posición está cada dato en el Array 
 * @param {integer} datos - Dato del Array
 */

function mostrar_datos(datos){
    var texto="";
    for(var i=0;i<datos.length;i++){
        texto = texto + "En la posición" + i +"\n" + "está el dato: " + datos[i];
    }
    alert(texto)
}
