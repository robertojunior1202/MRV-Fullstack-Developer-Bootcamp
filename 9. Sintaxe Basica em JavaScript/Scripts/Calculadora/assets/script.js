//Esta função serve para printar na tela (prompt) as opções de operações disponíveis
function calculadora (){
    //Deve-se passa o Number p/ converter a entrada em numero, pois o prompt imputa string
    const operacao = Number(prompt('Escolha uma operação>\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)'));
    //verifica se é numérico e se é valido
    if(!operacao || operacao>=7){
        alert("Erro - Operação Inválida")
        calculadora()
    } else{
        let n1 = Number(prompt("Insira o Primeiro Valor: "))
        let n2 = Number(prompt("Insira o segundo Valor"))
        let resultado

        if (!n1 || !n2) {
            alert("Erro - Parâmetros Inválidos!!!")
            calculadora()
        } else {
            function soma () {
                resultado = n1+n2
                //o alert printa a concatenação abaixo na tela
                alert(`${n1} + ${n2} = ${resultado}`)
                novaoperacao()
            }
    
            function subtracao () {
                resultado = n1-n2
                //o alert printa a concatenação abaixo na tela
                alert(`${n1} - ${n2} = ${resultado}`)
                novaoperacao()
            }
    
            function multiplicacao () {
                resultado = n1*n2
                //o alert printa a concatenação abaixo na tela
                alert(`${n1} x ${n2} = ${resultado}`)
                novaoperacao()
            }
    
            function divisao () {
                resultado = n1/n2
                //o alert printa a concatenação abaixo na tela
                alert(`${n1} / ${n2} = ${resultado}`)
                novaoperacao()
            }
            function divisaointeira () {
                resultado = n1%n2
                //o alert printa a concatenação abaixo na tela
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaoperacao()
            }
    
            function potenciacao () {
                resultado = n1**n2
                //o alert printa a concatenação abaixo na tela
                alert(`${n1} ^ ${n2} = ${resultado}`)
                novaoperacao()
            }
    
            function novaoperacao () {
                var a = Number(prompt("Você deseja realizar uma nova operação? \n 1 - Sim\n 2 - Não"))
                if(a ==1){
                    calculadora()
                } else if (a ==2){
                    alert(`Obrigado. Até mais!!!`)
                } else{
                    novaoperacao()
                }
            }

        }

        

        //Verificação da operacão selecionada
        if (operacao ==1){
            soma()
        } else if (operacao ==2) {
            subtracao()
        } else if (operacao ==3) {
            multiplicacao()
        } else if (operacao ==4) {
            divisao()
        } else if (operacao ==5) {
            divisaointeira()
        } else if (operacao ==6) {
            potenciacao()
        } else {
            prompt("Você passou um parâmetro inválido")
        }

        }
    
}
calculadora()