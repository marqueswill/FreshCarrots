import { prisma } from "../../prisma/prisma";

export async function getUser(email: string) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  return user;
}
