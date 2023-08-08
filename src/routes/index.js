const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Bem-vindo à página inicial!");
});

router.get('/profile', function (req, res) {
  if(req.user) {
    res.send(`Bem-vindo, ${req.user.name}! <img src="${req.user.photo}" alt="profile picture"/>`);
  } else {
    res.send('Por favor, faça login primeiro!');
  }
});

module.exports = router;
