
//CONTADOR
const botoes = document.querySelector('[data-botoes]')
const botaoAumentaValor = botoes.querySelector('[data-aumenta-valor]')
const botaoDiminuiValor = botoes.querySelector('[data-diminui-valor]')
// const contagem = botoes.querySelector('[data-contagem]')
const contagem = document.querySelector('[data-contagem]')
let contador = 0

botaoAumentaValor.onclick = function(){  
  
  contador += 1
  if(contador >= 11){
    return contador = 10
  }
  contagem.innerText = contador
  
  
}

botaoDiminuiValor.onclick = function(){
  
  contador -= 1
  if(contador < 0){
    return contador = 0
  }
  contagem.innerText = contador
  
}

// TO-DO LIST


const todo = document.querySelector('[data-todo]')
const botao = todo.querySelector('[data-add-task]')

todo.onsubmit = (e) =>{
  e.preventDefault()
  
  const input = document.querySelector('[data-input]')
  if (input.value == '') return
  addElement(input.value)
  todo.reset()
  
}

function addElement(valor){
  
  const lista = document.querySelector('[data-list]')  

  const taskContainer = document.createElement('div')
  const task = document.createElement('span')
  const taskLabel = document.createElement('label')
  const criaElemento = document.createElement('input')
  
  task.innerText = valor
  criaElemento.setAttribute('type','checkbox')

  taskContainer.appendChild(criaElemento)
  taskContainer.appendChild(task)
  taskContainer.appendChild(taskLabel)
  
  


  lista.appendChild(taskContainer)

}