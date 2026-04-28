### Propriedade de Alinhamento do Grid

Existem 9 propriedades fundamentais

**6 aplicadas em container**
`aling-content`
`justify-content`
`place-content`

`align-items`
`justify-items`
`place items`

**3 aplicadas em itens**
`align-self`
`justify-self`
`place-self`

Então podemos separar em 3 grupos:
`align`, `justify`, `place`

E cada um deles ira observar ou o

- conteudo do elemento `content`
- itens do elemento `items`
- o propio elemento `self`

## PROPRIEDADES FUNDAMENTAIS

Todo grid é composto de 2 principais grupos:
`container: o pai` e `itens: o(s) filhos`

---

### CONTAINER (pai)

- display: grid
- grid-template-columns
  - grid-template-columns
  - grid-template-rows
  - grid-template-areas
- gap
  - row-gap
  - column-gap

---

### ITENS (filhos)

- grid-column;
  - grid-column-start;
  - grid-column-end;
- grid-row;
  - grid-row-start;
  - grid-row-end

### Propriedade de Alinhamento do Grid

Existem 9 propriedades fundamentais

**6 aplicadas em container**
`aling-content`
`justify-content`
`place-content`

`align-items`
`justify-items`
`place items`

**3 aplicadas em itens**
`align-self`
`justify-self`
`place-self`

Então podemos separar em 3 grupos:
`align`, `justify`, `place`

E cada um deles ira observar ou o

- conteudo do elemento `content`
- itens do elemento `items`
- o propio elemento `self`

# Tipos

- JavaScript é uma linguagem dinâmica com tipos dinâmicos. Isso significa que o tipo da variável é definida dinamicamente pelo tipo do valor atribuído (não é necessario declarar o tipo)

- Além disso, é possivel reatribuir uma mesma variável com um tipo diferente

# Tipos Primitivos

- String

- Number

- boolean

- null

- undefined

# Operadores

- Operadores são simbolos que realizam operações em operadores (valores ou variáveis)

- São utilizados para manipular e comparar valores, realizar operações aritméticas, logicas, de atribuição, entre outras

# Expressão

- Uma expressão é uma combinação de valores, variáveis, operadores e chamadas de função que, quando avaliada, resulta em um valor.

# Ordem de Precedencia

- Quando uma expressão contém mútiplos operadores, na programação e em expressões matemáticas, a ordem de precedencia define qual oporação será realizada primeiro

# Estrutura de condição

- Permite executar diferentes ações com base em uma condição(verdadeira ou falsa)

As estruturas de condição são utilizadas para a tomada de decisões, permitindo que o fluxo de execução seja direcionado com base em condições

# Exceções

- Uma exceção é uma condição ou evento imprevisto que ocorre durante o uso da aplicação que interrompe o fluxo normal e operações

- Essas situações inesperadas podem incluir erros, condições de falha ou eventos que a aplicação não está preparada para lidar

## Exemplo

- tentativa de abrir um arquivo que não existe ou falha na conexão com um banco de dados

# Funções

- É um bloco de código que realiza uma tarefa especifica ou calcula um valor

- Ela é definida uma vez e pode ser chamada (ou invocada) várias vezes

- Funções ajudam a organizar o código, tornando-o reutilizavel e mais fácil de entender

# Dom

- O DOM (Document Object Model) é a representação de dados dos objetos que compõesm a estrutura e o conteúdo de um documento na Web(uma página HTML é um documento).

- O DOM representa o documento com nós e objetos(estrutura de árvore) que pode ser acessado e modificado.

# Expressões Regulares

- É utilizado para identificar se uma ocorrencia ou padrão existe em uma string.

- Um padrão de expressão é composto por um conjunto de caracteres ou uma combinação de caracteres simples e especiais

# Debug

- Depuração de código é o processo de encontrar e corrigir erros(bugs)

# Breakpoint

- É um ponto no código-fonte onde a execução do programa será pausada quando atingir esse ponto específico para que voce possa inspecionar o estado do programa

# Inspecionar

- Inspecionar permite examinar o código-fonte para entender a lógica e a estrutura da aplicação

# Objetos

- Um objeto é uma estrutura que representa algo com propriedades e comportamentos

## Propiedades

- imagine que voce tem um carro. Esse carro é um objeto
- ele tem várias características(propriedades)

## Metodos

- Alem de caracteristicas(propriedades), o carro pode fazer coisas(comportamento)

# Array

- array é uma coleção ordenada de valores

- Podemos compara um array a uma lista, onde cada item da lista possui uma posição especifica, conhedica como índice

## Exemplo

- Pense em uma caixa de correio com vários compartimentos numerados. Cada compartimento é como uma posição no array, e dentro de cada compartimento, voce pode armazenar algo, como uma carta.

- Os compartimentos são numerados de forma ordenada, começando do 0 e indo até o número total de compartimentos menos um.

// criando Array com construtor

const newArray = new Array()
console.log(newArray)
console.log("teste".length)

// retorna o tamanho do array
console.log(newArray.length)

// {} object
// [] array

// cria o array com 10 posições vazias
const available = new Array(10)
console.log(available)
console.log(available.length)

# Array

- array é uma coleção ordenada de valores

- Podemos compara um array a uma lista, onde cada item da lista possui uma posição especifica, conhedica como índice

## Exemplo

- Pense em uma caixa de correio com vários compartimentos numerados. Cada compartimento é como uma posição no array, e dentro de cada compartimento, voce pode armazenar algo, como uma carta.

- Os compartimentos são numerados de forma ordenada, começando do 0 e indo até o número total de compartimentos menos um.

# Timestamp

- uma data é representada como um número. Esse número também é conhecido como timestamp(carimbo de data/hora)

- O timestamp é um valor que representa um ponto específico no tempo, geralmente expresso como uma contagem de segundos ou milissegundos um momento de referência

## Referencia

- A data do JavaScript é baseado no valor de tempo em milissegundos desde a meia noite de 01 de janeiro de 1970, UTC

## Fuso horário

- Sempre há duas maneiras de interpretar data e hora:
  local ou como Tempo Universal Coordenado (UTC).

- O fuso horário local não é armazenado no objeto de data, mas é determinado pelo ambiente que está executando(dispositivo do usuário)

// intl é API de internacionalização do ECMAScript

# Classes

- No JavaScript as classes são uma forma de criar objetos e definir seu comportamento por meio de construtores e métodos

- Elas foram introduzidas no ECMAScript 2015 (também conhecido ES6) para fornecer uma sintaxe mais amigavel para a criação de objetos e herança de protótipos (syntax sugar).

## Contrutores e Métodos

- Uma classe é basicamente um modelo para criar objetos. Ela contém um construtor, que é um método especial chamado quando um objeto é instanciado a partir da classe.

- Além do construtor,você pode adicionar métodos a uma classe. Métodos são funções associadas a objetos e descrevem o comportamento desses objetos.

## Herança

- Uma classe pode herdar propriedades e métodos de outra classe, permitindo a reutilização de código

# Classes X Prototype

- JavaScript é dinamico e não dispõe de uma implementação de uma class (a palavra-chave class foi introduzida no ES2015, mas é syntax sugar, o javascript permanece baseado em prototype).

# Prototype

- Quando se trata de herança, o JavaScript tem somente um construtor:objetos. Cada objeto tem um link interno para um outro objeto chamado prototype.

- O objeto prototype também tem um atributo prototype, e assim por diante até o que o valor null seja encontrado como sendo o seu prototype. O mull que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos(prototype chain).

# Resumo

- Quando um objeto é criado ele possui automaticamente um propriedade que referência outro objeto e esse objeto é chamado de prototype

- O objeto prototype herda propriedades não pertencentes ao objeto em si, mas sim ao prototype do objeto

- O prototype é o mecanismo pelo qual os objetos de JavaScript herdam recursos uns dos outros

- A cadeia termina quando chegamos a um prototipo que tem null por protótipo

- Um objeto pode utilizar qualquer propriedade ou método que existir nesse encadeamento de prototipos

# Classes

- No JavaScript as classes são uma forma de criar objetos e definir seu comportamento por meio de construtores e métodos

- Elas foram introduzidas no ECMAScript 2015 (também conhecido ES6) para fornecer uma sintaxe mais amigavel para a criação de objetos e herança de protótipos (syntax sugar).

## Contrutores e Métodos

- Uma classe é basicamente um modelo para criar objetos. Ela contém um construtor, que é um método especial chamado quando um objeto é instanciado a partir da classe.

- Além do construtor,você pode adicionar métodos a uma classe. Métodos são funções associadas a objetos e descrevem o comportamento desses objetos.

## Herança

- Uma classe pode herdar propriedades e métodos de outra classe, permitindo a reutilização de código

# Imutabilidade

Uma vez algo imutável é criado você não pode modificar seus valores ou propriedades. Em vez disso, voce cria uma cópia modificada para manter o original inalterado.

# Estratégia

Geralmente há duas maneiras de alterar dados. A primeira é mutar o dado alterando diretamente seu valor.

A segunda maneira é substituir o dado antigo por uma nova cópia com alterações desejadas.

# Na criação de interface

A imutabilidade é utilizada para otimizar a atualização do DOM(Document Object Model) e para fornecer um modelo mais previsível no desenvolvimeto de interfaces (UI)

## Detectar mudanças

Detectar mudanças e objetos é difícil, como são modificados diretamente a detecção do que mudou exatamente requer um objeto mutado para ser comparado com as cópias da suas próprias versões anteriores e a árvore inteira do objeto para ser cruzada.

Detectar mudanças em objetos imutáveis é considerado fácil. Se ele for diferente do anterior, concluimos que o objeto foi alterado

## Benefício

Como os dados imutáveis podem determinar facilmente se ocorreram alterações, isso também ajuda a determinar quando um componente deve ser renderizado novamente.

# ES Modules

- ESM é o sistema de módulo Javascript (ESM é uma abreviação par Módulos Javascript, em que "EcmaScript" é o nome oficial da especificações da linguagem Javascript

Define um formato para organizar e estruturar o código em módulos, permitindo a modularização e reutilização de código
)

## Principais Caracteristicas

- Módulos: encapsulamento de código em módulos, permitindo a separação de responsabilidade e reutilização de código

- Import: usado para incluir módulos

- Export: Usado par expor funcionalidades de um módulo para outros

# Funções Assíncronas

- Quando um função assíncrona é chamada, ela retorna uma Promise.

- Quando a função assíncrona retorna um valor, a promise será resolvida com o valor retornado

- Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com valor lançado.

- Uma função assincrona pode conter uma expressção await, que pausa a execução da função assincrona e espera pela resolução da promise passada, e depois retoma a execução da função assícrona e retorna o valor resolvido

# 🧠 JavaScript Runtime e Event Loop

Este documento resume os principais conceitos relacionados à execução de código no JavaScript, com foco em comportamento assíncrono, event loop, microtasks e macrotasks.

---

## 📘 Características do JavaScript Runtime

### 🧵 Single Threaded

- JavaScript é **single-threaded**: executa **uma tarefa por vez**.
- Utiliza uma **Call Stack** (pilha de chamadas) para gerenciar a execução de funções.

### 🚫 Non-Blocking

- Operações demoradas (como requisições HTTP ou timers) **não bloqueiam** o fluxo do programa.
- Isso é possível graças ao **modelo assíncrono** e às **Web APIs** (no navegador) ou bindings do Node.js.

### 🔁 Assíncrono

- Para lidar com tarefas que demoram a retornar (como I/O), usamos:
  - `callbacks`
  - `Promises`
  - `async/await`

### ⚔️ Concorrência

- Tarefas assíncronas **concorrerão** entre si para serem executadas assim que possível.
- O controle disso é feito pelo **Event Loop**, que define a ordem de execução.

---

## 🔄 Event Loop

O **Event Loop** é o mecanismo que coordena a execução entre tarefas síncronas e assíncronas.

### Como funciona:

1. O código síncrono é executado na **Call Stack**.
2. Tarefas assíncronas (como `setTimeout`, `fetch`, etc.) são delegadas para as **Web APIs**.
3. Após concluídas, seus callbacks são enviados para:
   - **Microtask Queue** (alta prioridade)
   - **Callback Queue** (macrotasks)
4. O Event Loop:
   - Verifica se a **Call Stack** está vazia.
   - Executa todas as **microtasks** pendentes.
   - Executa **uma** macrotask.
   - Repete o processo.

---

## 🧠 Microtasks vs Macrotasks

### Microtasks (Alta prioridade)

- Executadas **antes de qualquer macrotask**.
- Exemplos:
  - `.then()` de Promises
  - `queueMicrotask`

### Macrotasks (Menor prioridade)

- Executadas **após as microtasks**.
- Exemplos:
  - `setTimeout`, `setInterval`
  - `setImmediate` (Node.js)
  - Callbacks de eventos do DOM

---

## 📌 Fluxo Geral

````

---

## 💡 Exemplo Prático

```js
console.log('Inicio');

setTimeout(() => {
  console.log('Macrotask - Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask - Promise');
});

console.log('Fim');


````

# Pacotes

- Pacotes (ou bibliotecas) fornecem funcionalidades prontas que voce pode reutilizar em seus própios projetos. Isso economiza tempo e esforço, evitando a necessidade de reescrever funcionalidades.

- Você pode acelerar o desenvolvimento, porque não precisa criar tudo do zero. Isso é especialmente útil para tarefas repetitivas ou padrões comuns

## Distribuição

- Bons pacotes são mantidos pela comunidade ou por organizações dedicadas. Isso significa que elas são atualizadas para corrigir bugs, melhorar o desempenho e fornecer novo recursos.

- Ao usar pacotes, você pode se beneficiar dessas atualizações sem ter que implementá-las você mesmo.

# Gerenciador de Pacotes

- É uma ferramenta que facilita a instalação, atualização e gerenciamento de bibliotecas e dependências de um projeto.

- O gerenciador de pacotes lida com a resolução de dependências, garantido que as bibliotecas necessarias estejam disponiveis e em versões compatíveis.

# NPM

- O npm(Node Packege Manager) é um dos gerenciadores de pacotes mais populares para javaScript.

- Usado principalmente no ecossistema do Node.js, mas também é amplamente utilizado em projetos front-end web.

- O npm permite isntalar e gerenciar pacotes JavaScript. Tambem permite executar scripts e bibliotecas instaladas

# Dependências e Ambiente

Produção

- Inclui as dependencias(pacotes/bibliotecas) necessárias para a execução do projeto em um ambiente de produção.

Desenvolvimento

- Inclui as dependencias que são necessarias apenas durante o desenvolvimento, mas não são necessarias para a execução do aplicativo em produção(por exemplo transpiladores)

# Versionamento semântico

- Padrão de atualizações de versões que oferece um modelo fácil de entender o que mudou em uma versão.
  ex: 9.1.3

9 => major(Versão principal): Aumenta quando são feitas alterações incompatíveis. Isso significa que, se você atualizar para uma versão principal, pode haver alterações que quebrarão a compatibilidade com versões anteriores.

1 => minor(Versão Menor): Aumenta quando são adicionados novas funcionalidades de maneira compativel com versões anteriores. As atualizações de versão menor não devem introduzir alteraçẽos que quebram a compatibilidade com código existente

3 => Patch(Versão de Correção): Aumenta quando são feitas correções de bugs compatíveis com versões anteriores. Isso significa que essa correções não devem introduzir novas funcionalidades ou quebrar a compatibilidade.

# API

- Uma API(Application Programming Interface) é uma interface que disponibiliza um conjunto de funcionalidades par serem utilizadas.

Exemplos: API e CEP, previsão do tempo, cotação de moedas, etc

# JSON

O JSON (JavaScript Object Notation), significa JavaScript Object Notation. É uma notação de objetos utilizado para representar dados

É amplamente utilizado na comunicação entre servidores e clientes

# Compilador JavaScript

- Converte código escrito em uma versão especifica do JavaScript (ECMAScript) para outra versão, permitindo usar recursos mais recentes da linguagem mesmo em ambientes que não oferecem suporte a essas funcionalidades (por exemplo, em navegadores mais antigos)

# Transpilação

- A transpilação tambem é um termo utilizado para se referir a compilação par versões anteriores

Parser

- Mapeia todos os elementos do codigo JS

Transformer

- Manipula os elementos JS para gerar o novo codigo Compativel

Generator

- Gera o código Javascript

{
"scripts": {
"build": "babel main.js --out-dir ./dist"
},
"devDependencies": {
"@babel/cli": "^7.27.2",
"@babel/core": "^7.27.4",
"@babel/preset-env": "^7.27.2"
}
}
{
"scripts": {
"build": "babel main.js --out-dir ./dist"
},
"devDependencies": {
"@babel/cli": "^7.27.2",
"@babel/core": "^7.27.4",
"@babel/preset-env": "^7.27.2"
}
}

# Bundlers

- Agrupa(empacota) diversos arquivos e suas dependências em uma ou mais pacotes com o objetivo de otimizar o carregamento de paginas Web.

# Funcionamento

- No geral, a operação de um empacotador é dividida em duas etapas:
- Geração de grafico de dependência e empacotamento.

# Mapeando um Grafico de dependencias

- A primeira coisa que um empacotador de modulo faz é gerar um mapa de relacionamento de todos os arquivos servidos. Este processo é denominado Resolução de Dependências.

- O empacotador requer um arquivo de entrada (geralmente o arquivo principal). Em seguida analisa o arquivo de entrada para entender suas dependencias

- Depois disso, Ele percorre as dependencias para determinar as depencias dessas dependencias

# Agrupamento

- Depois de receber as entradas e passar por suas dependencias durante a fase de resolução de dependencias, um bundler entrega ativos estaticos que o navegador pode processar com exito.

- Este estagio de saida é denominado de packing. Durante esse processo, o empacotador aproveitará a resolução de dependencia para integrar nossos varios arquivos de codigo e retornar um unico pacote para o navegador carregar

# TypeScript

Javascript

Liguagem não-tipada. pode criar variavel para receber conteudo de tipos diferentes

Deixando a linguagem bastante flexivel

Em grande escala é importante definir regras

Typescript => Adiciona tipagem ao JS
No final o TS e convertido em JS permitindo ser executado em qualquer lugar

Vantagens do TS

- Feedback mais rapido de erros
- Antecipa erros que seriam visto em execução
- Ajuda a manter o código consistente
- Ajuda no trabalho em times
- Processo de refatoração mais fácil
- Recurso de Autocomplete
- Pode adotar gradualmente TS em uma base de codigo

# Node.js

- Não é uma linguagem de programação. Javascript é uma Linguagem de programção que o Node é capaz de executar

## Single Thread

- Há uma única thread principal que executa o código JavaScript. Esse ùnico thread é resposavel por lidar com todas as requisições, executar funções e gerenciar operações de I/O (input e output)

- A eficiêcia vem do fato de que esse thread não fica bloqueado esperando que as operações de I/O terminem; em vez disso, ele delega essas operações e continua processando outras tarefas

Unica Thread principal que executa o codigo Javascript

- Call Stack => Lista de tarefa

- Event Loop => Monitora a call Stack e a fila de eventos (event queue). Se a Call Stack estiver vazia e paga e proxima tarefa da fila

## API => Application Programming Interface

Oferece funcionalidades sem a necessidade de saber como foram implementados

# Metodos HTTP

- Get => Leitura

- Post => Criação

- Put => Atualizar

- Delete => Deletar

- Patch => Atualização Parcial

# Enviando dados

- Quando um cliente (como um navegador) envia uma requisição HTTP para um servidor, essa requisição pode incluir dados em um corpo (body).

# middleware

- um segurança para a requisição onde nates de ocorrer a requisição ele valida se pode ou não prosseguir

# schema Validation

- Permite criar regras de validação para garantir que os dados recebidos ou manipulados seguem em conjunto predefinido de regras. Essas regras são definidas em um esquema, que descreve a forma esperada dos dados, incluindo tipos de dados, formatos e restrições

npm i typescript@5.5.4 @types/node@20.14.12 -D

- node não consegue executar por padrão Typescript
- comando executado => npx tsc src/server.ts

- instalação como npm i tsx@4.16.2 -D

- executado npx tsc --init => cria uma arquivo tsconfig.json

## express

- Framework flexivel e minimalista para Node.js, lida como requisições

- npm i express@4.19.2
- npm i --save-dev @types/express => instalar a tipagem para o typescript

## Controller

- Vai apresentar os metodos => create,update,remove,show

//exemplo de solicitação pegando parametros da pagina
productsRoutes.get("/products", (request, response) => {
// /products?page=1&limit=10
const {page, limit} = request.query
response.send(`Pagina ${page} de ${limit}`)
})

// Aplicando o middlewaware nessa rota
productsRoutes.post("/products", myMiddleware, (request, response) => {
const {name, price} = request.body

response.status(201).json({name, price, user_id: request.user_id})
})

# schema validation

- Permite criar regras de validação para garantir que os dados recebidos ou manipulados seguem em conjunto predefinido de regras. Essas regras são definidas em um esquema, que descreve a forma esperada dos dados, incluindo tipo de dados, formatos de restrições

- npm i zod@3.23.8 => instalação do validador de schemas

# API RESTful

- É uma API que segue os principios da arquitetura REST(Representational State Transfer)

- Rest é modelo de arquitetura e não uma linguagem ou tecnologia de programção, que fornece diretrizes para criar aplicações distribuidas que se comuniquem utilizando os principios protocolos da web

- São amplamente utilizadas na web devido a sua simplicidade e escalabilidade

## Principios

- Client-server => Separa a interface do usuario(cliente) das preocupações de armazenamento(servidor).

- Stateless => Cada requisição do cliente para o servidor deve conter todas as informações necessarias para o servidor entender e processar a requisição. O servidor não armazena nenhuma informção sobre o estado do cliente entre as requisições.

- Resource-Based => Ao projetar uma API de acordo com a abordagem "Resource-Based" voce esta seguindo a restrição de uma interface uniforme ao criar recursos claramente identificamos e redefinir como eles podem ser manipulados usando métodos HTTP especificos.

# Banco de dados relacional organiza dados em tabelas estruturadas, com linhas e colunas. E estabelece relações lógicas entre essas tabelas com base em chaves comuns.

## Tabela

- Uma tabela é uma estrutura de armazenamento fundamental em um banco de dados relacional

- Escrever o nome das tabelas no plural

### Linhas e colunas

- Cada tabela é composta por linhas (também chamadas de registros ou tuplas) e colunas(também chamadas de campos ou atributos)

### Primary Keys

- chaves primarias, identifica exclusivamente cada registro em uma tabela. A chave primária garante que cada registro seja único dentro da tabela

# SQLite

- É um banco de dados relacional, leve auto suficiente e totalmente funcional

- Arquivo unico: todos os dados, incluindo definições de tabelas, índices e a propria informação armazenada, são mantidos em um único arquivo de disco

- Auto suficiente: O SQLite não depende de nenhuma instalação externa ou configuração de servidor, e pode ser incorporado diretamente em uma aplicação

# SQL

- Structured Query language ou Linguagem de consulta estruturada
- É uma linguagem padrão para gerenciar e manipular bancos de dados relacionais.

Usada para criar modificar e consultar dados em bancos de dados

# Tipos de dados

- Determinam qual será o conteudo de cada dado, que tipo de dado cada coluna irá armazenar em uma tabela

- Usar comandos SQL em CAIXA ALTA

- Quando for nome composto usar \_ por exemplo: products_category

# Relacionamentos

- Definem como as tabelas se conectam e interagem entre si

- Permitem que os dados sejam organizados de forma lógica e estruturada baseada em chaves primárias e estrangeiras

# Chave primaria e estrangeira

- Chave primaria(PK): Identificador único para cada registro em uma tabela

- Chave Estrangeira(FK): Campo que referencia a chave primaria em outra tabela, estabelecendo uma ligação entr duas tabelas.

# Um para Um (1:1)

- Quando um registro em uma tabela está associado a um único registro em outra tabela.

# Um para Muitos (1:N)

- Quando um registro em uma tabela pode estar associado a muitos registros em outra tabela

# Muitos para Muitos(N:M)

- Muitos registro em uma tabela podem estar associados a muitos registros em outra tabela.

# Query Builder

- Permite construir instruções SQL independente do banco de dados. O Query Builder permite escrever o código SQL utilizando métodos

# Migrations

- Mecanismo de gestão de mudanças de banco de dados que permite a manipulação da base de dados: criando, alterando ou removendo.
  E principalmente, o versionamento do banco de dados

# O que é docker

- Sistema de virtualização não convencional.

## Virtualização convencional

- Temos software instalado na máquina Host que irá gerenciar as máquinas virtuais (exemplos: Virtual box, VMWare e etc)

Para cada maquina temos uma instalação completa do sistema operacional alem de ter o proprio hardware virtualizado

## Containers

- Proporciona um ambiente isolado com os recursos que a sua aplicação precisa funcionar (como código, dependencias e bibliotecas necessarias para a executar a aplicação)

## Isolamento

- Kernel: Coração de um sistema operacional que faz a ponte entre o software e o hardware e controla processos, memória, dispositivos e chamadas do sistema.

- CGroups: é uma funcionalidade que controla e limita a alocação de recursos, tais como CPU, memoria, etc. O objetivo é não deixar que um conteiner monopolize os recursos do host para ter um ambiente equilibrado

- Namespace: Isola os recursos, um container so enxerga os seu proprios processos e arquivos

## Conceitos do Docker

- Dockerfile: Contém todas as informações necessarias para gerar a nossa imagem docker

- Imagem: Contém as informações de um ambiente com tudo que a nossa aplicação precisa para executar, por exemplo, codigo, dependencias e bibliotecas

- Container: É a instancia de uma imagem em execução ou seja, é o ambiente de uma imagem executando.

- Máquina Hospedeira (host): Poder ser uma maquina virtual rodando em uma maquina fisica como um servidor ou diretamente na maquina física como o nosso computador

docker build -t api -f .

docker run -p 3333:3333 api -d

docker build -t api:v1 . => usado para versionamento

docker logs name/id do container => vai trazer o logs do container

docker history name/id do container => vai trazer o historico

docker pause name/id do container => Vai pausar o container

docker rm id/name => vai remover o container

docker rm -f id/name => vai remover o container forcado

docker image ls

docker rmi id/name da imagem => vai remover a imagem

docker exec -it sh

docker container isnpect

-- criando volumes

docker volume create api-volume

docker volume inspect api-volume

(-v vai apontar o volume a ser usado)
docker run -v api-volume:/usr/src/app -p 3333:3333 -d api:v1

docker volume ls

docker volume rm api-volume (vai excluir o volume)

docker container prune (vai remover todos os containers parados)

-- criando um container atraves da imagem puxado do docker hub
docker run --name db-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5431:5432 -d bitnami/postgresql:latest

## Docker compose

- Ferramenta usada para definir e executar aplicações de vários contêineres do Docker.

- No Compose, um arquivo YAML é usado para configurar os serviços do aplicativo. Em seguida, voce cria e inicia todos os serviços com base ba sua configuração executando um só comando

- "version" => versao utilizada
- Service => cada container utilizado

# ORM (Object Relation Mapper)

- Ferramenta que permite interação com banco sem SQL

- Manipula dados, tabelas e etc, atraves de linguagem de programação

- Diferença entre ORM X Query Builder => nivel de abstração
  - ORM => converte tabelas do DB em JS
  - Query Builder => Ajuda a criar consultas SQL usando JS

npm i express-async-error@3.1.1

npm i prisma@5.19.1

npx prisma init --datasource-provider postgresql

Incremental x uuid

incremental => id e 1 em 1 Ex: 1, 2, 3 ...

uuid => Baseado num padrão de hash

npx prisma migrate dev

npx prisma db seed // comando para criar seed(mapear o banco)

# JWT (Json Web Token)

- Padrão de mercado que define um token no formato JSON
- Troca de informações de forma segura e compacta
- Dividio em Header, Payload, Verify signature

## Autenticação

- Processo de verificação de identidade do usuario

## Autorização

- Define permissões de um usuario autenticado

# Testes

- Permite identificar erros durante o desenvolvimento e assegurar a qualidade e o funcionamento correto da aplicação

# Teste Automatizado

- Utilização de ferramenta para automatizar processo manual conduzido por humanos de revisão e validação da aplicação

## Teste de unidade

- Testar uma função especifica da aplicação

## Teste de integração

- Testa login que envolve uma série de etapas

## Teste E2E

- Simula o uso da aplicação do ponto de vista do usuario final, automatizando tudo aquilo que um usuario real faria ao interagir com a aplicação

npm i jest@29.7.0 @types/jest@29.5.13 ts-jest@29.2.5 -D

npx jest --init => gera o arquvio
npm i supertest@7.0.0 @types/supertest@6.0.2 => instalando o supertest

# Ambientes

- Desenvolviemento => cria e testa na sua maquina
- Produção => Coloca sua aplicação em um servidor para manter sua aplicação sempre disponivel (24/7)

# Deploy

- Passo final para colocar seu projeto em produção, permitindo que usuarios reais interajam com sua aplicação

node --env-file=.env build/server.js comando para usar o .env na build para testar o funcionamento

# Versionamento Semântico

- A versão semântica é um padrão utilizado para identificar e comunicar alterações e compatibilidade entre as versões

  1.12.7 => 1 = Major(incompatibilidade), 12 = minor(novas funcionalidades), 7 = patch(correção de bugs)

Major => Significa que houve mudanças significativas que podem afetar a funcionalidade do programa ou causar problemas de compatibilidade com versões anteriores

Minor => Quando novas funcionalidades são adicionadas de uma maneira compativel com versões anteriores

Patch => Quando são feitas correções de bugs ou pequenas melhorias que não afetam a compatibilidade com versões anteriores

npm i express@1.1.1 o @ vai possibilitar escolher a versão

Ferramenta para ajudar a ver versões compativeis = npm SemVer(calculadora de versões)

npm outdated ou npm out => verificar versões das dependencias

npx npm-check-updates -u => vai atualizar os pacotes

npx npm-check-updates --interactive --format group

break change

changelog => ferramenta para verificar alterações na versão
