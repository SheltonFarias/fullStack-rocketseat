const input = document.querySelector("input");
const form = document.querySelector("form");

input.addEventListener("input", () => {
  const value = input.value;

  const regex = /\D+/g;

  // Retonra o padrão encontrado na string
  // console.log(value.match(regex))

  const isValid = regex.test(value);
});

form.addEventListener("submit", (event) => {
  const regex = /\D+/g;
  event.preventDefault();
  const value = input.value.replace(regex, "");

  console.log(value);
});
