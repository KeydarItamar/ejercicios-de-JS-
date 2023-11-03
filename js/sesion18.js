document.addEventListener('DOMContentLoaded', function(){


let boton = document.querySelector(".boton1");
let boton2 = document.querySelector(".boton2");


function addZeroPadding(code, max){
    while(code.length  < max){
        code= "0" + code; 
    }
    return code;
}

function checkCode(code){
    let resultado= 0; 
    let parInPar= 1; 
    let control  = 0; 
    for(let i= code.length-2 ; i >= 0 ; i--){
        if(parInPar%2 == 0){
            resultado += code.charAt(i)*1;
        }else{
            resultado +=code.charAt(i)*3;
        }
        parInPar++;
    }

    for (let x = resultado ; x%10 !== 0 ; x++){
        control++;
    }

    if (control== code.charAt(code.length-1)){
        console.log("True");
    }else{
        console.log("False");
    }

}



boton.addEventListener('click', function(){

    let code = prompt("introduce un numero");
    if(code < 8){
        code = addZeroPadding(code,8);
    }
    if(code > 8 && code < 13){
        code = addZeroPadding(code,13);
    }
    console.log(code);
    checkCode(code);
});

});