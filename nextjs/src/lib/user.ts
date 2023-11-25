import { prisma } from "../../prisma/prisma";

export async function getCurrentUser(email: string) {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  return user;
}
