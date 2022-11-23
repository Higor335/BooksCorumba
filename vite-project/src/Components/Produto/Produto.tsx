import FrameSI from "../FrameSI/FrameSI";
import "../Styles/Produto.scss"

export default function Produto(){
    return (
        <body>
            <div className="conteudo">
                <p className="tituloLivro">Titulo Livro</p>
                <img className="imgLivro" src="https://midias.correiobraziliense.com.br/_midias/jpg/2021/01/12/766x527/1_shrek_2-6479637.jpeg?20220728152928?20220728152928" alt="" /><p>a</p>
                <div className="tabela">
                    <div className="topo">
                        <p>Vendido e entregue por Books Corumbá</p>
                        <p>R$preco</p>
                        <p>R$preco_promo</p>
                        <p>em 5x no crédito</p>
                    </div>

                    <div className="pagamentos">
                        <img className="boleto" src="imagens/IconBoleto.png" alt="icone de boleto" />
                        <img className="cartao" src="imagens/IconCartao.png" alt="icone de cartao" />
                        <p>Boleto Bancário: R$ 100,00</p>
                        <p>Cartão de Crédito: R$ 1000,00</p>
                    </div>
                    <button className="comprar">Comprar</button>
                </div>
                <div className="entrega">
                    <p>Calcule a entrega: </p>
                    <input type="text" />
                    <button className="calcular">Calcular</button>
                </div>
            </div>
            <FrameSI/>
        </body>
    );
}