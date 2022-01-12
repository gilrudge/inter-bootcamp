function getAdmins(map){
  let admins = []
  for([key, value] of map){
    if(value === 'admin'){
        admins.push(key)

    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('João', 'admin')
usuarios.set('Alcebiades', 'dev')
usuarios.set('Cleber', 'suporte')
usuarios.set('Janaina', 'admin')
usuarios.set('Tarsila', 'dev')
usuarios.set('Marcia', 'admin')


console.log(usuarios)

console.log(getAdmins(usuarios))