import { Link } from 'react-router-dom';
import "../Styles/Vendas.scss"

export default function livro({livro}:any){

    return (
       
            <div>
                <h3>{livro.titulo}</h3>
                    <div className="texto">
                        <p>{livro.descricao.substr(0, 260).concat("...")}</p>
                    </div>
            </div>
        
    )
    
}