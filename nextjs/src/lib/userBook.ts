import { prisma } from "../../prisma/prisma";

export function getAvailability(availability: Boolean[]) {
  if (availability[0] && availability[1]) {
    return "Empréstimo ou Troca";
  } else if (availability[0]) {
    return "Empréstimo";
  } else if (availability[1]) {
    return "Troca";
  } else {
    return "Indisponível";
  }
}

export async function registerUserBook(props: {
  isbn: string;
  email: string;
  condition: string;
  period: number;
  forLoan: boolean;
  forTrade: boolean;
}) {
  const userBook = await prisma.userBook.create({
    data: {
      isbn: props.isbn,
      email: props.email,
      condition: props.condition,
      maxPeriod: props.period,
      forLoan: props.forLoan,
      forTrade: props.forTrade,
      avaliable: true,
    },
  });
}
