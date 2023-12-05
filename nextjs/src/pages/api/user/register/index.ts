import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      console.log(req.body);

      const user = await prisma.user.create({
        data: {
          cpf: req.body.cpf,
          username: req.body.username,
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          college: req.body.college,
          course: req.body.course,
          phoneNumber: "",
        },
      });

      if (user) {
        res.status(200).json({ message: "Usuário registrado com sucesso." });
      } else {
        res
          .status(500)
          .json({ error: "Não foi possível registrar o usuário." });
      }
    } else {
      res.status(400).json({ error: "Método não suportado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Livro não existe na base de dados." });
  }
}
