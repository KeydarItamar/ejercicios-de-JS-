document.addEventListener("DOMContentLoaded", function(){
    console.log("hola");
    var formulario = document.getElementById("formulario");
    var resultado = document.querySelector(".resultado");

    resultado.style.display = "none";

    document.addEventListener("submit", function(){
        var apellidos = document.querySelector("#apellidos").value;
        var nombre = document.querySelector("#nombre").value;
        var edad = document.querySelector("#edad").value;

        resultado.style.display = "block";

        var datos = [nombre, apellidos, edad];

        for(var dato in datos){
        var parrafo = document.createElement("p");
        parrafo.append(datos[dato]);
        resultado.append(parrafo);
        }
    })

});