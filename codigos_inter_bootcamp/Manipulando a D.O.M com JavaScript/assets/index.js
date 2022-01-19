const btn = document.querySelector('#btn')
const title = document.querySelector('#title')
const section = document.querySelector('#section')
const body = document.querySelector('body')
const footer = document.querySelector('footer')

function changeMode(){
  addClass()
  changeText()
}

function addClass(){
  const darkModeName = 'dark-mode'
  
    btn.classList.toggle(darkModeName)    
    title.classList.toggle(darkModeName)
    section.classList.toggle(darkModeName)
    body.classList.toggle(darkModeName)
    footer.classList.toggle(darkModeName)
    return
}

function changeText(){
  const lightBtn = 'Light Mode'
  const lightTitle = 'Dark Mode On'
  const darkBtn = 'Dark Mode'
  const darkTitle = 'Light Mode ON'

  if(!(btn.innerText === lightBtn)){    
    btn.innerText = lightBtn
    title.innerText = lightTitle
  }else{
    btn.innerText = darkBtn
    title.innerText = darkTitle
  }

 }

btn.onclick = changeMode