import express from "express";
import transactionsController from "../controllers/transactions.controller.ts";

const router = express.Router();

// * GET /orders (search orders)
router.get("/", transactionsController.get);

export default router;
