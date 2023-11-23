import { prisma } from "../../prisma/prisma";

export async function getBookRequests(bookIsbn: string) {
  const requests = await prisma.userBook.findMany({
    where: { isbn: bookIsbn, avaliable: true },
  });

  return requests
}
