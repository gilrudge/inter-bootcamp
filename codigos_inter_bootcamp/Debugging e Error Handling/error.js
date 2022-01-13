function errorHandling(array, num){
  try{
    if(!array || !num){
      throw new ReferenceError("Parametros incorretos!")
    }
    if(typeof array !== 'object'){
      throw new TypeError("O array não é do tipo Object")
    }
    
    if(typeof num !== 'number'){
      throw new TypeError("O argumento não é do tipo Number")
    }
    
    if(array.length !== num){
      throw new RangeError("O tamanho do array não corresponde ao parametro informado")
    }
  
    else{
      return array
    }

  }
  catch(e){
    if(e instanceof ReferenceError){
      console.log("Este erro é um ReferenceError!")
      console.log(e.message)
    } else if (e instanceof TypeError){
      console.log("Este erro é um TypeError!")
      console.log(e.message)
    } else if(e instanceof RangeError){
      console.log("Este erro é um RangeError!")
      console.log(e.message)
    } else {
      console.log('Tipo de erro não esperado:', e)
    }

  }

}

let array = [1,2,3,4]

console.log(errorHandling([1,2,3,4,5,6], 6))



