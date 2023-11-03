document.addEventListener("DOMContentLoaded", function(){
let boton = document.querySelector(".boton1");

function fechasT(){

let fechaHoy = new Date();

let meses = fechaHoy.getMonth();
console.log(fechaHoy);
console.log(meses);

let fecha1 = new Date("2023-1-1");

let milisegundos = parseInt(fechaHoy.getTime() - fecha1.getTime()); 

let semanas = Math.round(milisegundos / (24 * 60 * 60 * 1000 * 7));
console.log("Han pasado " + semanas + " semanas del año.");

// *****************************************************

let dias = Math.round(milisegundos / (24 * 60 * 60 * 1000))-1;
console.log(dias);
let porcentajeDias = (dias*100)/365;
console.log(porcentajeDias);

//******************************************* */
let porcentajeRestan = 100 - porcentajeDias;
console.log(porcentajeRestan); 
//************************************************* */
let horaHoy = fechaHoy.getHours();
let minuHoy = fechaHoy.getMinutes();
let segonsHoy = fechaHoy.getSeconds();
console.log("Ahora son las " + horaHoy + ":" + minuHoy + ":" + segonsHoy);

//********************************************/

let fecha= new Date("2023-10-27");
milisegundos = fechaHoy - fecha; 
let horasDelDia = Math.round(milisegundos / (60 * 60 * 1000));
console.log(horasDelDia);

let porcentajeDelDia= (horasDelDia*100)/24; 
console.log("Ha pasado un "+porcentajeDelDia+ " del dia.");
console.log("Queda un " + (100 - porcentajeDelDia) + " del dia.")
}

boton.addEventListener('click', fechasT);



});