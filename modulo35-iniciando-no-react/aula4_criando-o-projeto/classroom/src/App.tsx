import "./global.css"
import { Button } from "./components/button";

import styles from "./app.module.css" // importando arquivo css

export function App() {
  // Todo componente começa com letra maiuscula
  // return /*todo componente tem retorno*/ <Button/> Exemplo de elemento simples
  // Passo a propriedade no proprio componente
  return (
    <div className={styles.container}>
      {/* <Button name="Criar" onClick={()=> alert("Criar")}/> */}

      <Button name="Adicionar" />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );

  /* retornar tbm um fragment
    <> => Abertura
    </> => fechamento do Fragment
    */
}
