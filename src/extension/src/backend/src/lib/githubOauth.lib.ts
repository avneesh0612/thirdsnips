import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";

import User from "../models/user.model";

passport.use(
  new GitHubStrategy(
    {
      clientID: `${
        process.env.MODE === "PROD"
          ? process.env.PROD_GITHUB_CLIENT_ID
          : process.env.DEV_GITHUB_CLIENT_ID
      }`,
      clientSecret: `${
        process.env.MODE === "PROD"
          ? process.env.PROD_GITHUB_CLIENT_SECRET
          : process.env.DEV_GITHUB_CLIENT_SECRET
      }`,
      callbackURL: `${
        process.env.MODE === "PROD" ? process.env.PROD_URL : process.env.DEV_URL
      }/auth/github/callback`,
    },
    function (_accessToken, _refreshToken, profile, cb) {}
  )
);
