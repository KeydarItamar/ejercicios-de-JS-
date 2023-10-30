
//Funcion para que suenen los audios al pulsar las teclas
function playSound(e){
    //Cogemos los audios y las teclas a traves del valor de Keycode, si la tecla pulsada tiene el mismo valor.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(e.keyCode);
    
    //si al pulsar una tecla no un audio relacionado hacemo un return vacio para 
    //que no llene la consola de error.
    if(!audio) return;
    //ponemos el tiempo del audio a 0 para poder pulsar varias veces la tecla y que suene siempre.
    audio.currentTime = 0;
    audio.play();     //añadimos al css el tag playing para darle color al pulsar la tecla. 
    key.classList.add('playing');
}

//funcion para quitar el tag de colores.
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


//Por cada div, cuando su transicion termine la removemos. 
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//Aplicamos la funcion de que suenen las teclas al evento keydown
window.addEventListener('keydown', playSound);
