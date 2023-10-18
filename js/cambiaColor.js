
//Ejercicio donde ponemos unas cajas de colores en pantalla y al pasar el raton por encima
//cambiamos el color del fondo al de la caja. 

//Cargamos el script 
window.addEventListener('DOMContentLoaded', function(){

//Cargamos los divs a traves del nombre de su clase.
let cajaR = document.querySelector(".rojo");
let cajaB = document.querySelector(".blanco");
let cajaV = document.querySelector(".verde");
let cajaA = document.querySelector(".amarillo");
let fondo = document.querySelector("body");

//funcion para aplicar los stylos a cada div
function estilosCaja(nombreCaja,colorCaja){
    nombreCaja.style.background = colorCaja;
    nombreCaja.style.height = "50px";
    nombreCaja.style.width = "50px";
    nombreCaja.style.margin = "5px"; 
    nombreCaja.style.border = "1px solid black" ;

}

//Aplicamos estilos a todos los divs
estilosCaja(cajaR, "red");
estilosCaja(cajaB, "white");
estilosCaja(cajaV, "green");
estilosCaja(cajaA, "yellow");

//Funcion para cambiar el color del fondo al pasar el raton por encima. 
function cambioFondo(nombreCaja){
    nombreCaja.addEventListener("mouseover", function(){
        fondo.style.background = nombreCaja.style.background;
    });
}

//aplicamos la funcion a a cada color. 
cambioFondo(cajaR);
cambioFondo(cajaB);
cambioFondo(cajaV);
cambioFondo(cajaA);

});

//Podria mirar de resumir codigo haciendo un ciclo For. Anidando las cajas con el getElementsByClass y trabajar con un array. 