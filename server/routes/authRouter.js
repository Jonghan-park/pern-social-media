const express = require("express");
const router = express.Router();
const passport = require("passport");
require("dotenv").config();
const CLIENT_URL = process.env.CLIENT_URL;

router.get("/", (req, res) => {
  res.send("Hi auth");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: "profile",
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: true,
  }),
  (req, res) => {
    res.redirect(`${CLIENT_URL}`);
  }
);

module.exports = router;
