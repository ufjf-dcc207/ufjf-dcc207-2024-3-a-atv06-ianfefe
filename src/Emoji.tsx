import { useState } from "react";
import "./Emoji.css";
import Atributo from "./Atributo";

const EMOJIS = new Map<string, string>([
  ["happy", "🙂"],
  ["sick", "🤢"],
  ["dead", "😵"],
  ["sleepy", "🥱"]
]);

export default function Emoji() {
  const [situacao, setSituacao] = useState("happy");
  const [saude, setSaude] = useState(5);
  const [energia, setEnergia] = useState(1);
  const [comida, setComida] = useState(1);
  const [agua, setAgua] = useState(1);
  const [luz, setLuz] = useState(true);

  function onAlimentar() {
      setComida(Math.min(comida + 1, 5));
  }
  function onHidratar() {
    setAgua(Math.min(agua + 1, 5));
  }
  function onLigaDesligaLuz() {
    setLuz(!luz);
  }

  function onCiclo() {

    if(saude === 0){
      setSituacao("dead");
      return;
    }

    setComida(Math.max(0, comida - 1));
    setAgua(Math.max(0, agua - 1));

    if(luz){
      setEnergia(Math.max(0, energia - 1));
    }else{
      setEnergia(Math.min(agua + 1, 5));
    }

    if(energia > 2 && saude > 2){
      setSituacao("happy");
    }

    if(comida > 0 && agua > 0 && !luz) {
      setSaude(Math.min(5, saude + 1))
    }

    if (comida === 0) {
      setSaude((prevSaude) => Math.max(0, prevSaude - 1));
    }
    if (agua === 0) {
      setSaude((prevSaude) => Math.max(0, prevSaude - 1));
    }
    if (energia === 0) {
      setSaude((prevSaude) => Math.max(0, prevSaude - 1));
    }

    if(energia <= 2){
      setSituacao("sleepy")
    }
    if(saude <= 2){
      setSituacao("sick")
    }

  }

    // if(saude <= 2){
    //   setSituacao("sleepy");
    // }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
      <div className="atributos">
        <Atributo icone="❤️" quantidade={saude}></Atributo>
        <Atributo icone="🍗" quantidade={comida}></Atributo>
        <Atributo icone="💧" quantidade={agua}></Atributo>
        <Atributo icone="⚡" quantidade={energia}></Atributo>
        <span style={{filter: !luz ? "grayscale(100%)" : ""}}>💡</span>
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
