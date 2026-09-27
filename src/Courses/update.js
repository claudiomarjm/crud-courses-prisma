const prisma = require("../prismaClient");

// Altere o ID e os dados abaixo conforme necessário
const COURSE_ID = 1;
const UPDATED_DATA = {
  title: "Introdução ao Prisma ORM (Atualizado)",
  published: true,
};

async function updateCourse(id, data) {
  const course = await prisma.course.update({
    where: { id },
    data,
  });

  console.log("Curso atualizado com sucesso:");
  console.log(course);
}

updateCourse(COURSE_ID, UPDATED_DATA)
  .catch((e) => {
    console.error("Erro ao atualizar curso (verifique se o ID existe):", e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
