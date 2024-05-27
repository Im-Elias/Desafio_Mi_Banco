import pg from "pg";
const { Pool } = pg;

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_DATABASE,
  allowexitOnIdle: true,
};

const pool = new Pool(config);

export default pool;
