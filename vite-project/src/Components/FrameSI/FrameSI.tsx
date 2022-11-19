import '../Styles/FrameSI.scss'


export default function FrameSI(){
    return(
        <>
            <div className="superior">
                <a href="">
                    <img className='iconHome' src="imagens/IconHome.png" alt="Ícone da página home" />
                    <p>Home</p></a>
                <a href="">
                    <img src="imagens/IconVendas.png" alt="" />
                    <p>Vendas</p>
                    </a>
                <a href="">
                    <img className='iconProduto' src="imagens/IconProduto.png" alt="Ícone de produto" />
                    <p>Produto</p></a>
                <input type="text" placeholder="Procure seu livro"/>
                <img src="imagens/IconLupa.png" className='iconLupa' alt="Icone de lupa" />
            </div>

            <div className="inferior">
                <p>Contato: BooksCorumba@outlook.com</p>
                <a href="//facebook.com"><img src="imagens/IconFace.png" alt="facebook icon" /></a>
                <a href="//twitter.com"><img src="imagens/Icontwitter.png" alt="twitter icon" /></a>
            </div>
        </>
    );
}