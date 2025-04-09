# Hoisting

* Hoisting(Levantar ou içar) se refere ao comportamento do interpretador de mover as declarações de variaveis e funções para o topo do escopo em que foram definidas, antes mesmo da execução do código.

* Esse comportamento possibilita usar uma variavel ou função antes que ela estaja definida

# Hoisting de variáveis

* Todas as declarações de variáveis são movidas para o topo do seu escopo independente de onde tenha sido declarada, ela estará disponivel para uso em todo o escopo em que foi definida.

* Importante: mesmo que as declarações de variáveis sejam movidas para o topo do escopo, elas ainda precisam ser declaradas antes de serem utilizadas. Caso contrario, voce receberá uma referência indefinida(undefinded)


# Hoisting de variaveis

* todas as declarações de funções tambem são chamadas para o topo do seu escopo. isso significa que voce pode chamar uma função antes mesmo de declará-la.

* Essa caracteristica do JavaScript permite que voce organize seu codigo de forma mais intuitiva, definindo as funções em qualquer ordem que desejar.
