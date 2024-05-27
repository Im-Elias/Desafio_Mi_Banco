import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Routes
app.get("/", router);
