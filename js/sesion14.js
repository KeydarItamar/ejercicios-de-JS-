function contingut(){
    let carac = prompt("Introduce un caracter"); 
    let texto = prompt("Introduce un texto para comprobar si aparece de 2 a 4 veces el caracter");

    //Si da mas de un caracter cogemos solo el primero. 
    carac = carac.length > 1 ? carac.charAt(0) : carac;

    let contador= 0; 

    for (let i = 0 ; i < texto.length ; i++){
        if (carac == texto.charAt(i)){
            contador++;
        }
    }
    if (contador < 2 || contador > 4 ){
        console.log("no esta contenido entre 2 o 4 veces.")
        console.log(contador)
    }else{
        console.log("El caracter aparece entre 2 y 4 veces");
        console.log(contador)

    }

}

function eliminaChar(){
    let palabra = prompt("Introduce un texto");
    let num= parseInt(prompt("Introduce un numero para retirar la letra en esa posicion: "));
    palabra= palabra.substring(0,num) + palabra.substring((num+1));
    console.log(palabra);
}

function datosTexto(){
    let texto = prompt("Introduce un texto");


    let text = texto.split(" ");

    let conta = 0;
    let conte = 0;
    let conti = 0;
    let conto= 0;
    let contu= 0;

    
    for (let i = 0 ; i< texto.length ; i++){
        if ( texto.charAt(i) === 'a' || texto.charAt(i) ==='A' || texto.charAt(i) ==='á' ||texto.charAt(i) ==='à'){
            conta++;
        }
        if ( texto.charAt(i) === 'e' || texto.charAt(i) ==='E' || texto.charAt(i) ==='é' ||texto.charAt(i) ==='è'){
            conte++;
        }
        if ( texto.charAt(i) === 'i' || texto.charAt(i) ==='I' || texto.charAt(i) ==='í' ||texto.charAt(i) ==='ì'){
            conti++;
        }
        if ( texto.charAt(i) === 'o' || texto.charAt(i) ==='O' || texto.charAt(i) ==='ó' ||texto.charAt(i) ==='ò'){
            conto++;
        }
        if ( texto.charAt(i) === 'u' || texto.charAt(i) ==='U' || texto.charAt(i) ==='ú' ||texto.charAt(i) ==='ù'){
            contu++;
        }
    }

    let vocalContent = "El texto contiene: " + conta + ": A, " + conte + ": E, " + conti + ": I, " + conto + ": O, " + contu + ": U ";

    texto = texto.toLocaleUpperCase();
    document.write(texto + "<br/>");
    texto = texto.toLocaleLowerCase();
    document.write(texto+ "<br/>");
    document.write("El texto tiene una longitud de: " + texto.length+ "<br/>");
    document.write( "El texto tiene " + text.length  + " palabras."+ "<br/>");
    document.write(vocalContent+ "<br/>");

    contadorLeng = 0;
    for (let i = 0 ; i <texto.length ; i++){
        document.write(texto.substring(contadorLeng , texto.length) + "<br/>");
        contadorLeng++;
    }
}
    function nitBona(){
        let tiempo = prompt("Introduce la hora");

        let listTemps= tiempo.split(":");

        let mins = ((23 - parseInt(listTemps[0]))*60) + parseInt(listTemps[1]);

        tiempo = 1440 - mins;
        if (tiempo > 0){
        document.write("EL tiempo que falta para nitbona es: " + tiempo + " minuts")
        }else{
            document.write("Feliz nit bona!"+ "<br/>");
        }
    }

