# React

- Biblioteca JS, mantida pelo facebook
- Permite criar interfaces interativas e dinamicas, com abordagem declarativa

- facilita a construção de componente reutilizaveis, que refletem mudanças de estados

## Virtual dom

- representação em memoria da DOM real, permitindo que o react calcule de maneira eficiente as mudanças necessarias na interface do usuario

- Quando o estado de um componente muda, o React cria um novo virtual DOM e o compara com o anterior. Ele então aplica as mudanças necessarias à DOM real de maneira otimizada

- Se tratando de uma SPA - Single Page Aplication

- o React faz a rederição e criação da tag html e programação atraves de main.tsx que e que insere diretamente no html