import "../Styles/Cadastro.scss"

export default function Cadastro(){
    return(
        <body>
            <div className="BarraSuperior">
                <img src="imagens/IconeLivroPequeno.png" alt="ícone de livro pequeno" />
                <p>BOOKS CORUMBÁ</p>
            </div>

            <div className="BarraMeio">
                <h2>Cadastro</h2>
                <p>Nome:</p>
                <input></input>
                <p>Email:</p>
                <input></input>
                <p>Senha:</p>
                <input></input>
                <button className="Button">Cadastrar</button>
                <a href="">Voltar</a>
            </div>

            <div className="BarraInferior">
                <p>Contato: site.com</p>
            </div>
        </body>
    )
}