//Cargamos el script
document.addEventListener('DOMContentLoaded',function(){

//Asignamos partes del html a variables
let btnIni = document.querySelector("#btnInicio");
let result = document.querySelector(".resultado");
let images = document.getElementById('images');
//Result mostrara por pantalla la palabra
result.innerHTML = "";

//Variables para las estadisticas y guardas las palabras 
let partidasJugadas= 0;
let contador=0;
let derrotas=0;
let resultado = "";
let palabra = "";
let victorias= 0;


//Funcion que mira si la letra esta en la palabra y devuelve el resultado por pantalla
function cambiarLetra(letra, palabra, resultado){
    let aux = "";
        if (palabra.includes(letra)){
            for(let i = 0 ; i < palabra.length ; i++ ){
                aux +=palabra[i]+" "; 
            }
            palabra = aux;
            for(let x = 0 ; x < palabra.length ; x++ ){
                if(palabra[x]== letra){
                 resultado = resultado.substring(0, x) + letra + resultado.substring(x + 1);
                }             
            }
        alert("Oh la letra " + letra + " esta en la palabra!")
        }else{
            alert("Oh no hay ninguna " + letra + "... ")
            contador++;
        }
    return resultado;
}
      
//Funcion para iniciar la partida
function inicio(){
    alert("Vamos a jugar!");
    partidasJugadas++;
    palabra = prompt("Introduce una palabra!");
    alert("La palabra tiene " + palabra.length + " letras");
    for (let i = 0 ; i < palabra.length ; i++){
        resultado+= "_"+" ";
    }
    result.innerHTML=resultado;

}

//boton para llamar a la funcion inicio
btnIni.addEventListener('click', function(){
    inicio();
})


//funcion para hacer correr el juego 
function juego(letra){
    let resul = cambiarLetra(letra, palabra, resultado);
    resultado = resul;
    result.innerHTML = resultado;
    comprobarPartida();
}

//Comprobaciones a cada ronda del juego
function comprobarPartida(){
     images.src = "images/penjat_" + contador +".png"; 
    if(!resultado.includes('_')){
            alert("Enhorabuena ya los has logrado!");
            victorias++;
            result.innerHTML = "";


    }else if(contador == 6){
            alert("Ohh te has quedado sin intentos");
            result.innerHTML = "";
            derrotas++;
    }
}


//botones por pantalla donde cada letra corre la funcion juego
function generarBoton() {
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let cajaBotones = document.querySelector(".cajaBotones");

    for (let i = 0; i < letras.length; i++) {
        let boton = document.createElement("button");
        boton.id = letras[i];
        boton.textContent = letras[i];
        boton.addEventListener("click", function() {
            juego(letras[i]);
        });
        cajaBotones.appendChild(boton);
    }
}

generarBoton();



});