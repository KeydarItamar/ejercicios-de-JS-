


document.addEventListener('DOMContentLoaded', function(){

    let btonInicio = document.getElementById('inicioPartida');

    btonInicio.addEventListener('click', function(){
        iniciarPartida();
    });
});


//Funcion para iniciar partida donde pedimos filas y columnas y creamos una tabla con esas medidas.     
function iniciarPartida(){
    columnas = parseInt(prompt("Introduce el numero de columnas: "))
    filas = parseInt(prompt("Introduce el numero de filas: ")) 

    //si los valores son mayores a 30 los dejamos en 30
    columnas = columnas > 30 ? 30 : columnas;
    filas = filas > 30 ? 30 : filas;
    columnas = columnas < 10 ? 10 : columnas;
    filas = filas < 10 ? 10 : filas;

    casillasTotales = columnas * filas;
    porcentajeMinas = parseInt(casillasTotales * 0.17);
    console.log(porcentajeMinas);
    let taulell = document.getElementById("taulell");
    let tabla="<table>";
    
    //Creamos la tabla
    for (let i = 0; i <= filas; i++) {
        tabla +='<tr>';
        for(let x = 0 ; x<= columnas; x++){
            tabla+= '<td data-numMinas= "0" data-abierta= "false" data-mina= "false" id="'+ (i +'_'+ x) +'" class = "casilla" onclick="obreCasilla(\''+ i + '_'+ x + '\');"><img src="/images/fons20px.jpg" alt="fons20px"></td>';
        }
        tabla+= '</tr>';
    }  
       tabla+= '</table>';
       taulell.innerHTML = tabla;

       setMinas();
       calculaAdjacents(); 
    }

    function setMinas(){
        for (let i = 0 ; i < porcentajeMinas; i++){
            let filasRandom = Math.floor(Math.random()* filas);
            let columnasRandom = Math.floor(Math.random()* columnas);
            let casillaRan = filasRandom+ "_" + columnasRandom;
            let casilla = document.getElementById(casillaRan);
            casilla.dataset.mina = true;
        }
    }

    //funcion para girar las casillas y mostrar las minas o el numero de minas cercanas.
    function obreCasilla(num) {
        let derrota = false;
        let casilla = document.getElementById(num);
        let casillasMina = document.querySelectorAll('.casilla');
    
        if (casilla.dataset.mina == "false") {
                abrirCeros(num);
        }else{
            casillasMina.forEach(function(casilla){
                casilla.onclick = null;
                if (casilla.dataset.mina == "true") {
                    imagen = casilla.querySelector('img');
                    imagen.src = "/images/mina20px.jpg";
                  }
            });
            alert("¡Has perdido!")
        }
    
    }

    function abrirCeros(idCasilla){

        let casillaActual= document.getElementById(idCasilla);
        if(!casillaActual || casillaActual.dataset.abierta == "true"){
            return;
        }
        casillaActual.dataset.abierta= "true";
        let coordenadas = idCasilla.split('_');
        let x = parseInt(coordenadas[0]);
        let y = parseInt(coordenadas[1]);
        let numMinas = cuentaMinasAdyacentes(x,y);
        casillaActual.textContent = numMinas;
        if(casillaActual.textContent == '0'){
        for (let i = -1; i <=1; i++) {
            for (let j = -1; j <= 1; j++) {
                let fila = x + i;
                let columna = y + j;
                let casilla = document.getElementById(fila + '_' + columna);
                // Verificar si la casilla cercana existe y aún no ha sido abierta
                if (casilla) {
                    numMinas = cuentaMinasAdyacentes(fila,columna);
                    casilla.textContent = numMinas;
                    if(casilla.textContent == '0'){
                        abrirCeros(fila+'_'+columna);
                    } 
                
                }
            }
        }
    }
    }

    //funcion para saber si una casilla es mina
    function esMina(x, y) {
    let casilla = document.getElementById(x + '_' + y);
    return casilla && casilla.dataset.mina =="true";
    }

    //funcion para retonar el numero de casillas adyacentes
    function cuentaMinasAdyacentes(x, y) {
        let contador = 0;
        // Verificar las 8 posiciones adyacentes
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i == 0 && j == 0){
                     continue; 
                }  
                if (esMina(x+i, y+j)) {
                    contador++;
                }
            }
        }
        return contador;
    }

    //funcion para poner el numero de minas en el dataset numMinas
    function setMinesAdjacents(x, y, nMinesAdjacents) {
        let casilla = document.getElementById(x + '_' + y);
        casilla.dataset.numMinas =  nMinesAdjacents;
    }

    //funcion para poner el numero de minas adyacentes en todo el tablero 
    function calculaAdjacents() {
        for (let i = 0; i <= filas; i++) {
            for (let j = 0; j <= columnas; j++) {
                let numMines = cuentaMinasAdyacentes(i, j);
                setMinesAdjacents(i, j, numMines);
            }
        }
    }

   


