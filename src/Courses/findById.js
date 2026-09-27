const prisma = require("../prismaClient");

// Altere o ID abaixo para o curso que deseja buscar
const COURSE_ID = 1;

async function findCourseById(id) {
  const course = await prisma.course.findUnique({
    where: { id },
  });

  if (!course) {
    console.log(`Nenhum curso encontrado com o id ${id}.`);
    return;
  }

  console.log("Curso encontrado:");
  console.log(course);
}

findCourseById(COURSE_ID)
  .catch((e) => {
    console.error("Erro ao buscar curso:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
