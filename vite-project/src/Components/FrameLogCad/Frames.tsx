import "../Styles/FrameLogCad.scss"

export default function Frames(){
    return(
        <>
            <div className="BarraSuperior">
                <img src="imagens/IconeLivroPequeno.png" alt="ícone de livro pequeno" />
                <p>BOOKS CORUMBÁ</p>
            </div>

            <div className="BarraInferior">
                <p>Contato: BooksCorumba@outlook.com</p>
                <a href="//facebook.com"><img src="imagens/IconFace.png" alt="facebook icon" /></a>
                <a href="//twitter.com"><img src="imagens/Icontwitter.png" alt="twitter icon" /></a>
            </div>
        </>
    )
}