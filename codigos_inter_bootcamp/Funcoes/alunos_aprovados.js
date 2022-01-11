const alunos = [
  {nome: 'João', nota:6, turma:'1B'},
  {nome: 'Haroldo', nota:9, turma:'2C'},
  {nome: 'Clementina', nota:3, turma:'1B'},
  {nome: 'Gertrudes', nota:8, turma:'3A'},
  {nome: 'Alcides', nota:4, turma:'2D'},
  {nome: 'Neusa', nota:7, turma:'3C'},
  
]

function alunosAprovados(array, media){
  let aprovados = []

  
  for(let i = 0; i < array.length; i++){
    const {nome, nota} = array[i]
    if(nota >= media){
      aprovados.push(nome)
    }
  }
  return aprovados

}

console.log(alunosAprovados(alunos, 7))