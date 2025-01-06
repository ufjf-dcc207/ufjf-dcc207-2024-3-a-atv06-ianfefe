import { useState } from "react";
import "./Emoji.css";

const EMOJIS = new Map<string, string>([
  ["happy", "🙂"],
  ["sick", "🤢"],
  ["dead", "😵"],
]);

export default function Emoji() {
  const [situacao, setSituacao] = useState("deady");

    function toHappy(){
        setSituacao("happy")
    }

    function toDead(){
        setSituacao("dead")
    }

    function toSick(){
        setSituacao("sick")
    }

    function toCycle(){
        if(situacao == "happy"){
            toSick();
        }
        else if(situacao == "sick"){
            toDead();
        }
        else{
            toHappy();
        }
    }

  return (
    <div className="emoji">
      <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
      <div className="acoes">
        <button onClick={toHappy}>Vivo</button>
        <button onClick={toSick}>Doente</button>
        <button onClick={toDead}>Morto</button>
        <button onClick={toCycle}>Ciclo</button>
      </div>
    </div>
  );
}
