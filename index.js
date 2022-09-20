/* OBTENEMOS EL VALOR DEL ELEMENTO*/
const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
/* SELECCIONAMOS TODOS LOS NUMEROS */
const botonesNumeros = document.querySelectorAll('.numero')
const botonesOperadores = document.querySelectorAll('.operador')

const calculadora = new Calculadora();
console.log(calculadora.sumar(2,3));