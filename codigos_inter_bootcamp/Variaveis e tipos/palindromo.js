function verificaPalindromo(palavra){

  
  let checkPalavraReversa = palavra.split("").reverse().join()
  let checkPalavraDireta = palavra.split("").join()
  let checkPalindromo = checkPalavraDireta === checkPalavraReversa
  
  if(!palavra){
    return 'Favor digitar uma string válida'
  }

  if(checkPalindromo){
    return `${palavra} é um palíndromo!`
  }

  if(!checkPalindromo){
    return `${palavra} não é um palíndromo!`
  }
 }

console.log(verificaPalindromo('ama'))
