import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bookIsbn = req.query.id;

  switch (req.method) {
    case "GET": {
      try {
        const menu = await prisma.book.findUnique({
          where: { isbn: bookIsbn },
        });

        if (menu) {
          res.status(200).json(menu);
        } else {
          const message: string = "Menu not found";
          res.status(400).json(message);
        }
      } catch (error) {
        const message: string = "Error trying to acess the database";
        res.status(500).json(message);
      } finally {
        await prisma.$disconnect();
      }
    }

    default:
      throw new Error(`The HTTP ${req.method} method is not supported`);
  }
}
