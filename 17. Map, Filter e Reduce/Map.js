/*Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro 
this de um objeto criado por você, e depois sem ele.
Filter
Filtre e retorne todos os números pares de um array.
Reduce
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

//MAP
//com this
const maca = {
    value:2,
}

const laranja = {
    value:3,
}

function mapComThis (arr, thisArg){
    return arr.map(function(item){
        return item * this.value;

    }, thisArg);
}

const numeros = [1,2,5]
console.log(mapComThis("Quando this é maca",numeros, maca))
console.log(mapComThis("Quando this é laranja",numeros, laranja))

//sem this
function mapSemThis(arr){
   return arr.map(function(item){
        return item * 2
    })
}

const numeros2 = [2,4,5,6]

console.log(mapSemThis(numeros2))