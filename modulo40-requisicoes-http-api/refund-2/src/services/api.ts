import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
})

// POST http://localhost:3333/users
// GET http://localhost:333/