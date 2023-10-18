
function separador(){
let arxiu = prompt("Introduce el nombre del archivo");
let array = arxiu.split(".");
console.log(array[array.length-1]);
}

function letrasAB(){
    let texto = prompt("Introduce el texto a mirar las letras A y B");
    let contA= 0;
    let contB= 0;

    for (let i = 0 ; i <= texto.length ; i++){
        if(texto.charAt(i)=== 'a' || texto.charAt(i)=== 'A'){
            contA++;
        }
        if(texto.charAt(i)=== 'b' || texto.charAt(i)=== 'B')
            contB++;
    }

    if(contA == contB){
        console.log("Hay la misma cantidad de A y B");
    }else{
        console.log("No hay la misma cantidad de A y B");
    }

    console.log("Hay " + contA + " letras a en el texto.")
    console.log("Hay " + contB + " letras b en el texto.")
}

function cadenasLen(){
    
    let cade1 = prompt("introduce una cadena"); 
    let cade2 = prompt("introduce una cadena"); 

    if (cade1.length === cade2.length){
        console.log("Tiene la misma longitud");
    }else{
        console.log("no tienen la misma longitud");
    }

}