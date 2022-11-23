import { Link } from 'react-router-dom';
export default function Capa({capa}:any){
    //livro
    return (
            <div>
                <Link to={'/Produto'}><img src={capa.linkImg}/></Link>
            </div>
    )
}