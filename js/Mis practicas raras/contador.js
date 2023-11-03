document.addEventListener('DOMContentLoaded',function(){

let contador = 0;    
const value = document.getElementById('value');
let btons = document.querySelectorAll(".btn");

let variable = "alex";
console.log(variable);
variable="ita";
console.log(variable);

//por cada bton aplicaremos una funcion de callback
btons.forEach(function(btn){
    //cada vez que hagamos click en algun bton llamaremos a sus datos Classlist, donde nos da el nombre de su clase.
    btn.addEventListener("click", function(e){
        const action = e.currentTarget.classList;
        console.log(action);
        //comprobamos la clase que tiene y aplicamos efecto en variable contador.
        if(action.contains('decrease')){
            contador--;
        }else if(action.contains('increase')){
            contador++;
        }else{
            contador = 0; 
        }
        if (contador > 0){
            value.style.color= 'green';
        }
        if (contador < 0){
            value.style.color= 'red';
        }
        if (contador == 0){
            value.style.color= 'white';
        }
        //Modificamos el valor de texto por pantalla al valor del contador. 
        value.textContent = contador;

    });
});
});