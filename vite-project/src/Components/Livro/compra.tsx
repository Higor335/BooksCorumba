import { Link } from 'react-router-dom';

export default function Compra({compra}:any){
    //livro
    return (
        <div className="conteudo">
        <p className="tituloLivro">{compra.titulo}</p>
        <img className="imgLivro" src={compra.linkImg} alt="" /><p>a</p>
        <div className="tabela">
            <div className="topo">
                <p>Vendido e entregue por Books Corumbá</p>
                <p>{compra.preco}</p>
                <p>{compra.preco_promo}</p>
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
    )
}