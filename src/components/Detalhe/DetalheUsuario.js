import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DetalheUsuario(){
    const {codigo} = useParams() 
    const [usuario, setUsuario] = useState({})

    useEffect(()=>{
      fetch(`https://reqres.in/api/users/${codigo}`)
      .then(resposta => resposta.json())
      .then(dados =>{
         if(dados.data){
            setUsuario({
                codigo: dados.data.id,
                nome: dados.data.first_name,
                sobrenome: dados.data.last_name,
                email: dados.data.email,
                foto: dados.data.avatar
            })
         }
       })

    },[codigo])

    if(usuario.nome !== undefined){

        return<>
               <h1>{usuario.nome} {usuario.sobrenome}</h1>
               <img src={usuario.foto} alt={usuario.nome}/>
               <p>{usuario.email}</p>
               <Link to='/usuarios'>Voltar</Link>
              </>
    }

    return<>
            <h1>Usuario não encontrado !</h1>
            <Link to='/usuarios'>Voltar</Link>

          </>
}
export default DetalheUsuario