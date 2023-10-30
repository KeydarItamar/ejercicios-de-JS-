var resultado = document.getElementById("resultado");
var operacion = "";
var operador= "";
var  operante1;

function dato(num) {
   operacion += num;
   if (operacion.length < 10)
   resultado.textContent = operacion;
}

function clearBoton(){
    operacion = "";
    resultado.textContent = operacion;    
}

function sumarNum(){
    operador= "+";
     operante1 = parseInt(operacion);
    clearBoton();
}
function restarNum(){
    operador= "-";
     operante1 = operacion;
    clearBoton();
}
function multiNum(){
    operador= "*";
    operante1 = operacion;
    clearBoton();
}
function divNum(){
    operador= "/";
    operante1 = operacion;
    clearBoton();
}

function igualA(){
    let operante2 = parseInt(operacion);
    let igual;
    if(operador == "+"){
        igual= parseInt(operante1) + parseInt(operante2);
    }else if(operador == "-"){  
        igual = operante1 - operacion;
    }else if(operador == "*"){
        igual= operante1 * operacion;
    }else if(operante == "/"){
        igual = operante1 / operacion;
    }
    resultado.textContent = igual;
    
}
