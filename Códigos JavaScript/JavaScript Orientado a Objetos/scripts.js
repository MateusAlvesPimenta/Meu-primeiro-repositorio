class contaBancaria{
    constructor(agencia,numero,tipo,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
    set saldo(valor){
        this._saldo = valor;
    }
    get saldo(){
        return this._saldo;
    }
    sacar(valor) {
        if(this._saldo < valor){
            return "Este valor ultrapassa seu valor em conta\n"+"Valor em conta: R$"+ this._saldo;
        }
        else{
        this._saldo=this._saldo - valor;
        return "saldo restante: R$"+this._saldo;
        }
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return "seu novo saldo é de: R$"+this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this._saldo = 0;
        this.tipo = "Corrente";
    }
    get cartaoCredito(){
    return this._cartaoCredito;
    }
    set cartaoCredito(credito){
        this.cartaoCredito=credito;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo="Poupança";
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Universitaria";
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(valor) {
        if(valor>=500){
            return "o saque maximo em contas universitarias é de R$499,99";
        }
        else if(this._saldo < valor){
            return "Este valor ultrapassa seu valor em conta\n"+"Valor em conta: R$"+ this._saldo;
        }
        else{
        this._saldo=this._saldo-valor;
        return "saldo restante: R$"+this._saldo;
        }
    }
}
const novaContaCorrente = new contaCorrente(001,0100,true)
const novaContaPoupança = new contaPoupanca(002,0200)
const novaContaUniversitaria = new contaUniversitaria(003,0300)