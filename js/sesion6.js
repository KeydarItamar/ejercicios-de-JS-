function convertirFecha(){
    let dias = parseInt(prompt("Introduce una cantidad de dias: "));
    Math.abs(dias);

    let anyos = Math.floor(dias / 365);
    let reducto = dias % 365;
    let meses = Math.floor(reducto / 30);
    let diaFin = reducto % 30;

    console.clear();
    console.log("Con " + dias + " dias hay un total de: " + anyos + " años, " + meses + " meses, y " + diaFin + " dias en total.");
    
}

function temperatura(){
    //Peticiones por teclado
    let leter = prompt("Que quieres convertir C/F ?");
    let number = parseFloat(prompt("Introduce el numero"));

    //Calculo de transformar los datos
    let faren = (number * 9.0/5.0) + 32;
    let celsiu= (number - 32)/(9.0/5.0);
    
    //Aplicamos valor final a variable en funciona de la letra 
    let valueFin = leter === "C" ?  faren + "ºF" : celsiu + "ºC" ;

    console.log("Has introducido " + number +"º" + leter + " que son: " + valueFin);
}


function numBina(num){
    // let num = parseInt(prompt("Introduce un numero"));
    let cocient= num;
    let resto= "";
    let resultado= "";
    while(cocient > 0){
        resto = cocient%2;
        cocient = Math.floor(cocient/2);
        resultado= `${resto}${resultado}`;
    }
    return resultado;
}
function numOcta(num){
    // let num = parseInt(prompt("Introduce un numero"));
    let cocient= num;
    let resto= "";
    let resultado= "";
    while(cocient > 0){
        resto = cocient%8;
        cocient = Math.floor(cocient/8);
        resultado= resto + resultado;
    }
    return resultado;
}
function numHexal(num){

    //let num = parseInt(prompt("Introduce un numero"));
    let hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let cocient= num;
    let resto= "";
    let resultado= "";
    while(cocient > 0){
        resto = cocient%16;
        cocient = Math.floor(cocient/16);
        if (resto > 9){
            resto = hexArray[resto];
        }
        resultado= resto + resultado;
    }
    return resultado;
}


function canviBase(num, num2){
    let hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let cocient= num;
    let resto= "";
    let resultado= "";
    while(cocient > 0){
        resto = cocient%num2;
        cocient = Math.floor(cocient/num2);
        if (resto > 9){
            resto = hexArray[resto];
        }
        resultado= resto + resultado;
    }
    return resultado;
}

function numBase(){
    let num = parseInt(prompt("Introduce un numero para pasar a binario, octal y hexadecimal"));
    let bin = "";
    let octal= "";
    let hexal= "";
    bin = canviBase(num, 2);
    octal = canviBase(num,8);
    hexal = canviBase(num,16);

 console.log(`Para el numero: ${num}\nEl binario es: ${bin}.\nEl octal es: ${octal}\nEl Hexadecimal es: ${hexal}.`)

}

