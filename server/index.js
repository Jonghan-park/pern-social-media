const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const session = require("express");
const passport = require("passport");

const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL;
const COOKIE_SECRET = process.env.COOKIE_SECRET;
const NODE_ENV = process.env.NODE_ENV;

app.use(
  cors({
    credentials: true,
    origin: CLIENT_URL,
  })
);

app.use(
  session({
    secret: COOKIE_SECRET,
    cookie: {
      secure: NODE_ENV === "production" ? "true" : "auto",
      sameSite: NODE_ENV === "production" ? "none" : "lax",
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
