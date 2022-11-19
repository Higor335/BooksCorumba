import { Link } from "react-router-dom"
import Frames from "../FrameLogCad/Frames"
import "../Styles/Cadastro.scss"


export default function Cadastro(){
    return(
        <body>
        
            <div className="BarraMeio">
                <h2>Cadastro</h2>
                <p>Nome:</p>
                <input></input>
                <p>Email:</p>
                <input></input>
                <p>Senha:</p>
                <input></input>
                <button className="Button">Cadastrar</button>
                <Link className="Link" to={'/'}><p>Voltar</p></Link>
            </div>
            <Frames></Frames>
        </body>
    )
}