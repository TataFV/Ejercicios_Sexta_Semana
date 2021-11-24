
/**
 * Genera la cantidad de números Fibonacci que se indique
 * @param {string} numeros - Cantidad de números que se quieren generar 
 * @return fib {integer} fib - Array con los 20 primeros números de la sucesión de Fibonacci    
 */

function fibonacci(numeros) {
    var fib = [0, 1];
    for (var i = fib.length; i < numeros; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}
