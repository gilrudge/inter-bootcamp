const URL_GATOS = "https://thatcopy.pw/catapi/rest/"


const atualizaGatos = async () =>{
  
  const dados = await fetch(URL_GATOS)
  const converteJson = await dados.json()
  return converteJson.webpurl
  
}


const carregaImagem = async () =>{
  const imagem = document.querySelector('[data-cat]')
  imagem.src = await atualizaGatos()
  
}
carregaImagem()


const catBtn = document.querySelector('[data-change-cat]')
catBtn.onclick = () =>{
   carregaImagem()}