import { Input } from "../components/input";

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        type="email"
        required
        legend="E-mail"
        placeholder="seu@email.com"
      />
      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
      />
    </form>
  );
}
