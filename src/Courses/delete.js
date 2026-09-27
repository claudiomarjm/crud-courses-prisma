const prisma = require("../prismaClient");

// Altere o ID abaixo para o curso que deseja excluir
const COURSE_ID = 1;

async function deleteCourse(id) {
  const course = await prisma.course.delete({
    where: { id },
  });

  console.log("Curso excluído com sucesso:");
  console.log(course);
}

deleteCourse(COURSE_ID)
  .catch((e) => {
    console.error("Erro ao excluir curso (verifique se o ID existe):", e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
