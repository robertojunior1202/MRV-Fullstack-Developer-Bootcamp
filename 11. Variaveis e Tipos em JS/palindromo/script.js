/*VERIFICICADOR DE PALINDROMO
Palindromo é uma palavra ou frase que ao se ler de frente para o final ou do final para traz é a mesma 
coisa */

//Solução 1
/*let variavel = "ovo"

function verificaPalindromo (string){
    if(!string) return "String Inválida";

    //pega a string e divide p/ letra por letra, reverte todas essas letras
    // e o join junta todas elas
    //Se for igual a string inicial é um palindromo
    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo(variavel))
*/

//Solução 2
//Esse metodo verifica um caracter do comeco e um do fim, e vai vindo comparando cada um com o seu 
//correspondente até percorrer toda a palavra 
let variavel = "ovo"
function verificaPalindromo2 (string){
    if(!string) return "String Inválida"

    for (let i=0; i<string.length/2; i++){
        if(string[i]!==string[string.length-1-i]){
            return false;
        }

    }
    return true;
}
console.log(verificaPalindromo2(variavel))