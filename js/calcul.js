var resultado = document.getElementById("resultado");
var operacion = "";
var operador= "";

function dato(num) {
    operacion += num;
    resultado.textContent = operacion;
}

