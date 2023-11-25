import { prisma } from "../../prisma/prisma";

export function getAvailability(availability: Boolean[]) {
  if (availability[0] && availability[1]) {
    return "Empréstimo ou Troca";
  } else if (availability[0]) {
    return "Troca";
  } else if (availability[1]) {
    return "Empréstimo";
  } else {
    return "Indisponível";
  }
}
