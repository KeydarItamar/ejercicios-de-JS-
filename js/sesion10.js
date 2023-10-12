//Ejercicio donde pides dos numeros y muestras por consola una tabla con ese numero
//de filas y columnas. 
function filasColumn() {
    let filas = parseInt(prompt("Introduce el número de filas: "));
    let columnas = parseInt(prompt("Introduce el número de columnas: "));

    // Crea la tabla
    let tabla = document.createElement("table");

    for (let i = 0; i < filas; i++) {
        // Crea una nueva fila
        let fila = document.createElement("tr");

        // Itera a través del número de columnas
        for (let j = 0; j < columnas; j++) {
            // Crea una nueva celda
            let celda = document.createElement("td");
            
            // Agrega texto a la celda (puedes cambiar esto según tus necesidades)
            let texto = document.createTextNode(` ${i + 1}, ${j + 1}`);
            celda.appendChild(texto);

            // Agrega la celda a la fila
            fila.appendChild(celda);
        }

        // Agrega la fila a la tabla
        tabla.appendChild(fila);
    }

    // Agrega la tabla al cuerpo del documento HTML (o cualquier otro elemento que desees)
    document.body.appendChild(tabla);
}

// Llama a la función para probarla

function filasColumn2(){
    let filas = parseInt(prompt("Introduce el número de filas: "));
    let columnas = parseInt(prompt("Introduce el número de columnas: "));

    // Crea la tabla
    let tabla = document.createElement("table");

    for (let i = 0; i < filas; i++) {
        // Crea una nueva fila
        let fila = document.createElement("tr");

        // Itera a través del número de columnas
        for (let j = 0; j < columnas; j++) {
            // Crea una nueva celda
            let celda = document.createElement("td");

            // Agrega texto a la celda (puedes cambiar esto según tus necesidades)
            let texto = document.createTextNode(`${(j +1) * (i +1)}`);
            celda.appendChild(texto);

            // Agrega la celda a la fila
            fila.appendChild(celda);
        }

        // Agrega la fila a la tabla
        tabla.appendChild(fila);
    }

    // Agrega la tabla al cuerpo del documento HTML (o cualquier otro elemento que desees)
    document.body.appendChild(tabla);
}

