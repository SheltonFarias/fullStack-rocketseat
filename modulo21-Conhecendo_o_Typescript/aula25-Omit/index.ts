interface Book10 {
  title: string
  pages: number
  author: string
  description: string
}

const book10: Omit<Book10, "description" | "author" | "title"> = { pages: 10  }
// Omit usado para reaproveitar um tipagem informando quais seram omitidos