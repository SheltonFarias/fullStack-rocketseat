# Caracteristica

### single threaded
- Executa uma coisa por vez


### no-blocking
- Não trava o contexto da execução


### asynchronous
- Por ser no-blocking precisa utilizar um paradigma assincrono para lidar com a execução das coisas.


### concurrent
As tarefas que executam assincronamente concorrem uma com as outras pelo processamento.

Event loop
- Tudo passa pela Call Stack. Algumas tarefas serão resolvidas nele mesmo e outras somente irá passar pela Call Stack sem fazer nada e será resolvida em alguma Web Api

- O Event Loop é quem fica chegando constantemente a Call Stack e Callback Queue


# micro e Macro Tasks
Existem dois tipos principais de tarefas na fila de callback.

### Microtasks:
- São tarefas de alta prioridade que são executadas antes das macrotasks (Temporizados e promises)

### Macrotasks:
- São tarefas de menor prioridade, como callbacks de eventos, setTimeout e setInterval


# Resumo

.1 Execução de codigo:
- O codigo sícrono é executado de cima para baixo,empilhando e desempilhando funções conforme necessário


.2 Eventos Assícronos:
- Quando ocorrem eventos assincronos, como uma requisição concluida, o callback corresponde é enfileirado na fila de callback

.3 Verificação do Event Loop:
- O Event Loop verifica a pilha de chamadas e a fila de callback. Se a pilha estiver vazia, ele move um callback da fila de callback para a pilha de chamadas.

.4 Microtasks:
- Antes de verificar novamente a fila de callback, o Event Loop executa todas as microtasks pendentes