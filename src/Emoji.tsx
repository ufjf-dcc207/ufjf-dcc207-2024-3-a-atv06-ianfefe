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

  function onAlimentar(){}
  function onHidratar(){}
  function onLigaDesligaLuz(){}
  function onCiclo(){}

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
      <div className="atributos"></div>
      <div className="atributos">
        <Atributo icone="❤️"></Atributo>
        <Atributo icone="⚡"></Atributo>
        <Atributo icone="🍗"></Atributo>
        <Atributo icone="💧"></Atributo>
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
