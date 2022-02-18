/*
Reduce
Some todos os números de um array
*/


function reduceSoma(arr){
    return arr.reduce(function(previ, current){
        return previ + current;
    })
}

const arr = [1,2]

console.log(reduceSoma(arr))

/*
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/

const list = [
    {
    name:'sabao em po',
    preco:30
    },
    {
        name:'cereal',
        preco:12
    },
    {
        name:'toalha',
        preco:30
    }
];

const saldoDisponivel = 100;
function calculaSaldo (saldoDisponivel, list){
    return list.reduce(function(prev, current){
        return prev - current.preco;
    },saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, list))