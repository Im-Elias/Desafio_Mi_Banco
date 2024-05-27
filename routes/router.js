import { Router } from "express";
import { getTransfers, getBalance, registerTransfer } from "../controller/functions.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/consultar", async (req, res) => {
  const { cuenta } = req.query;
  
  )

export default router;
