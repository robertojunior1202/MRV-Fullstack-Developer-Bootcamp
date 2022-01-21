//ATIVIDADE PRÁTICA DO CURSO SINTAXE E OPERADORES
//PASSANDO VARIAVEIS
var num1 = 2
var num2 = 2
var text1

//SÃO IGUAIS
function saoIguais(){
    if(num1==num2){
        let text1 = ' são iguais.'
        console.log(text1)
    } else{
        let text1 = ' não são iguais.'
        console.log(text2)
    }
}
saoIguais()

//SOMANDO
var soma
function soma(){
    somatorio = num1+num2
}
soma()

//DEFININDO INTERVALOS
var interv
function intervalo (){
    if(somatorio<10 || somatorio<20){
    interv = ', que é menor que 10 e menor que 20.'
    } else if (somatorio>10 || somatorio>20){
        interv = ', que é maior que 10 e maior que 20.'
    } else if (somatorio>10||somatorio<20){
        interv = ', que é maior que 10 e menor que 20.'
    } else if (somatorio ==10){
        interv = ', que é igual a 10 e menor que 20.'
    } else if(somatorio ==20){
        interv =  ', que é igual a 20 e maior que 10.'
    }

}
intervalo()
var resultado = (`Os números ${n1}  e ${n2} ${'text1'} Sua soma é ${'somatorio'}${'interv'}`)
//alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
console.log(resultado)













