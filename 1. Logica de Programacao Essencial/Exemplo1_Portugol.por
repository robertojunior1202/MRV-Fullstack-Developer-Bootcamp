programa {
	funcao inicio() {
		
		//real = float
		//inteiro = int
		real nota1, nota2, nota3, nota4, media, total // indica que essas variaveis vão ser do tipo real
		//caracter = recebe apenas 1 caracter/letra
		//cadeia = cadeia de caracteres/string
		cadeia aluno //indica que a variavel vai ser do tipo cadeia
		
		escreva ("Digite o nome do aluno: ") //print do texto informado
		
		leia(aluno) //semalhante ao input do python
		//escreva ("O nome do aluno é: "+aluno)
		escreva("DIgite a nota1: ")
		leia(nota1)
		
		escreva("DIgite a nota2: ")
		leia(nota2)
		
		escreva("DIgite a nota3: ")
		leia(nota3)
		
		escreva("DIgite a nota4: ")
		leia(nota4)
	
		media = (nota1+nota2+nota3+nota4)/4
		total = (nota1+nota2+nota3+nota4)
		
		escreva("O aluno " + aluno + " obteve a média = "+media)
		
		escreva("A soma das notas do aluno "+aluno +" é de: "+total)
		
	}
}
