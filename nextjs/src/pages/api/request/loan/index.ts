import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";
import { useRouter } from "next/router";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const loanRequest = await prisma.loan.create({
        data: {
          period: req.body.period,
          status: req.body.status,
          lenderBookId: req.body.lenderBookId,
          borrowerEmail: req.body.borrowerEmail,
        },
      });

      if (loanRequest) {
        res
          .status(200)
          .json({ message: "Pedido de empréstimo realizado com sucesso." });
      } else {
        res
          .status(500)
          .json({ error: "Erro ao registrar o pedido de empréstimo." });
      }
    } else {
      res.status(400).json({ error: "Método não suportado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: JSON.stringify(req.body),
    });
  }
}
