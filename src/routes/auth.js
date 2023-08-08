const express = require('express');
const router = express.Router();
const passport = require('../config/passport');

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

router.get("/login", function (req, res) {
  res.send("Bem-vindo à página de login!");
});

module.exports = router;
