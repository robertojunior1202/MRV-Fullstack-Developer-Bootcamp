function testeNumeros () {
    let n1 = Number(prompt("Insira o Primeiro Valor: "))
    let n2 = Number(prompt("Insira o segundo Valor"))
    let resultado
    var soma = n1+n2

    function solucao (){
        if(n1==n2){
            if(soma<10){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`)
                novamente()
            } else if(soma>20){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`)
                novamente()

            } else if(soma>10 && soma<20){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`)
                novamente()

            }else if(soma ==10){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é igual a 10.`)
                novamente()

            }else if (soma==20){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é igual a 20.`)
                novamente()
            }

        }else {
            if(soma<10){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`)
                novamente()
            } else if(soma>20){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`)
                novamente()

            } else if(soma>10 && soma<20){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`)
                novamente()

            }else if(soma ==10){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é igual a 10.`)
                novamente()

            }else if (soma==20){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é igual a 20.`)
                novamente()
            }

        }
    }

    function novamente (){
        let novamente = Number(prompt("Deseja testar novamente? \n 1. Sim \n 2.Não"))
        if(novamente == 1){
            testeNumeros ()
        } else if(novamente == 2){
            alert(`Obrigado. Até mais!!!`)
        }else{
            alert(`Parâmetro inválido. Tente novamente!!!`)
            novamente()
        }
    }
    solucao()

}testeNumeros ()
