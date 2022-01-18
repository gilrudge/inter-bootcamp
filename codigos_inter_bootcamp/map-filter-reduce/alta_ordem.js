//Exercicio MAP

const uno = {
  value: 100
}

const gol = {
  value: 50
}

const array = [1,2,3,4]

const testeMapSemThis = array.map((arr) =>{
  return arr * 2
})


function testeMapComThis(arr, thisArg){
  return arr.map(function(arr){
    return arr * this.value
  }, thisArg)
}

console.log(testeMapSemThis)

console.log(testeMapComThis(array,uno))
console.log(testeMapComThis(array,gol))

// Exercicio FILTER

const arrayTest = [1,2,3,4,5,6,7,8,9,10]

const filterEvenNumber = arrayTest.filter((arr)=>{
  return arr % 2 === 0
})

console.log(filterEvenNumber)

// Exercicio REDUCE

const sumItens = arrayTest.reduce((acc, item)=>{
  return acc + item
}, 0)

const minusBalance = arrayTest.reduce((acc, item)=>{
  return acc - item
}, 100)

console.log(sumItens)
console.log(minusBalance)