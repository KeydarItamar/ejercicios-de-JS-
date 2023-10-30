document.addEventListener("DOMContentLoaded", function(){

let boton = document.querySelector(".boton1");


function primerMier(){
    let anio1 = parseInt(prompt("Introduce un año"));
    let anio2 = parseInt(prompt("Introduce otro año"));

    const weekday = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

    let year1 = new Date(anio1, 0, 1); // 1 de enero del año 1
    let year2 = new Date(anio2, 0, 1); // 1 de enero del año 2

    while (year1.getFullYear() <= year2.getFullYear()) {  
        if (weekday[year1.getDay()] == "miércoles") {
            console.log("El 1 de enero de " + year1.getFullYear() + " es un miércoles.");
            return;
        } else {
            year1.setFullYear(year1.getFullYear() + 1);
        }
    }
    console.log("No se encontró ningún 1 de enero que sea miércoles en el rango proporcionado.");
}


boton.addEventListener('click', primerMier);

let boton2 = document.querySelector(".boton2");

function vocals(){
    let palabra = prompt("Introduce una palabra");

    let vocals = [/[aàá]/gi, /[eèé]/gi, /[iìí]/gi, /[oòó]/gi, /[uùú]/gi];
    let boleanAux= false;


    for(let i = 0 ; i< vocals.length ; i++){
        if(palabra.match(vocals[i])){
            boleanAux = true;
        }else{
            boleanAux = false;
            console.log ( palabra + " no tiene las cinco vocales");
            return;
        }
    }
    if(boleanAux);
        console.log(palabra + " Tiene las cinco vocales");
}

boton2.addEventListener('click', vocals);

});

