import "./global.css"
import { Button } from "./components/button";

import "./styles.css" // importando arquivo css

export function App() {
  // Todo componente começa com letra maiuscula
  // return /*todo componente tem retorno*/ <Button/> Exemplo de elemento simples
  // Passo a propriedade no proprio componente
  return (
    <div className="container">
      <Button name="Criar" onClick={()=> alert("Criar")}/>
      <Button name="Editar" />
      <Button name="Remover" />
    </div>
  );

  /* retornar tbm um fragment
    <> => Abertura
    </> => fechamento do Fragment
    */
}
