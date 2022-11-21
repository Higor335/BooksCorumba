import { Link } from "react-router-dom";
import FrameSI from "../FrameSI/FrameSI";
import "../Styles/Home.scss"

export default function Home(){
    return (
    <body>
            <div>
                <p className="desc">Seu melhor site para compras de <br/>livros livres, estrangeiros ou locais.<br/><br/>
                Desfrute do nosso extenso catálogo<br/> com diversos gêneros literários, para<br/>toda a família!</p>
            </div>

            <div className="livros">
                <a href=""><img src="" alt="" /></a>
                <button className="esquerda"> <div className="setaEsquerda"/> </button>
                <button className="direita"> <div className="setaDireita"/> </button>
            </div>

            <Link to={"/Login"} className="login" ><p>Login</p></Link>
        <FrameSI></FrameSI>
    </body>

    );
}