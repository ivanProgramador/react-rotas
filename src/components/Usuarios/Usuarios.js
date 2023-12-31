import React, { useState, useEffect } from 'react'


import Usuario from '../Usuario/Usuario'

function Usuarios (){

    const [usuarios, setUsuarios] = useState([])
   

 





 const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
       
      fetch(`https://reqres.in/api/users/${usuario.id}`,{
         method:'DELETE'
      }).then(resposta =>{
        if(resposta.ok){
           setUsuarios(usuarios.filter(x => x.id !== usuario.id))          
        }

         
      })

      
    }
  }


  

 useEffect(()=>{

  fetch('https://reqres.in/api/users')
  .then(resposta => resposta.json())
  .then(dados =>{

    // convertendo os atributos pra um foprma que o meu componete entenda
    const usuarios = dados.data.map(usuario=> ({
      id: usuario.id,
      nome: usuario.first_name,
      sobrenome: usuario.last_name,
      email: usuario.email
    }))
    //quando o nopme do array que esta dentro do state e igual ao nome 
    // do objeto não precisa usar chave:valor ele ja pega sozinho
    //ai basta digitar o nome do objeto
    //se eu fosse fazer ficaria assim 
    // this.setState({usuarios:usuarios})
    setUsuarios(usuarios)
  })

     
 },[])




 
  
    return (
      <>
        

        {usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={()=> removerUsuario(usuario)}
          />
        ))}
      </>
    )
  
}

export default Usuarios