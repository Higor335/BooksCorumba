import { Link } from "react-router-dom";
import FrameSI from "../FrameSI/FrameSI";
import "../Styles/Vendas.scss"

export default function Vendas(){
    return (
        <body>
            <div className="conteudo">
                    <div className="blocoLivros">
                        <div className="livro">
                            <h3>titulo</h3>
                            <p>descrição</p>
                            <img src="imagens/LivroLoja.png" alt="" />
                            <Link to={"/Produto"}><button>comprar</button></Link>
                        </div>
                        <div className="separador"/>
                        <div className="livro">
                            <h3>titulo</h3>
                            <p>descrição</p>
                            <img src="imagens/LivroLoja.png" alt="" />
                            <Link to={"/Produto"}><button>comprar</button></Link>
                        </div>
                        <div className="separador"/>
                        <div className="livro">
                            <h3>titulo</h3>
                            <p>descrição</p>
                            <img src="imagens/LivroLoja.png" alt="" />
                            <Link to={"/Produto"}><button>comprar</button></Link>
                        </div>
                    </div>
                    <button className="esquerda"><div className="setaEsquerda"></div></button>
                    <button className="direita"><div className="setaDireita"></div></button>
            </div>
            <FrameSI/>
        </body>
    );
}