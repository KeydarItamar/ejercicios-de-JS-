document.addEventListener('DOMContentLoaded',function(){

let btnNumInvert = document.getElementById('numInvertit');

function vueltaNum(num){
    let stringNum = "";
    for (let i = num.length ; i < 0 ; i--){
        stringNum += ""+ num[i];
    }        
    return parseInt(stringNum);
}
let numero = prompt()
btnNumInvert.addEventListener('click', function(){

    vueltaNum()

});













});