import { useState } from "react";
import "./Emoji.css";
import Atributo from './Atributo'

const EMOJIS = new Map<string, string>([
  ["happy", "🙂"],
  ["sick", "🤢"],
  ["dead", "😵"],
]);

export default function Emoji() {
  const [situacao, setSituacao] = useState("deady");
  const [saude, setSaude] = useState(4);
  const [energia, setEnergia] = useState(3);
  const [comida, setComida] = useState(2);
  const [agua, setAgua] = useState(1);
  
  function onAlimentar(){
    setComida(comida === 5 ? comida : comida + 1);
  }
  function onHidratar(){
    setAgua(agua === 5 ? agua : agua + 1);
    
  }
  function onLigaDesligaLuz(){
  }

  function onCiclo(){
  }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
      <div className="atributos"></div>
      <div className="atributos">
        <Atributo icone="❤️" quantidade={saude}></Atributo>
        <Atributo icone="⚡" quantidade={energia}></Atributo>
        <Atributo icone="🍗" quantidade={comida}></Atributo>
        <Atributo icone="💧" quantidade={agua}></Atributo>
      </div>
      <div className="acoes">
        <button onClick={onAlimentar}>Dar comida</button>
        <button onClick={onHidratar}>Dar água</button>
        <button onClick={onLigaDesligaLuz}>Ligar/Desligar a Luz</button>
        <button onClick={onCiclo}>Ciclo</button>
      </div>
    </div>
  );
}
