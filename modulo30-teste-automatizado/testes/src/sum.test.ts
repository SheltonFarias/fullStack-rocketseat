import { sum } from "./sum"

describe("sum", () => { // para agrupar os testes(describe)
  let sumResult: number

  beforeAll(() => { // executa antes dos testes
    sumResult = 10
    console.log("Executado antes dos teste", sumResult)
  })

  afterAll(() => { // executa depois dos testes
    sumResult = 0
    console.log("Executado depois dos teste", sumResult)
  })

  it("sum", () => {
    const result = sum(3, 7) // Chamo a funçaõ para testar
    console.log(sumResult)

    expect(result).toBe(sumResult) // expectativa do teste
  })

  test("sum of 2 + 2 must be 4", () => {
    const result = sum(2, 2)

    expect(result).toBe(4)
  })
})

// it tem a funçao de alias podendo usar it ou test