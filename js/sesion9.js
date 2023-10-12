
//ejercicio donde pedimos una cantidad de dinero y el precio de un producto.
//devolver el cambio y la cantidad de billetes y monedas que hay. 
function devolucion(){
    let precio= parseFloat(prompt("introduce el precio del producto"));
    let dinero= parseFloat(prompt("introduce la cantidad de dinero"));


    //Pasamos los precios a float
    precio.toFixed(2);
    dinero.toFixed(2);

    
    let billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
    let cambio = parseFloat(dinero-precio); 
    let devolucion = new Array(billetes.length).fill(0);
    let i = 0;
    
    //mientras haya cambio miramos si es igual o mayor que el billete y si es asi, restamos ese billete al cambio. 
    //ademas crecentamos la posicion del billete para saber cuantos billetes de ese precio hay.
    while(cambio>0){
        if(cambio >= billetes[i]){
            devolucion[i]++;
            cambio -= billetes[i];
        }else{
             i++;
        }   
    }

    //Volvemos a poner el valor real del cambio para poder imprimirlo por consola
    console.log("El cambio total a devolver es: " + parseFloat(dinero-precio));
    
    
    //imprimo por pantalla el resultado. 
    for (n = 0 ; n < billetes.length ; n++){
        if (devolucion[n]!== 0){
            console.log("Hay " + devolucion [n] + " de " + billetes[n] + "€")
        }
    }
}