export async function jsonBodyHandler(req, res) {
  const buffers = [];

  // coleta os chunks de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    // concatenar os chunck e converter para string. Em seguida converte a string para JSON
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }
  
  // Define o header de resposta como JSON.
  res.setHeader("content-Type", "application/json")
}
