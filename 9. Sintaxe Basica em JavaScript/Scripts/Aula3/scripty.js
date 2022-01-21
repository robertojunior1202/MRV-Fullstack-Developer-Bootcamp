//if, else if e else
var jogador1 = 1
var jogador2 = 0
var placar;
/*
if (jogador1>0) {
    console.log('Jogador 1 marcou ponto')
} else if (jogador2>0){
    console.log('O Jogador2 marcou ponto')
} else {
    console.log("Ninguem marcou ponto")
}
*/
//Ninho de if (Aninhamento)
/*
if(jogador1 != -1 && jogador2!= -1){
    if (jogador1>0) {
        console.log('Jogador 1 marcou ponto')
    } else if (jogador2>0){
        console.log('O Jogador2 marcou ponto')
    } else {
        console.log("Ninguem marcou ponto")
    }
}

*/

//If ternário; em apenas uma linha
/*
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos"):
 console.log("Os jogadores são invalidos")

if (jogador1>0) {
    console.log('Jogador 1 marcou ponto')
} else if (jogador2>0){
    console.log('O Jogador2 marcou ponto')
} else {
    console.log("Ninguem marcou ponto")
}

//Switch case
switch (placar) {
    case placar = jogador2 > jogador1:
        console.log("O Jogador 1 venceu a partida!!!")
        break;
    case placar = jogador1 > jogador2:
        console.log("O Jogador 2 venceu a partida!!!")
        break
    default:
        console.log ("O Jogo terminou empatado!!!")
        break;
}
*/

//LAÇOS DE REPETIÇÃO
let array = [0,5,6,'texto'];
let object = {valor1:'texto', valor2: 2, valor3: true}
//for
for (let indice=0; indice < array.length; indice++){
    console.log(indice)
}

//for/in
//printa os indices do array
for (let i in array) {
    console.log(i)

}

//for/of
// printa as variaveis de cada indice do array
//o for of não le em objects, pois printa errado
for (i of array){
    console.log(i)
}

//While
var a =0
while (a<10){
    a++;
    console.log(a)
}

//do/while
var a = 0;
do{
    a++;
    console.log(a)

}while(a<10)
