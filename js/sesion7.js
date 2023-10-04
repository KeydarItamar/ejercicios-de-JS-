function calculTelf(){
    let horas = parseInt(prompt("introduce las horas"));
    let mins = parseInt(prompt("introduce las minuts"));
    let segons = parseInt(prompt("introduce las segundos"));

    let centimosMin= mins*5; 
    let centimosSegons = parseInt(segons/60)*5;
    let centimosHora= parseInt(horas*60)*5;
    
    let centimosTotales = centimosHora+ centimosMin + centimosSegons + 10;
    let resto = "";
    if(centimosTotales > 100){
        centimosTotales= parseInt(centimosTotales/100)  + " €"
        resto = centimosTotales%100 +" c";
    }



    console.log(`${centimosMin} Centimos min`);
    console.log(centimosSegons+ " Centimos segundo");
    console.log(centimosHora+ " Centimos hora");
    console.log("El total es: " + centimosTotales + " " + resto);
    console.clear;
}