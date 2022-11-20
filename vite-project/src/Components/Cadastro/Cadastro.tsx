import { Link } from "react-router-dom"
import Frames from "../FrameLogCad/Frames"
import "../Styles/Cadastro.scss"


export default function Cadastro(){
    return(
        <body>
        
            <div className="BarraMeio">
                <h2>Cadastro</h2>
                <p>Nome:</p>
                <input type={"text"} name="nome"></input>
                <p>Email:</p>
                <input type={"email"} name="email"></input>
                <p>Senha:</p>
                <input type={"password"} name="senha"></input>
                <button className="Button">Cadastrar</button>
                <Link className="Link" to={'/'}><p>Voltar</p></Link>
            </div>
            <Frames></Frames>
        </body>
    )
}