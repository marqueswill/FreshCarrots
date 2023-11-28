import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      console.log(req.body);

      const userBook = await prisma.userBook.create({
        data: {
          isbn: req.body.isbn,
          email: req.body.email,
          condition: req.body.condition,
          maxPeriod: req.body.period,
          forLoan: req.body.forLoan,
          forTrade: req.body.forTrade,
          avaliable: true,
        },
      });

      if (userBook) {
        res.status(200).json({ message: "Livro registrado com sucesso." });
      } else {
        res.status(500).json({ error: "Erro ao registrar o livro." });
      }
    } else {
      res.status(400).json({ error: "Método não suportado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao registrar o livro." });
  }
}
