
//Itamar Keydar Antoni daw2B
//Ejercicio donde pedimos los valores de los colores RGB y los pasamos a su valor en Hexadecimal. 


//Pedimos valores
function coloresRgb(){ 
    let r = parseInt(prompt("Introduce el valor de r: "))
    let g = parseInt(prompt("Introduce el valor de g: "))
    let b = parseInt(prompt("Introduce el valor de b: "))

  //comprobamos si son validos  
  if(r > 255 || g > 255 || b > 255 ){
    alert("Has introducido un valor incorrecto.")   
  }

  //Pasamos a hexadecimal
  let hexaR = r.toString(16).toUpperCase();
  let hexaG = g.toString(16).toUpperCase();
  let hexaB = b.toString(16).toUpperCase();

//concatenamos con un "0" si su length es igual a 1.
  hexaB = dosDigitHex(hexaB);
  hexaG = dosDigitHex(hexaG);
  hexaR = dosDigitHex(hexaR);

//pasamos a consola. 
  console.log( "#" +hexaR+ hexaB + hexaG)

}

//funcion que concatena un "0" si el numero es de una sola cifra.
function dosDigitHex(hexa){
    if (hexa.length == 1){
        hexa = "0" +hexa; 
    }
    return hexa;
}