class AppError{
  format() {
    throw new Error("Method not implemented.")
  }
  message: string
  statusCode: number

  constructor(message: string, statusCode:number = 400){
    this.message = message
    this.statusCode = statusCode
  }
}

export { AppError }