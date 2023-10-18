document.addEventListener("DOMContentLoaded",function(){

    let boton = document.querySelector("#boton");


    function colorTd(tr, colorB){
        td=document.createElement("td");
        td.style.width="20px";
        td.style.height="20px";
        td.style.backgroundColor=colorB;
        tr.appendChild(td);
    }
    
    function creaFila(filatr, color, num , td){
        for (let x = 0; x < num ; x++) {
            colorTd(filatr,color);
            td.appendChild(filatr);
        }
    }


    //funcion para crear la piramide de colores.
    function rombo(){
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
            creaFila(filaTr,"white",nBlanc,tabla);
            creaFila(filaTr,"red",contadorRojo,tabla);
            creaFila(filaTr,"white",nBlanc,tabla);
            //Al final decrementamos la cantidad de iteracions que hacen las celdas blancas
            //Y aumentamos en uno otra vez las celdas rojas. Asi con las dos sumas crece exponencialmente.
            nBlanc--;
            contadorRojo++;
        }
        
        //finalmente metemos la tabla en el body del documento HTML
        document.body.appendChild(tabla);

        //Empezamos la parte invertida 

        contadorRojo -= 2; 
        nBlanc++;


        for (let n = 0; n < numfilas; n++) {
           //Ahora cada vuelta el contador rojo decrecera para dar forma al rombo
            nBlanc++;
            contadorRojo--;
            //en cada iteracion añadimos una fila a la piramide
            let filaTr = document.createElement("tr");
    
            //Aplicamos las funciones crear fila.
            creaFila(filaTr,"white",nBlanc,tabla);
            creaFila(filaTr,"red",contadorRojo,tabla);
            creaFila(filaTr,"white",nBlanc,tabla);
            contadorRojo--;

        }
        document.body.appendChild(tabla);

    }

    //Llamamos al boton y creamos el evento click para que se active la piramide al pulsar el boton. 
    boton.addEventListener("click", function(){
        rombo();
    });
    

});
