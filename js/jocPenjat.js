document.addEventListener('DOMContentLoaded', function(){

let boton = document.querySelector(".boton1");
let partidasJugadas = 0;
let victorias= 0;
let derrotas= 0; 

function inicio(){
console.log("Pulsa el boton y seleciona una opcion: ")
console.log("Empezar juego ------> 1")
console.log("Estadisticas -------> 2")
console.log("Salir del juego ----> 3")

boton.addEventListener('click', function(){
    let option = parseInt(prompt("Escoge una opción"));

switch(option){
    case 1:
        juego();
    break;

    case 2: 
        estadisticas();
        break;

    case 3: 
        salir();
        break;
    default:
        console.log("no has escogido ninguna opcion valida, vuelve a escoger: ")
        inicio();
}
});
}


inicio();



function salir(){
    console.log("Ciiao saliendo del juego.")
}


function estadisticas(){
    console.log("Has jugado " + partidasJugadas + " partidas!");
    console.log("Has ganado " + victorias);
    console.log("Has perdido " + derrotas);

}


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
        console.log("Oh la letra " + letra + " esta en la palabra!")
        }else{
            console.log("Oh no hay ninguna " + letra + "... ")
            contador++;
        }
    return resultado;
}
        


let contador=0;

function juego(){
    let seguir = true;
    do{
    console.log("Vamos a jugar!");
    partidasJugadas++;
    let palabra = prompt("Introduce una palabra!");
    console.log("La palabra tiene " + palabra.length + " letras");

    let resultado = "";
    for (let i = 0 ; i < palabra.length ; i++){
        resultado+= "_"+" ";
    }
    console.log(resultado);
    
    do{
    console.log("Introduce la letra que buscas");
    let letra = prompt("Que letra buscas");
    let resul = cambiarLetra(letra, palabra, resultado);
    resultado = resul;
    console.log(resultado);

    if(!resultado.includes('_')){
        console.log("Enhorabuena ya los has logrado!");
        victorias++;
        break;
    }
    if (contador == 6){
        console.log("Ohh te has quedado sin intentos");
        derrotas++;
    }
    }while (contador < 6);
    console.log("Quieres jugar otra vez?Escribe S/N para continuar");

    let continuar = prompt("Continuar jugando S/N: ");

    if(continuar!=="s" && continuar !=="S"){
        seguir=false;
    }else{
        salir();
    }

    contador = 0;
    }while(seguir);

}









});
