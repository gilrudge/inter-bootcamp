function calculadora(){

  const operacao = parseFloat(prompt(`Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisao Real (/)\n 5 - Divisao com Resto (%)\n 6 - Potenciação (**)`))

  if (!operacao || operacao > 6){
    alert('Operação Inválida, tente novamente')
    calculadora()
  }
  else{

    // variaveis para operações 
    let valor1 = parseFloat(prompt('Digite o valor 1:'))
    let valor2 = parseFloat(prompt('Digite o valor 2:'))
    let resultado

    //escolha de operações 
    switch (operacao) {
      case 1:
        soma()        
        break;
      case 2:
        subtracao()
        break;
      case 3:
        multiplicacao()
        break;
      case 4:
        divisaoReal()
        break;
      case 5:
        divisaoComResto()
        break;
      case 6:
        potenciacao()
        break;

      default:
        break;
    }
  //funcoes das operações
    function soma(){
      resultado = valor1 + valor2
      alert(`O resultado de ${valor1} + ${valor2} é ${resultado}`)
      novaOperacao()
    }

    function subtracao(){
      resultado = valor1 - valor2
      alert(`O resultado de ${valor1} - ${valor2} é ${resultado}`)
      novaOperacao()
    }

    function multiplicacao(){
      resultado = valor1 * valor2
      alert(`O resultado de ${valor1} * ${valor2} é ${resultado}`)
      novaOperacao()
    }

    function divisaoReal(){
      resultado = valor1 / valor2
      alert(`O resultado de ${valor1} / ${valor2} é ${resultado}`)
      novaOperacao()
    }

    function divisaoComResto(){
      resultado = valor1 % valor2
      alert(`O resultado de ${valor1} % ${valor2} é ${resultado}`)
      novaOperacao()
    }

    function potenciacao(){
      resultado = valor1 ** valor2
      alert(`O resultado de ${valor1} elevado a ${valor2} é ${resultado}`)
      novaOperacao()
    }

  }

  function novaOperacao(){
    const opcao = prompt(`Deseja Realizar uma nova Operação ?\n Escolha 1 para sim ou 2 para sair`)
    if (opcao == 1){
      calculadora()
    }
    if (opcao == 2){
      alert('Até Logo')
    }

    if (opcao != 1 && opcao != 2){
      alert('Digite uma opcao correta')
      calculadora()
    }

  }
}

calculadora()
