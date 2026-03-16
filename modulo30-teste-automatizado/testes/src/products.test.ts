import request from "supertest"
import { app } from "./app"

describe("products", () => {
  it("should list product", async () => {
    const response = await request(app).get("/products")
    console.log(response.body)
  })
})

// npx jest src/products.test.ts