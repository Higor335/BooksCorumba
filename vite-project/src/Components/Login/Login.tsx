import "../Styles/Login.scss"

export default function Login(){
    
    function validarConta(){
        return(<><span>Hello</span></>);
    }

    return(
        <body>
            <div className="BarraSuperior">
                <img src="imagens/IconeLivroPequeno.png" alt="ícone de livro pequeno" />
                <p>BOOKS CORUMBÁ</p>
                
            </div>

            <div className="BarraInferior">
                <p>Contato: email@exemplo.com</p>
                <img src="imagens/iconeFacebook.png" alt="facebook icon" />
                <img src="imagens/Iconetwitter.png" alt="twitter icon" />
            </div>

            <div className="Form">
                <h2>LOGIN</h2>

                <form action="">
                    <label htmlFor="">E-mail: </label>
                    <input type="email" name="email" /><br/>
                    <label>Senha: </label>
                    <input type="password" /><br />
                    <button onClick={validarConta}>Entrar</button>
                </form>
                <div className="baixo">
                    <br />
                    <hr /> 
                    <p>Não Possui uma conta?</p>
                    <a href="./Cadastro.tsx"><button>Cadastrar</button></a>
                </div>    
            </div>
        </body>
    )
}