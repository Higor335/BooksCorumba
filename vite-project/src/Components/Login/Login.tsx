import { Link} from 'react-router-dom';
import "../Styles/Login.scss"
import Frames from "../FrameLogCad/Frames";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Services/firebase';
import { useState } from 'react';
import {Navigate} from 'react-router-dom'

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    function handleSignIn(){
        signInWithEmailAndPassword(email, password);
    }

    if (error) {
        <div>{error.message}</div>
      }
      if (loading) {
        console.log(user)
        return <>
        {Logado()}
        </>
      }
      function Logado(){
        if(user){
          console.log(user)
          return <Navigate to={"/"} replace={true}></Navigate>
        }
      }
    return(
        <body>
            <div className="Form">
                <Link to={"/"}><button className="voltar"><div className="seta"></div></button></Link>
                <h2>LOGIN</h2>

                <form>
                    <label>E-mail: </label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                    <label>Senha: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                    <button onClick={handleSignIn}>Entrar</button>
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