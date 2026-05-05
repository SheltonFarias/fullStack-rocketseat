import "./global.css";
import { useState, useEffect } from "react";

import { Button } from "./components/button";
import styles from "./app.module.css"; // importando arquivo css

// import { useMessage } from "./hooks/useMessage";

export function App() {
  // Todo componente começa com letra maiuscula
  // return /*todo componente tem retorno*/ <Button/> Exemplo de elemento simples
  // Passo a propriedade no proprio componente
  // Trazer como objeto vai ser mais vantajoso pq não precisa ser atribuido ordem
  // const message = useMessage({name: "teste do teste", age: 24});
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prevState) => prevState + 1);
  }

  function handleRemove() {
    if (count > 0) {
      setCount((prevState) => prevState + 1);
    }
  }

  useEffect(() => {
    if (count > 0) {
      console.log("O valor mudou para: " + count);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      {/* <Button name="Criar" onClick={()=> alert("Criar")}/> */}
      {/* <Button name="Adicionar" onClick={() => show('Mensagem personalizada do meu hook')} /> */}
      <Button name="Adicionar" onClick={handleAdd} />
      <span>{count}</span>
      <Button name="Remover" onClick={handleRemove} />
    </div>
  );

  /* retornar tbm um fragment
    <> => Abertura
    </> => fechamento do Fragment
    */
}
