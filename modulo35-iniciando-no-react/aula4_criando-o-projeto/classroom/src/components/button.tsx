import type React from "react";

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

export function Button({ name, ...rest }: Props) { // trazendo todos as propriedades do botão
  return <button {...rest}>{name}</button>; 
}
