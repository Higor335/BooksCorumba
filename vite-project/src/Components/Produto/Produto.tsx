import FrameSI from "../FrameSI/FrameSI";
import "../Styles/Produto.scss"
import Compra from "../Livro/compra";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Livro } from "../Home/Home";

interface ProdutoProp{
    params: any
}

function Component(props: ProdutoProp){
    const [livro, setLivro] = useState<Livro>(); 
    const [load, setLoad] = useState<boolean>(true); 

    useEffect(() => {
        if(load){
            console.log(props.params.id)
            fetch(`http://localhost:3333/livro/list/${props.params.id}`).then(response => response.json()).then(data => {
                    setLivro(data.produto);
            });
            setLoad(false)
        }
        
    }, [load]);

    if(!livro)return(<></>)

    return (
        
        <div>
            
            <Compra compra={livro}/>
            <FrameSI/>
        </div>
    );
}

export function Produto() {
    let params = useParams();
    return <Component params={params}/>
  }