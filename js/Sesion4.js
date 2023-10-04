function numero100(){
    let num1 = prompt("Introduce un numero de 0 a 100");
    let num2 = prompt("Introduce un numero de 0 a 100");
    let a = num1 - 100; 
    let b = num2 - 100;
    console.log("El numero que esta mas cerca de 100 es: ")
    
    console.log(  Math.abs(a) <  Math.abs(b)? num1: num2);
    console.clear;
}