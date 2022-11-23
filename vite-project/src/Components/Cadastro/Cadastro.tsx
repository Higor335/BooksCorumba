import { Link } from "react-router-dom"
import Frames from "../FrameLogCad/Frames"
import "../Styles/Cadastro.scss"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Services/firebase';
import { useState } from 'react';

export default function Cadastro(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(){
        createUserWithEmailAndPassword(email, password);
    }

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }

    return(
        <body>
        
            <form className="BarraMeio">
                <h2>Cadastro</h2>
                <p>Nome:</p>
                <input type="text" name="nome" ></input>
                <p>Email:</p>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                <p>Senha:</p>
                <input type="password" name="senha" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className="Cadastrar" onClick={handleSignOut}>Cadastrar</button>    
                <Link className="Link" to={'/Login'}><p>Voltar</p></Link>
            </form>
            <Frames></Frames>
        </body>
    )
}