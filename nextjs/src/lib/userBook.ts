export function getAvailability(availability: Map<string, boolean>) {
  if (Array.from(availability.values()).every((value) => value === true)) {
    return "Empréstimo ou Troca";
  } else if (availability.get("trade")) {
    return "Troca";
  } else if (availability.get("borrow")) {
    return "Empréstimo";
  } else {
    return "Indisponível";
  }
}

