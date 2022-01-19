//Para printar algo no console eu devo utilizar o seguinte script
//console.log("Hello World") //Eu passo nos parenteses o arquivo que quero printar
//Abro o terminal, entro na pasta e procuro na pasta pelo arquivo .js que eu quero rodar
//Digito node aula2_console.js (o nome do script) para rodar 

function returneEvenValues(array){
    let evenNums = [];
    for (let i = 0; i < array.lenght; i++);
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }
        console.log(evenNums);
}

let array = [1,2,4,5,7,8];
returneEvenValues(array)
