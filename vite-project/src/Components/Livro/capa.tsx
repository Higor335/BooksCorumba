import { Link } from 'react-router-dom';

export default function Capa({capa}:any){
    return (
       
            <div>
                <Link className="Link" to={'/Cadastro'}><img src={capa.linkImg}/></Link>
            </div>
        
    )
}