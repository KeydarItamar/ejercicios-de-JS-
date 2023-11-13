

//Cargamos el script
document.addEventListener('DOMContentLoaded',function(){

//Asignamos partes del html a variables
let btnIni = document.querySelector("#btnInicio");
let result = document.querySelector(".resultado");
let images = document.getElementById('images');
let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

//Result mostrara por pantalla la palabra
result.innerHTML = "";

//Variables para las estadisticas y guardas las palabras 
let partidasJugadas= parseInt(localStorage.getItem("partidasJugadas")) || 0;;
let contador=0;
let derrotas=  parseInt(localStorage.getItem("derrotas")) || 0;
let resultado = "";
let palabra = "";
let ventana="";
let victorias= parseInt(localStorage.getItem("victorias")) || 0;
// let victorias= 0;
let porcenVictorias= victorias > 0 ? (victorias/partidasJugadas)*100 : 0;
let porcenDerrotas= derrotas > 0 ? (derrotas/partidasJugadas)*100 : 0;

localStorage.getItem("victorias")

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
        // alert("Oh la letra " + letra + " esta en la palabra!")
        }else{
            alert("Oh no hay ninguna " + letra + "... ")
            contador++;
        }
    return resultado;
}
      
//Funcion para iniciar la partida
function inicio(){
    for(let i = 0; i<letras.length ; i++){
        document.getElementById(letras[i]).disabled = false;
    }    
    result.innerHTML = "_ _ _ _ _ ";
    resultado= "";
    alert("Vamos a jugar!");
    partidasJugadas++;
    localStorage.setItem("partidasJugadas",partidasJugadas);
    palabra = prompt("Introduce una palabra!");
    palabra = palabra.toUpperCase();
    alert("La palabra tiene " + palabra.length + " letras");
    for (let i = 0 ; i < palabra.length ; i++){
        resultado+= "_"+" ";
    }
    result.innerHTML=resultado;

}

//boton para llamar a la funcion inicio
btnIni.addEventListener('click', function(){
    inicio();
    comprobarPartida();

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
            localStorage.setItem("victorias", victorias);
            result.innerHTML = resultado;

    }else if(contador == 6){
            alert("Ohh te has quedado sin intentos");
            derrotas++;
            localStorage.setItem("derrotas", derrotas);

            result.innerHTML = "";
            contador =  0;
    }
}


//botones por pantalla donde cada letra corre la funcion juego
function generarBoton() {
    let cajaBotones = document.querySelector(".cajaBotones");

    for (let i = 0; i < letras.length; i++) {
        let boton = document.createElement("button");
        boton.id = letras[i];
        boton.textContent = letras[i];
        boton.addEventListener("click", function() {
            juego(letras[i]);
            document.getElementById(letras[i]).disabled = true;

        });
        cajaBotones.appendChild(boton);
    }
}

generarBoton();

//Funcion que nos muestras las partidas jugadas, ganadas y perdidas en una nueva pestaña. 
function estadist(){
    ventana = window.open ('', 'blank')
    let estadisTexto = "Has jugado: " + partidasJugadas  + "<br>" + "Victorias :" + victorias + "<br>" + "Derrotas :" + derrotas + "<br>"+"Porcentaje victorias: "+ porcenVictorias+ "% <br>"+"Porcentaje Derrotas: "+ porcenDerrotas + "%";
    ventana.document.body.innerHTML = estadisTexto;
}

function brrEstadis(){
    localStorage.clear();
    partidasJugadas = 0;
    victorias = 0;
    derrotas = 0;
    alert("Se han borrado las estadiscas de las partidas")
}


//botones para mostrar y borrar estadisticas y sus respectivos eventos para que suceda.
let btnEsta = document.getElementById("btnEstadisticas");
let btnBorrar = document.getElementById("borrarEstadisticas");

btnEsta.addEventListener('click', function(){
    estadist();
});

btnBorrar.addEventListener('click', function(){
    brrEstadis();
})


});