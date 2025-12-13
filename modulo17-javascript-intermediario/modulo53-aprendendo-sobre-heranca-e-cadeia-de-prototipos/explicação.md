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