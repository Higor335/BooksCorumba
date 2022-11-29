import { useEffect, useState } from 'react';
import { Link, Navigate, NavigateFunction, useNavigate } from 'react-router-dom';
import '../Styles/FrameSI.scss'

function FrameSI() {
    let navigate = useNavigate();
    return <FrameS navigate={navigate} />
  }
export default FrameSI;


export interface PropPage{
    navigate:  NavigateFunction
}
function FrameS(props: PropPage){
    const [filter, setFilter] = useState('')
    localStorage.textos=2
    let texto="/Produto/"
    let id=1;

    const [livro,setLivro] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3333/livro/list').then(response => response.json()).then(data => {
          setLivro(data);
        })
      }, [])
    function Buscar(){
        livro.map(livro=>{
            let result = livro.titulo.toLowerCase().includes(localStorage.nome.toLowerCase())
            if(result){
                id=livro.id
                texto = texto+id;
                localStorage.textos=id;
                props.navigate(`/Produto/${id}`)
                console.log("livro", id)
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
                    <button onClick={Buscar}>Buscar</button>
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