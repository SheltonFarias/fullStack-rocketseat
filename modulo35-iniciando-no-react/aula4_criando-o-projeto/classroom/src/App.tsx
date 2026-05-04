import "./global.css";
import { Button } from "./components/button";

import styles from "./app.module.css"; // importando arquivo css
import { useMessage } from "./hooks/useMessage";

export function App() {
  // Todo componente começa com letra maiuscula
  // return /*todo componente tem retorno*/ <Button/> Exemplo de elemento simples
  // Passo a propriedade no proprio componente
  // Trazer como objeto vai ser mais vantajoso pq não precisa ser atribuido ordem
  const { show } = useMessage({name: "teste do teste", age: 24});
  return (
    <div className={styles.container}>
      {/* <Button name="Criar" onClick={()=> alert("Criar")}/> */}

      <Button name="Adicionar" onClick={() => show('Mensagem personalizada do meu hook')} />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );

  /* retornar tbm um fragment
    <> => Abertura
    </> => fechamento do Fragment
    */
}
