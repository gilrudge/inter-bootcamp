const minhaPromessa = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(console.log('Apareceu depois de 10 segundos!'));
    return resolve

  }, 10000)
})

console.log(minhaPromessa)
