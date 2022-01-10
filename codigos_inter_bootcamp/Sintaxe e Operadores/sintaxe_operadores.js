function comparacao(a, b){
  if(!a || !b){
    return 'Os números não foram digitados'
  }
  let iguais = a === b ? 'são iguais' : 'não são iguais'
  let soma = a + b
  let comparaSoma10 = soma >= 10 ? 'maior' : 'menor'
  let comparaSoma20 = soma >= 20 ? 'maior' : 'menor'

  
  return `Os números ${a} e ${b} ${iguais}. Sua soma é ${soma}, que é ${comparaSoma10} que 10 e ${comparaSoma20} que 20.`
}

console.log(comparacao(1,50))

