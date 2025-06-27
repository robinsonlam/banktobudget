import { GetTransactionsQuery } from "../types/transactions.types";

export async function getTransactions({
  startDate,
  endDate,
  provider,
}: GetTransactionsQuery) {
  console.log("Searching transactions with params:", {
    startDate,
    endDate,
    provider,
  });
  return {
    data: [],
  };
}
