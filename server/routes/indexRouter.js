const express = require("express");
const router = express.Router();
const isAuth = require("../isAuth");

router.get("/account", isAuth, (req, res) => {
  res.json(req.user);
});

module.exports = router;
