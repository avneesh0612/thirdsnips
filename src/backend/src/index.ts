import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: ".env" });

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port} in ${process.env.MODE} mode`);
});
