function tiempo(){
    let hora= parseInt(prompt("Dame una hora"));
    let minut= parseInt(prompt("Dame un minuto"));
    let segon= parseInt(prompt("Dame una segundo"));

    var time = new Date()
    time.setHours(hora);
    time.setMinutes(minut);
    time.setSeconds(segon+1);
    console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    console.clear;
}

function fechaVal(){
    let any= parseInt(prompt("Dame una año"));
    let mes= parseInt(prompt("Dame un mes"));
    let dias= parseInt(prompt("Dame una dia"));

    let valor = true;

    if(any < 1970){
        alert("Fecha del año no es valida");
        valor= false;
    }
    if(mes > 11 || mes < 0){
        alert("Fecha de mes invalida");
        valor= false;

    }
    if(dias > 31 || dias < 0){
        alert("Fecha del dia es invalida");
        valor= false;
    }

    if (valor){
        let fecha = new Date();
        fecha.setFullYear(any);
        fecha.setMonth(mes);
        fecha.setDate(dias);

        console.log("La fecha " + fecha.getFullYear() + "/" + fecha.getMonth() + "/" + fecha.getDate() + " es una fecha valida.");
    }
}

function fechaVal2(){
    let any= parseInt(prompt("Dame una año"));
    let mes= parseInt(prompt("Dame un mes"));
    let dias= parseInt(prompt("Dame una dia"));

    let fecha = new Date();
    fecha.setFullYear(any);
    fecha.setMonth(mes);
    fecha.setDate(dias);
    

    if (fecha.getFullYear() != any || fecha.getMonth() != mes || fecha.getDate() != dias){
        alert ("Fecha no valida");
    }else{
        console.log("La fecha " + fecha.getFullYear() + "/" + fecha.getMonth() + "/" + fecha.getDate() + " es una fecha valida.");    }

}
