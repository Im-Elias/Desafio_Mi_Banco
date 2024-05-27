import pool from "../model/db.js";

const registerTransfer = async (cuentaOrigen, cuentaDestino, monto) => {
  try {
    await pool.query("BEGIN");
    const descuento = {
      text: "UPDATE cuentas SET saldo = saldo - $1 WHERE id = $2 returning *",
      values: [monto, cuentaOrigen],
    };
    await pool.query(descuento);

    const acredito = {
      text: "UPDATE cuentas SET saldo = saldo + $1 WHERE id = $2",
      values: [monto, cuentaDestino],
    };

    await pool.query(acredito);

    const date = new Date();
    const registro = {
      text: "INSERT INTO transferencias (descripcion, fecha, monto, cuenta_origen, cuenta_destino) VALUES ($1, $2, $3, $4, $5) returning *",
      values: [
        "Transferencia",
        date.toLocaleDateString("es-ES"),
        monto,
        cuentaOrigen,
        cuentaDestino,
      ],
    };
    const result = await pool.query(registro);
    await pool.query("COMMIT");

    console.log("Transferencia realizada correctamente", result.rows[0]);
  } catch (error) {
    console.log(error.message);
    console.log("Error: ", error.code);
  }
};

const getTransfers = async (cuenta) => {
  try {
    const sql = {
      text: "SELECT * FROM transferencias WHERE cuenta_origen = $1 ORDER BY fecha DESC LIMIT 10",
      values: [cuenta],
    };
    const result = await pool.query(sql);
    console.log(result.rows);
  } catch (error) {
    console.log(error.message);
    console.log("Error: ", error.code);
  }
};

const getBalance = async (cuenta) => {
  try {
    const sql = {
      text: "SELECT * FROM cuentas WHERE id = $1",
      values: [cuenta],
    };
    const result = await pool.query(sql);
    console.log(result.rows);
  } catch (error) {
    console.log(error.message);
    console.log("Error: ", error.code);
  }
};

export { registerTransfer, getTransfers, getBalance };
