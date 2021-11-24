/**
 * Mensaje simple para preguntar al usuario y recuperar información 
 * @param {string} texto 
 * @returns {string} respuesta - Respuesta del usuario 
 */

function simple_user_input(texto) {
    var respuesta = prompt(texto);
    return respuesta;
}