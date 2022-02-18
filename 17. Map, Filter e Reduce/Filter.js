//Filtro de Pares
const numeros = [1,2,3,4,5,6,7,8,9,10]
function numPares (arr){
    return arr.filter(callbackPar)
}

function numImpares (arr){
    return arr.filter(callbackImpar)
}

function callbackPar(item){
    return item%2 ===0;
}

function callbackImpar(item){
    return item%2 !==0;
}

console.log(numPares(numeros))
console.log(numImpares(numeros))