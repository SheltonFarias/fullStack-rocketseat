type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({ Children, isLoading, type = "button" }: Props) {
  return <button>{Children}</button>
}
