/*Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que 
são administradores. */

function getAdmins (map) {
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;

}

//Cria o Map
const usuários = new Map ()
//Add os dados no Map (chave, valor)
usuários.set('Luiz', 'Admin');
usuários.set('Stephany', 'Admin');
usuários.set('Jorge', 'User');
usuários.set('Natália','Admin');

//Chama a function e passa a lista de usuários
console.log(getAdmins(usuários))




/*Atividade 2: Sets
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos. */

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set (arr);
    //return [mySet] // assim o algoritmo me retorna um um Set (coleção de chave)
    return [... mySet] // ao add os ... (spread), os argumentos do Set são tranformados em array
}

console.log(valoresUnicos(meuArray));