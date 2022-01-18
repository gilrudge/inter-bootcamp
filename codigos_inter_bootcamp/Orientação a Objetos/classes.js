
class ContaBancaria{

  constructor(agencia, numero, tipo){
    this.agencia = agencia
    this.numero = numero
    this.tipo = tipo
    this._saldo = 0

  }

  get saldo(){
    return this._saldo
  }

  set saldo(valor){
    this._saldo = valor
  }

  sacar(valor){
    if(this.saldo < valor){
      return "Saldo insuficiente"
    }
    this.saldo = this._saldo - valor
  }

  depositar(valor){
    this.saldo = this._saldo + valor

  }
}

class ContaCorrente extends ContaBancaria{
  constructor(agencia, numero, tipo, saldo, cartaoCredito){
    super(agencia, numero, tipo, saldo)
    this._cartaoCredito = cartaoCredito
    this.tipo = 'corrente'
  }

  get cartaoCredito(){
    return this._cartaoCredito
  }

  set cartaoCredito(valor){
    return this.cartaoCredito = this.saldo - valor
  }
}

class ContaPoupanca extends ContaBancaria{
  constructor(agencia, numero, tipo, saldo){
    super(agencia, numero, tipo, saldo)
    
    this.tipo = 'poupanca'
  }
}


class ContaUniversitaria extends ContaBancaria{
  constructor(agencia, numero, tipo, saldo){
    super(agencia, numero, tipo, saldo)
    
    this.tipo = 'universitaria'
  }

  saqueUniversitario(valor){
    if(valor > 500){
      return "Limite de saque excedido"
    }
    this.saldo = this.saldo - valor
  }
}

const bancaria = new ContaBancaria(10, 1234)
const poupanca = new ContaPoupanca(20, 5678)
const universitaria = new ContaUniversitaria(30, 9012)

// console.log(bancaria)

// bancaria.sacar(100)
// bancaria.depositar(900)
// //console.log(bancaria.saldo)
// bancaria.sacar(100)

// console.log(bancaria)

// bancaria.sacar(200)
// console.log(bancaria)

// bancaria.depositar(1000)

// console.log(bancaria)

////////////////////

// console.log(poupanca)

// poupanca.sacar(100)
// poupanca.depositar(900)
// //console.log(poupanca.saldo)
// poupanca.sacar(100)

// console.log(poupanca)

// poupanca.sacar(200)
// console.log(poupanca)

// poupanca.depositar(1000)

// console.log(poupanca)

// console.log(universitaria)

// console.log(universitaria.saqueUniversitario(550))
// universitaria.depositar(900)
//console.log(universitaria.saldo)
// universitaria.saqueUniversitario(100)

// console.log(universitaria)

// universitaria.saqueUniversitario(200)
// console.log(universitaria)

// universitaria.depositar(1000)

// console.log(universitaria)