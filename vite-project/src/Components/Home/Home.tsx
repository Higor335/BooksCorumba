import { Link } from "react-router-dom";
import FrameSI from "../FrameSI/FrameSI";
import "../Styles/Home.scss"
import { useEffect, useState } from "react";
import Capa from "../Livro/capa";

export interface Livro {
    id: number;
    titulo: string;
    autor: string;
    descricao: string;
    imagem: string;
    preco: number;
    precoPromocional: number;
  }

export default function Home(){

    const [indice,setIndice] = useState<number>(0);
    const [livro,setLivro] = useState<Livro>();
    const [conteudo, setConteudo] = useState<Livro[]>([]);
    const [load, setLoad]   = useState(true);

    function somar(){
        if(indice + 1 >= conteudo.length){
            setIndice(0)
        }else{
            setIndice(indice + 1)
        }
    }

    useEffect(() => {
        setLivro(conteudo.find(livro => livro.id == indice))
    }, [indice])

    function subtrair(){
        if(indice - 1 == 0){
            setIndice(conteudo.length)
        }else{
            setIndice(indice - 1)
        }
        let novo_livro = conteudo.find(livro => livro.id == indice);
        if(!novo_livro){
            setIndice(5)
        }
    }

    function enviar(){
        localStorage.setItem('info', indice.toString())
    }

    

    useEffect(() => {
        if(conteudo){
            setLivro(conteudo[indice])
        }

        if(load){
            setLoad(false)
            fetch('http://localhost:3333/livro/list').then(response => response.json()).then(data => {
                /**
                 * (1pt) atribua o conteúdo 'data' para a variável games
                 */
                setConteudo(data);
                setLivro(data[indice])
            });
        }
    }, [load])

    return (
    <body>
            <div>
                <p className="desc">&nbsp;&nbsp;Seu melhor site para compras de <br/>livros livres, estrangeiros ou locais<br/><br/>
                &nbsp;&nbsp;Desfrute do nosso extenso catálogo<br/> com diversos gêneros literários, para<br/>toda a família!</p>
            </div>

            <div className="livros">
                <Link to={`/Produto/${livro?.id}`} onClick={enviar}>
                    <Capa livro={livro}/>
                </Link>
                <button className="esquerda" onClick={subtrair}> <div className="setaEsquerda"/> </button>
                <button className="direita" onClick={somar}> <div className="setaDireita"/> </button>
            </div>

            <Link to={"/Login"} className="login" ><p>Login</p></Link>
        <FrameSI></FrameSI>
    </body>

    );
}