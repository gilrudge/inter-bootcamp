const array = [20,20,30,5,100,85,85,92,92,30,347,347]

function uniqueValues(set){
  let valoresUnicos = []
  let arrayValoresUnicos = new Set(set)
  
  return valoresUnicos = [...arrayValoresUnicos]
}


console.log(uniqueValues(array))