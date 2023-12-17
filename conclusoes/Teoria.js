/*
 Usando rotas em SPA 

 Uma spa possui varias informações dependendo da necessidade porem essas informações 
 são trazidas de links diferentes na mesma página, a diferença e que um site para 
 atualizar uma informação precisda recarregar toda a pagina para limpar as informações 
 antigas e trazer as novas.
 
 em uma SPA reacregar toda  apagian e desnecessario porque cada componente quada uma 
 informação diferente então caso ele mude de valor(estado) siomante ele se atualiza
 sem afetar os outros, dando ao usuário a impressão de estar usando um aplicativo
 e não um site convencional.
 
 Rotas no React 

 O react usa uma blioteca a chamada BrowserRouter para admistrar rotas atualmente
 o jeito que eu escrevi as riotas não é mais usado mas ele ainda dá suporte eu fiz 
 isso pra seguir a mesma forma que o professor do curso ensinou. pra seguir os passos
 da auala tive que instalar a versão 5

 npm install react-router-dom@5

 Pra montar de fato a barra de navegação e necessario entender  como funciona o Router
 ele é um componete principal que envolve toda a inteface então ele funciona como um container 
 nisso o componete App retorna ele como um container
 
 return(
  <div className="App" >
  <Router>
     //aqui eu crio a barra de navegação 

      <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/' exact> Inicio </NavLink>  
              </li>
              <li>
                <NavLink to='/usuarios'>Usuarios cadastrados</NavLink> 
              </li>
              <li>
                <NavLink to="/Adicionar">Adicionar usuario</NavLink> 
              </li>
            </ul>
          </nav>
        </header>

        //aqui eu chamo o componente gerenciador Switch que vai controlar as rotas 

        <Switch>

         // se a rota solicitata for '/' ele mostra o componente Home  

          <Route path='/' exact>
               <Home/>
            </Route>

            // se a rota solicitata for '/usuarios' ele mostra o componente Usuarios e assim por diante  


            <Route path='/usuarios'>
               <Usuarios/>
            </Route>

            <Route path='/Adicionar'>
               <AdicionarUsuario/>
            </Route>

           

            <Route path="*">
              <PaginaNaoEncontrada/>
               
            </Route>

          </Switch>



    
    
  </Router>
 </div 
)


PASSANDO PARAMETROS POR ROTAS
  Essa rota renderiza o componete detalhe usuario mas pra saber oque ela vai renderizar,
  eu preciso saber o id dele então ele é passado pela url   

<Route path='/usuario/:id'>
               <DetalheUsuario/>
</Route>

 no componente   <DetalheUsuario/> quando o id chega lá ele precisa ser tratado tambem 
 e quando eu chamo um hook chamado useParams() qua recebe o id 

 import { useParams } from "react-router-dom/cjs/react-router-dom.min";


 -----------------------------------------------------------------------------------

 function DetalheUsuario(){
    const {id} = useParams() 
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




 


 
 




 

*/