import "./Atributo.css";

type AtributoProps = {
    icone: string;
    quantidade: number;
};

export default function Atributo({icone, quantidade}: AtributoProps) {

  return (
        <div className="atributo">
            <span>{icone.repeat(quantidade)}</span>
            <span className="inativo">{icone.repeat(5 - quantidade)}</span>
        </div>
  );
}