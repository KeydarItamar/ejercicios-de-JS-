

//Ejercicio que muestra el tiempo que tarda una funcion en mostrar la potencia 
//con distintos metodos. 

function potencia(){
    numero1= prompt("Introduce un numero. ");
    numero2= prompt("introduce el segundo numero: ");
    console.time("timer1");
    console.log(Math.pow(numero1,numero2));
    console.log("Tiempo usando Math pow: ")
    console.timeLog("timer1");
    console.timeEnd;


    num1= prompt("Introduce un numero: ");
    num2= prompt("Introduce el segundo numero: ")
    let result= 1;
    console.time("timer2");
    for(let i= 1; i<=num2; i++ ){
        result= result*num1;
    }
    console.log(result);
    console.log("Tiempo usando ciclo For: ")
    console.timeLog("timer2");
    console.timeEnd;
}

function ordenNum(){
    let num1 = parseInt(prompt("Introduce un numero"));
    let num2 = parseInt(prompt("Introduce un numero"));
    let num3 = parseInt(prompt("Introduce un numero"));

    let lista= [num1, num2, num3];
    lista.sort();
    console.log("Los numero son: " + num1 + " " +num2+ " "+ num3);
    console.log("La media de los numeros es: " + (num1+num2+num3)/3);
    console.log("El numero medio es: " + lista[1]);
    console.log("El numero mayor es: " + lista[2]);
    console.log("El numero menor es: " + lista[0]);
    console.log
}

