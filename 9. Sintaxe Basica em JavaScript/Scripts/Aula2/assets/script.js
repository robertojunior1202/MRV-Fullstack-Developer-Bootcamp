//VETORES E ARRAYS
let array = ['string', 1,5, true,['array1',2],['array2']]
console.log(array)
//PRINTANDO O ARRAY
/*
console.log(array[0])
console.log(array[2])
console.log(array[4])
console.log(array[4][[1]])
console.log(array[4][[0]]) // imprime uma variavel que esta dentro de um array que por sua vez esta dentro de outro array [][[]]


//MANIPULANDO ARRAYS
//o forEach repete a funcao passada para todos os elementos que estao dentro do array)
array.forEach(function(item, index){console.log(item, index)})

//o push add o item que eu passei para a frente do ultimo index
array.push('teste_push')
console.log(array)

//o pop remove o ultimo item do array
array.pop()
console.log(array)

//o shift remove o primeiri item do array
array.shift()
console.log(array)

//o unshift add um item no inicio do array
array.unshift('novo_item')
console.log(array)

//o indexOf retorna o indice dentro de um array
console.log(array.indexOf(1))

//o splice remove ou subtitui um item pelo indice.
//Neste caso ele pegou do index 0 a 3 e deletou tudo
array.splice(0,3)
console.log(array)

//o slice retorna uma parte de um array ja existente
//aqui ele retorna os index que eu passei, de 0 a 3
array.slice(0,3)
console.log(array)
*/

//OBJETOS
let object = {
    string:'string',
    number:1,
    boolean:true,
    array:['array',2,4,5],
    objectInterno:{string:'objectInterno',array:['arrayInterno', 5, 10]}
}
//console.log(object)
//MANIPULANDO E ACESSANDO INFORMAÇÕES DE UM OBJETO
console.log(object.array) //vai me retornar apenas os arrays
console.log(object.number) //vai me retornar apenas os numbers
// e assim por diante, é só eu digitar o object. e ver as opcoes disponiveis

//DESESTRUTURANDO UM OBJETO
var string = object.string;
console.log(string)

var number = object.number;
console.log(number);

var arrayInterno = object.array;
console.log(arrayInterno)

//OU PODEMOS DESESTRUTURAR USANDO CHAVES
var {string, number,boolean, array} = object;
console.log({string, number,boolean, array});



