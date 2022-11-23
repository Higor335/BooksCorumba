import FrameSI from "../FrameSI/FrameSI";
import "../Styles/Produto.scss"
import compras from "../../livros.json"
import Compra from "../Livro/compra";
import { useState } from "react";

export default function Produto(){
    const [indice,setIndice] = useState(0); 

    return (
        <body>
            
            <Compra compra={compras[localStorage.info]}/>
            <FrameSI/>
        </body>
    );
}