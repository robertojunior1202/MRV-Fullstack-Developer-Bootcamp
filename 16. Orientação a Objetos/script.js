/*
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos 
tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o 
parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 
500 reais. */


//Criando uma classe - Classe ContaBancaria e passando o parametros
class ContaBancaria {
    constructor (agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo; // sempre que um valor tiver um getter e sette, colocamos _ antes do nome
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor
    }
    sacar (valor){
        if(valor>this._saldo){
            return "Operação Negada - Saldo Insulficiente"
        }
        this._saldo = this._saldo-valor;
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor
        return this._saldo
    }
};

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo)
        this.tipo = "Corrente"
        this._cartaoCredito = cartaoCredito
    }
    get cartaoCredito (){
        return this._cartaoCredito
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo)
        this.tipo = "Poupança"
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo)
        this.tipo = "Universitaria"
    }
    sacar(valor){
        if(valor>500){
            return 'Operação Negada'
        }
        this._saldo = this._saldo-valor
    }
}


