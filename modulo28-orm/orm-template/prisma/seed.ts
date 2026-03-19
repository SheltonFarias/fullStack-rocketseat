import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data:[
      {
        name: "teste10",
        email: "teste10@teste.com"
      },
      {
        name: "teste11",
        email: "teste11@teste.com"
      },
      {
        name: "teste12",
        email: "teste12@teste.com"
      },
      {
        name: "teste13",
        email: "teste13@teste.com"
      },
    ]
  })
}

seed().then(() => {
  console.log("Database seeded!",
    prisma.$disconnect()
  )
})