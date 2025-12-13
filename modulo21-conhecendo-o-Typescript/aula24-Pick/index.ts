interface Book {
  title: string
  pages: number
  author: string
}

interface BookPreview {
  title: string
}

const book11: BookPreview = { title: "Typescript" }
const book22: Pick<Book, "title" | "pages"> = { title: "Typescript", pages: 100 }
// Pick vai possibilitar chamar somente o elemento que vai ser atribuido