import { Link } from "react-router-dom";
import FrameSI from "../FrameSI/FrameSI";
import "../Styles/Home.scss"
import capas from "../../livros.json"
import { useState } from "react";
import Capa from "../Livro/capa";


export default function Home(){
const [indice,setIndice] = useState(0);

function somar(){
    if(indice<5){
        setIndice(indice+1)
    }
    if(indice==5){
        setIndice(indice-5)
    }
}

function subtrair(){
    if(indice>0){
        setIndice(indice-1)
    }
    if(indice==0){
        setIndice(indice+5)
    }
}

function enviar(){
    localStorage.info = indice
}

    return (
    <body>
            <div>
                <p className="desc">&nbsp;&nbsp;Seu melhor site para compras de <br/>livros livres, estrangeiros ou locais<br/><br/>
                &nbsp;&nbsp;Desfrute do nosso extenso catálogo<br/> com diversos gêneros literários, para<br/>toda a família!</p>
            </div>

            <div className="livros">
                <Link to={"/Produto"} onClick={enviar}><Capa className="ima" capa={capas[indice]} /></Link>
                <button className="esquerda" onClick={subtrair}> <div className="setaEsquerda"/> </button>
                <button className="direita" onClick={somar}> <div className="setaDireita"/> </button>
            </div>

            <Link to={"/Login"} className="login" ><p>Login</p></Link>
        <FrameSI></FrameSI>
    </body>

    );
}