/* OBTENEMOS EL VALOR DEL ELEMENTO*/
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
/* SELECCIONAMOS TODOS LOS NUMEROS */
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', ()=>{
        /* muestra en el display el valor que se tiene en el boton*/ 
       display.agregarNumero(boton.innerHTML)
    })
})

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', ()=>{
        display.computar(boton.value)
    })
})

const calculadora = new Calculadora()
console.log(calculadora.restar(3,3));