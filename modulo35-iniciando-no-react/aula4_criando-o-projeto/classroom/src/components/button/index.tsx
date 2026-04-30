import styles from "./styles.module.css";

type Props =
  React.ComponentProps<"button"> /*Pegando tipagem do componente botão do HTML*/ & {
    // Adiciono tipagem para a propriedade
    name: string;
    // onClick?: () => void
  };

// export function Button(props:Props) { Forma 1
//   return <button>{props.name}</button> // passar props entre {} para passar como propriedade
// }

// export function Button({ name, onClick }: Props) {
//   return <button onClick={onClick}>{name}</button>; // passar props entre {} para passar como propriedade
// }

// className={styles.container} por se tratar de um ccs module pode ser passado dessa forma e pode se resgatar classes

export function Button({ name, ...rest }: Props) {
  // trazendo todos as propriedades do botão
  return (
    <button className={styles.container} {...rest}>
      <span>{name}</span>
    </button>
  );
}
