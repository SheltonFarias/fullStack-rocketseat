# React

- Biblioteca JS, mantida pelo facebook
- Permite criar interfaces interativas e dinamicas, com abordagem declarativa

- facilita a construção de componente reutilizaveis, que refletem mudanças de estados

## Virtual dom

- representação em memoria da DOM real, permitindo que o react calcule de maneira eficiente as mudanças necessarias na interface do usuario

- Quando o estado de um componente muda, o React cria um novo virtual DOM e o compara com o anterior. Ele então aplica as mudanças necessarias à DOM real de maneira otimizada

- Se tratando de uma SPA - Single Page Aplication

- o React faz a rederição e criação da tag html e programação atraves de main.tsx que e que insere diretamente no html

## Componentes
um componente é como se fosse um lego, tendo peças especificas mas tendo a possibilidade de reutilização de peças

### Beneficios da componentização
- Reutilização de código
- Produtividade
- Isolamento de contexto
- Legibilidade de código
- Redução da complexidade
- Arquivos menores
- Padronização do projeto

## Hooks
- Permite usar estados e outros recursos sem escrever classes
- Facilita reaproveitamento da logica

### useState
- Permite adicionar uma variavel de estado no componente

### useEffect
- Utilizado no ciclo de vida do componente e permite trabalhar com side-effects(efeitos colaterais)