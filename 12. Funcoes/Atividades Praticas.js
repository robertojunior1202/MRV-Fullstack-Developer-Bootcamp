//Atividade 01 - Alunos Aprovados
/* Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },

    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },

    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },

    {
        nome: 'Miguel',
        nota: 4,
        turma: '2C',
    }
]


function alunosAprovados (arr, media) {
    let aprovados = [];
    for (let i = 0; i < arr.length; i++){
        //Usando object destruction
        const {nota, nome} = arr[i]

            if(nota >= media){
            aprovados.push(nome);
        }

    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5));




//Atividade 02 - This
/* Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
Crie seus próprios objetos para esta atividade! */

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
}

const pessoa2 = {
    nome: 'Carla',
    idade: 30
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
}

console.log(calculaIdade.call(animal,7));
console.log(calculaIdade.apply(pessoa1,[5])) //apply usa colchetes