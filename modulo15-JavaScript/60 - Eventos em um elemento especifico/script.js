const ul = document.querySelector("ul");

ul.addEventListener("scroll", (event) => {
  console.log(ul.scrollTop);
  console.log(event.target.scrollTop);

  if (ul.scrollTop > 300) {
    console.log("fim da lista");

    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const button = document.querySelector("button")
button.addEventListener("click", (event) =>{
  console.log("clicou")
  event.preventDefault() // previne o comportamento padrão do botão
})