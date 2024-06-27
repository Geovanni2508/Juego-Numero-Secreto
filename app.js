let numeroSecreto = 0 ;
let intentos = 0 ;
let listaNumeroSorteados =[];
let numeroMaximo = 10 ;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

   console.log (intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acerto.
        if(numeroDeUsuario > numeroSecreto) { 
            asignarTextoElemento("p","El numero secreto es menor");
        } else { 
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
   //let valorCaja = document.querySelector("#valorUsuario");
   //valorCaja.value = "";
   document.querySelector("#valorUsuario").value = "" ;
}

function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
       
        console.log(numeroGenerado);
        console.log(listaNumeroSorteados);
// si ya sorteamos todos los numeros?
        if (listaNumeroSorteados.length == numeroMaximo) {
            asignarTextoElemento ("p","Ya se Sortearon todos los números posibles");
        } else {
//si el numero generado esta incluido en la lista, se hace operacion o se hace otra
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else { 
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales () {
    asignarTextoElemento("h1 "," Juego del número secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log (numeroSecreto);
}

function reiniciarJuego() {
    //Es necesario: limpiar la caja
    limpiarCaja ();
    //Indicar mensaje de intervalos de numeros
    condicionesIniciales();
    //Generar el numero aleatorio
    //numeroSecreto = generarNumeroSecreto();
    //reset el numero de intentos
    //intentos = 1;
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}

condicionesIniciales();