import "../Styles/Login.scss"
import { BsTwitter, BsFacebook } from "react-icons/Bs";


export default function Login(){
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
                    <input type="text" /><br/>
                    <label htmlFor="">Senha: </label>
                    <input type="text" /><br />
                    <button>Entrar</button>
                </form>
                <br />
                <hr /> 
                <p>Não Possui uma conta?</p>
                <button>Cadastrar</button>
            </div>
        </body>
    )
}