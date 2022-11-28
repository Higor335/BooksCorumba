import { Link } from 'react-router-dom';
import { Livro } from '../Home/Home';


interface CapaProp{
    livro: Livro | undefined
}

export default function Capa(props: CapaProp){
    //livro
    return (
            <div>
                <img className='ima' src={props.livro?.imagem}/>
            </div>
    )
}