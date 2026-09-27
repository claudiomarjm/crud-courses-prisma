const prisma = require("../prismaClient");

async function createCourse() {
  const course = await prisma.course.create({
    data: {
      title: "Introdução ao Prisma ORM",
      description: "Curso sobre modelagem de dados e operações CRUD com Prisma",
      published: true,
    },
  });

  console.log("Curso criado com sucesso:");
  console.log(course);
}

createCourse()
  .catch((e) => {
    console.error("Erro ao criar curso:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
