import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FrameSI from "../FrameSI/FrameSI";
import "../Styles/Vendas.scss"
import livros from "../../livros.json"
import Livro from "../Livro/livro";

export interface Livro {
    id: number;
    titulo: string;
    autor: string;
    descricao: string;
    imagem: string;
    preco: number;
    precoPromocional: number;
  }

export default function Vendas(){
    const [livro,setLivro] = useState<Livro>();
    const [conteudo, setConteudo] = useState<Livro[]>([]);

    const [indice,setIndice] = useState(0);
    const [indice2,setIndice2] = useState(1);
    const [indice3,setIndice3] = useState(2);
    localStorage.setItem("id", "0")

    function somar(){
        if(indice3<5){
            setIndice(indice+3)
            setIndice2(indice2+3)
            setIndice3(indice3+3)
        }
    }
    
    function subtrair(){
        if(indice>0){
            setIndice(indice-3)
            setIndice2(indice2-3)
            setIndice3(indice3-3)
        }
    }

    function enviar(){
        localStorage.info = indice
    }

    function enviar2(){
        localStorage.info = indice2
    }

    function enviar3(){
        localStorage.info = indice3
    }


    useEffect(() => {
        setLivro(conteudo.find(livro => livro.id == indice))
    }, [indice])


    return (
        <body>
            <div className="conteudo">
                    <div className="blocoLivros">
                        <div className="livro">
                            <Livro livro={livros[indice]}/>
                            <img src="imagens/LivroLoja.png" alt="" />
                            <Link to={"/Produto/"+(indice+1)}><button onClick={enviar}>comprar</button></Link>
                        </div>
                        <div className="separador"/>
                        <div className="livro">                           
                            <Livro livro={livros[indice2]}/>
                            <img src="imagens/LivroLoja.png" alt="" />
                            <Link to={"/Produto/"+(indice2+1)}><button onClick={enviar2}>comprar</button></Link>
                        </div>
                        <div className="separador"/>
                        <div className="livro">
                            <Livro livro={livros[indice3]}/>
                            <img src="imagens/LivroLoja.png" alt="" />
                            <Link to={"/Produto/"+(indice3+1)}><button onClick={enviar3}>comprar</button></Link>
                        </div>
                    </div>
                    <button className="esquerda" onClick={subtrair}><div className="setaEsquerda"></div></button>
                    <button className="direita"  onClick={somar}><div className="setaDireita"></div></button>
            </div>
            <FrameSI/>
        </body>
    );
}