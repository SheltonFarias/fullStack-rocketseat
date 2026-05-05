type Props = {
  name: string,
  age: number
}

// Criando Hook
export function useMessage({ name, age }: Props) {
  function show(message: string) {
    console.log(name, age, message);
  }
  return { show };
}
