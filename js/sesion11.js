//Ejecicio donde hay que hacer una piramide de cuadrados rojos con base igual al numero dado por usuario.

//Itamar Keydar (Me ha costado horrores pero lo he sacado sin ayuda de chatgpt!!) 

//Funcion que crea una etiqueta "td", le da atributos CSS y la inserta dentro de una etique "tr"

function colorTd(tr, colorB){
    td=document.createElement("td");
    td.style.width="20px";
    td.style.height="20px";
    td.style.backgroundColor=colorB;
    tr.appendChild(td);
}

//funcion para crear la piramide de colores.
function piramide(){
    //Pedimos los numeros
    let columnas = parseInt(prompt("Introduce el numero de bloques de la ultima fila: "))
    //Si base es par le sumamos 1 para que salga una base inpar.
    columnas= columnas % 2 == 0 ? columnas + 1 : columnas;

    //Creamos la tabla y guardamos en una variable el numero de filas que tendra.
    let tabla = document.createElement("table");
    let numfilas = parseInt(columnas/2+1); 

    //Contadores auxiliares para aumentar las celdas rojas y decrementar las blancas
    let nBlanc= (columnas-1)/2;
    let contadorRojo= 0;

    //Ciclo for que iterara el numero de filas.
    for (let n = 0; n < numfilas; n++) {
        // cada vuelta aumentara el contador rojo, creado la forma de piramide.
        contadorRojo++;
        //en cada iteracion añadimos una fila a la piramide
        let filaTr = document.createElement("tr");

        //Primer ciclo for para las celdas blancas, se crean las td con la funcion "colorTd" y se añaden a la tabla. 
        for (let x = 0; x < nBlanc ; x++) {
            colorTd(filaTr,"white");
            tabla.appendChild(filaTr);
            
        }
        
        for (let x = 0; x <contadorRojo; x++) {
            colorTd(filaTr,"red");
            tabla.appendChild(filaTr);
            
        }
        for (let x = 0; x < nBlanc ; x++) {
            colorTd(filaTr,"white");
            tabla.appendChild(filaTr);
        }

        //Al final decrementamos la cantidad de iteracions que hacen las celdas blancas
        //Y aumentamos en uno otra vez las celdas rojas. Asi con las dos sumas crece exponencialmente.
        nBlanc--;
        contadorRojo++;
    }
       
    
    //finalmente metemos la tabla en el body del documento HTML
    document.body.appendChild(tabla);
    
}