# Funções Assíncronas

- Quando um função assíncrona é chamada, ela retorna uma Promise.

- Quando a função assíncrona retorna um valor, a promise será resolvida com o valor retornado

- Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com valor lançado.

- Uma função assincrona pode conter uma expressção await, que pausa a execução da função assincrona e espera pela resolução da promise passada, e depois retoma a execução da função assícrona e retorna o valor resolvido