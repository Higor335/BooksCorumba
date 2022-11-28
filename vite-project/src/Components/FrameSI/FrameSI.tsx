import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FrameSI.scss'
import livros from "../../livros.json"


export default function FrameSI(){
    const [filter, setFilter] = useState('')
    

    function Buscar(){
        console.log(livros)
        livros.map(livro=>{
            let result = livro.titulo.toLowerCase().includes(localStorage.nome.toLowerCase())
            console.log(result)
            if(result){
                console.log(livro.titulo)
                console.log(livro.id)
                localStorage.info=livro.id-1;
            }
        })
    }

    function handleSearchText(event: any) {
        setFilter(event.target.value)
        console.log(event.target.value)
        localStorage.nome=event.target.value;
      }

    localStorage.info=0;
    return(
        <>
            <div className="superior">
                <Link className='link' to={"/"}>
                    <img className='iconHome' src="../imagens/IconHome.png" alt="Ícone da página home" />
                    <p>Home</p></Link>
                <Link className='link' to={"/Vendas"}>
                    <img src="../imagens/IconVendas.png" alt="" />
                    <p>Vendas</p>
                    </Link>
                <Link className='link' to={"/Produto"}>
                    <img className='iconProduto' src="../imagens/IconProduto.png" alt="Ícone de produto" />
                    <p>Produto</p></Link>
                
                <div className='busca'>
                    <input type="text" placeholder="Procure seu livro" onChange={handleSearchText}/>
                    <img src="../imagens/IconLupa.png" className='iconLupa' alt="Icone de lupa" />
                    <Link to={"/Produto"}><button onClick={Buscar}>Buscar</button></Link>
                </div>
            </div>

            <div className="inferior">
                <img className='logo' src="../imagens/IconeLivroPequeno.png" alt="ícone de livro pequeno" />
                <p className='nome'>BOOKS CORUMBÁ</p>
                <p>Contato: BooksCorumba@outlook.com</p>
                <a href="//facebook.com"><img src="../imagens/IconFace.png" alt="facebook icon" /></a>
                <a href="//twitter.com"><img src="../imagens/Icontwitter.png" alt="twitter icon" /></a>
            </div>
        </>
    );
}