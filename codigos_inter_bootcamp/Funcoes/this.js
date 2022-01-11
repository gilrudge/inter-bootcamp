const pessoa = {nome:'Gil', idade: 35}
const pessoa1 = {nome:'Nati', idade: 33}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa, 5))
console.log(calculaIdade.apply(pessoa1, [20]))