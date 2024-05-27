import { Router } from "express";
import {
  getTransfers,
  getBalance,
  registerTransfer,
} from "../controller/functions.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/transferir", async (req, res) => {
  try {
    const { cuentaOrigen, cuentaDestino, monto } = req.body;
    await registerTransfer(cuentaOrigen, cuentaDestino, monto);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/consultar", async (req, res) => {
  try {
    const { cuenta } = req.query;
    await getTransfers(cuenta);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/balance", async (req, res) => {
  try {
    const { cuenta } = req.query;
    await getBalance(cuenta);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
