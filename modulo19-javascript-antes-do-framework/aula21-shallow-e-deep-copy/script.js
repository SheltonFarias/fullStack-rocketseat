// Shallow copy (cópio superficial): não pega os itens aninhados
const htmlCourse = {
  course: "HTML",
  students: [{ name: "Rodrigo", email: "rodrigo@email.com" }],
};
/*
// const jsCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
// }

// vai modificar o htmlCourse tbm students é uma referencia e não uma cópia.
jsCourse.students.push({ name: "João", email: "joao@email.com"})


// Deep Copy (copia profunda)
// exemplo 1
// const jsCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
//   students: [...htmlCourse.students, {name: "joao", email: "joao@email.com"}]
// }

// exemplo 2
const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [...htmlCourse.students]
}

jsCourse.push({name: "joao", email: "joao@email.com"})
*/

const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
};

jsCourse.students = [
  ...htmlCourse.students,
  { name: "Joao", email: "joao@email..com" },
];

console.log;
