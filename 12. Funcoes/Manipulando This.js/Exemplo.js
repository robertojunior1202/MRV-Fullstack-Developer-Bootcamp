            //MANIPULANDO O VALOR DE THIS
//CALL//
const pessoa = {
    nome: "Roberto"
};

const animal = {
    nome: "Pink"
};

// Para eu usar o this assim, eu devo definir com o método Call
function manipulandoNomes(){
    console.log(this.nome);
};
//Método Call 
manipulandoNomes.call(animal)

//O Mesmo ocorre quando eu tenho que declarar parametros em uma function
const myObj = {
    num1: 2,
    num2: 4
}

function soma(a,b){
    console.log(this.num1 + this.num2  + a + b)
}

soma.call(myObj, 1,5)

//APPLY//
manipulandoNomes.apply(pessoa) // semelhante
soma.apply(myObj,[1,5]) // tem que passar os parametros entre chaves

//BIND// 
//O BIND clona a estrutura de uma function 
const retornaNomes = function(){
    return this.nome
};

let bruno = retornaNomes.bind({nome: ' Bruno'})
bruno();

 



