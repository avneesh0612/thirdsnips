import express from "express";
import { auth } from "express-openid-connect";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: ".env" });

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(auth(config));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port} in ${process.env.MODE} mode`);
});
// console.lo
