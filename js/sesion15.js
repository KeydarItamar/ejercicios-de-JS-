window.addEventListener('DOMContentLoaded',function(){

let boton = document.querySelector(".boton1");

function busqueda(){
    let numR= parseInt(Math.random()*100+1);
    let userNum;
    let contador=0; 

    do{
        userNum= parseInt(prompt("Introduce un numero de 1 a 100: "));
        
        if(userNum == 0){
            console.log("--- GAME OVER ---  ");
            contador++;
            console.log("HAS PERDIDO CON " + contador + " INTENTOS");
            console.log("***********************************")
            return;
        } 

        if(userNum > numR){
            console.log(userNum + " Tu numero es mayor  ");
            contador++;
            console.log("llevas " + contador + " intentos  ");
            console.log("*********************************** ");
            // userNum= parseInt(prompt("Introduce un numero de 1 a 100: "));
        }


        if(userNum < numR){
            console.log(userNum + " Tu numero es menor  ");
            contador++;
            console.log("llevas " + contador + " intentos");
            console.log("*********************************** ")
            // userNum= parseInt(prompt("Introduce un numero de 1 a 100: "));

        } 
        if(userNum == numR){
            console.log("Enhorabuena has encontrado el numero!");
            console.log("El numero era el: " + numR);
            contador++;
            console.log("Te ha costado " + contador + " intentos");
            console.log("*********************************** ")
            // userNum= parseInt(prompt("Introduce un numero de 1 a 100: "));

        } 

 
    }while(userNum != numR);    
    }

boton.addEventListener('click', busqueda);

});

