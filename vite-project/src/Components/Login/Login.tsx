import Cadastro from "../Cadastro/Cadastro";
import { Link } from 'react-router-dom';
import "../Styles/Login.scss"
import Frames from "../FrameLogCad/Frames";

export default function Login(){
    
    function validarConta(){
        return(<><span>Hello</span></>);
    }

    return(
        <body>
            <div className="Form">
                <h2>LOGIN</h2>

                <form action="">
                    <label>E-mail: </label>
                    <input type="email" name="email" /><br/>
                    <label>Senha: </label>
                    <input type="password" /><br />
                    <button onClick={validarConta}>Entrar</button>
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