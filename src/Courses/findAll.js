const prisma = require("../prismaClient");

async function findAllCourses() {
  const courses = await prisma.course.findMany({
    orderBy: { id: "asc" },
  });

  console.log(`Total de cursos encontrados: ${courses.length}`);
  console.log(courses);
}

findAllCourses()
  .catch((e) => {
    console.error("Erro ao buscar cursos:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
