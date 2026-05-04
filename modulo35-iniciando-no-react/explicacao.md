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

## Render
- Antes dos seus componentes serem exibidos na tela eles devem ser renderizados pelo React

### Razões para renderizar componente
- Quando é a renderização inicial do componente
=> Quando o seu aplicativo é iniciado a renderização inicial é acionada

- O estado do componente Mudou
=> A atualização do estado do componente enfileira automaticamente uma renderização. Você pode imaginar o cliente do restaurante pedindo mais coisas.

Depois de acionar uma renderização o React chama seus componentes para descobrir o que exibir na tela
- Rendering é o React chamando seu componentes
- Na renderização Inicial, o React chamará o componente raiz
- Para renderização o React chamara o componente de função cuja atualização de estado acionou a renderização

- Esse processo é recursivo. O componente também pode disparar um gatilho para renderizar algo seguida, e assim por diante
- O processo continuara até que não haja mais componentes aninhados e o React saiba exatamente o que deve ser exibido na tela

- Apos renderizar seus componentes, o React modificara o DOM.
-- Para renderização inicial o React usará a API DOM para colocar todos os nós criados na tela
-- Para re-renderização o React aplicará as opereações minimas necessarias(calculadas durante a renderização) para fazer o DOM corresponder à saida de renderização mais recente

Qualquer atualização de tela em um aplicativo React em tres etapas
1 - Acionar
2 - Renderizar
3 - Comprometer-se

## UseEffect
- Utilizado no ciclo de vida do componente quando o componente é renderizado, Permite trabalhar com side-effects (efeitos colaterais)

- Precisa esta dentro de um componente