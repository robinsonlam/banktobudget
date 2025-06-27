import type { Request, Response } from "express";
import { GetTransactionsQuery } from "../types/transactions.types";
import { getTransactions } from "../services/transactions.service.ts";

// * Note: Could probably paginate..
async function get(
  req: Request<{}, {}, {}, GetTransactionsQuery>,
  res: Response
) {
  try {
    const { startDate, endDate, provider } = req.query;

    if (!provider) {
      res
        .status(400)
        .json({ message: "get transactions - provider is required" });
      return;
    }

    if (!startDate || !endDate) {
      res.status(400).json({
        message: "get transactions - startDate and endDate is required",
      });
      return;
    }

    const result = await getTransactions({ startDate, endDate, provider });
    res.json(result);
  } catch (error) {
    console.error("get transactions - Error searching transactions:", error);
    res
      .status(500)
      .json({ message: "get transactions - internal server error" });
  }
}

export default {
  get,
};
