export enum BankProvider {
  CBA = "CBA",
  WESTPAC = "WESTPAC",
}

export interface GetTransactionsQuery {
  startDate?: string; // ISO date string
  endDate?: string; // ISO date string
  provider: BankProvider;
}
