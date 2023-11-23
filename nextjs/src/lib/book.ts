import { prisma } from "../../prisma/prisma";

export async function getCategory(category: string) {
  const shelf = await prisma.book.findMany({
    where: { category: category },
  });

  return shelf
}
