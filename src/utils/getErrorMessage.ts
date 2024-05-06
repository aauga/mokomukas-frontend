const message = new Map<number, string>([
  [400, "Neteisingai įvedėte duomenis. Pataisykite ir bandykite dar kartą."],
  [500, "Įvyko serverio klaida. Bandykite dar kartą."],
]);

export default function getErrorMessage(error: Error): string {
  const statusCode = parseInt(error.message.slice(-3));

  return message.get(statusCode) || message.get(500)!;
}
