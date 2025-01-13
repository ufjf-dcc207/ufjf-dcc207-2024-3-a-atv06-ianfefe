import { useState } from "react";
import "./Atributo.css";

type AtributoProps = {
    icone: string;
};

export default function Atributo({icone}: AtributoProps) {
    const [quantidade, setQuantidade] = useState(3);

    function addIcone(){
        setQuantidade((quant) => (quant === 5 ? 0 : quant + 1));
    }

  return (
        <div className="atributo">
            <span>{icone.repeat(quantidade)}</span>
            <span className="inativo">{icone.repeat(5 - quantidade)}</span>
            <button onClick={addIcone}>+</button>
        </div>
  );
}
