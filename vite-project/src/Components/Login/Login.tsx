import { Link, NavigateFunction, useNavigate} from 'react-router-dom';
import "../Styles/Login.scss"
import Frames from "../FrameLogCad/Frames";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Services/firebase';
import { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'

interface Usuario {
      nome: String,
      email: String,
      senha: String,
}
export interface PropPage{
  navigate:  NavigateFunction
}

function Login() {
  let navigate = useNavigate();
  return <Lg navigate={navigate} />
}

export default Login

function Lg(props: PropPage){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailV, setEmailV] = useState('');
    const [senhaV, setSenhaV] = useState('');
    const [user,setUser] = useState<Usuario>(); 
    const [load, setLoad] = useState<boolean>(true); 

    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //   ] = useSignInWithEmailAndPassword(auth);
    
    // function handleSignIn(){
    //     signInWithEmailAndPassword(email, password);
    // }

    // if (error) {
    //     <div>{error.message}</div>
    //   }
    // if (loading) {
    //   return <div>bruh</div>
    // }
  
    function Component(props: any){
  
    useEffect(() => {
        if(load){
            fetch(`http://localhost:3333/cliente/list/6386509ae23a22f12afbad7f`).then(response => response.json()).then(data => {
                  setUser(data);
            });
            setLoad(false)
        }
        
    }, [load]);
  }

  function Logado(e){
    e.preventDefault()
    console.log(emailV)
    console.log(senhaV)
    
    fetch(`http://localhost:3333/cliente/login/${emailV}/${senhaV}`).then(async response => {
          if(response.status == 200){
            const data = await response.json();
            setUser(data);
            localStorage.setItem('userid', data._id);
            props.navigate("/")
          }else{
            alert("login ou senha invalidos")
          }
      })
  }


    return(
        <body>
            <>{Logado}</>
            <div className="Form">
                <Link to={"/"}><button className="voltar"><div className="seta"></div></button></Link>
                <h2>LOGIN</h2>
                <form>
                    <label>E-mail: </label>
                    <input type="email" name="email" value={emailV} onChange={(e) => setEmailV(e.target.value)}/><br/>
                    <label>Senha: </label>
                    <input type="password" value={senhaV} onChange={(e) => setSenhaV(e.target.value)}/><br />
                    <button onClick={Logado}>Entrar</button>
                </form>
 
                <div className="baixo">
                    <br />
                    <hr /> 
                    <p>Não Possui uma conta?</p>
                    <Link className="Link" to={'/Cadastro'}><button>Cadastrar</button></Link>
                </div>    
            </div>
            <Frames></Frames>
        </body>
    )
}