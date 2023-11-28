import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../prisma/prisma";
import { useRouter } from "next/router";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      try {
        const existingLoan = await prisma.loan.findMany({
          where: {
            borrowerEmail: req.body.borrowerEmail,
          },
        });

        if (JSON.stringify(existingLoan) === "[]") {
          const loanRequest = await prisma.loan.create({
            data: {
              period: req.body.period,
              status: req.body.status,
              lenderBookId: req.body.lenderBookId,
              borrowerEmail: req.body.borrowerEmail,
            },
          });

          if (loanRequest) {
            const lenderBook = await prisma.userBook.update({
              where: { id: req.body.lenderBookId },
              data: { solicitations: { increment: 1 } },
            });
          }

          if (loanRequest) {
            res
              .status(200)
              // .json({message: JSON.stringify(existingLoan)})
              .json({ message: "Pedido de empréstimo realizado com sucesso." });
          } else {
            res
              .status(500)
              .json({ error: "Erro ao registrar o pedido de empréstimo." });
          }
        } else {
          res
            .status(400)
            .json({ message: "Você já realizou requisão desse exemplar." });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({
          error: JSON.stringify(req.body),
        });
      }
      break;
    }

    case "PUT": {
      try {
        const loanRequest = await prisma.loan.update({
          where: { id: req.body.id },
          data: { status: req.body.status },
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
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: JSON.stringify(req.body) });
      }
      break;
    }

    default: {
      res.status(400).json({ error: "Método não suportado." });
      break;
    }
  }
}
