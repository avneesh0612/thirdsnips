import express from "express";
import passport from "passport";
import dotenv from "dotenv";

import mongo from "./loaders/mongo.loader";

const app = express();
dotenv.config({ path: ".env" });
mongo(process.env.MONGODB_URL);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use(passport.initialize());

passport.serializeUser(function (user: any, done) {
  done(null, user.accessToken);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port} in ${process.env.MODE} mode`);
});
