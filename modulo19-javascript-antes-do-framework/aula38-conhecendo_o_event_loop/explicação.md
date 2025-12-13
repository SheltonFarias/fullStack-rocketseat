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

```

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


```